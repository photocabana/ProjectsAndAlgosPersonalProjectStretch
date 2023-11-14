import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const View = (props) => {
    const { getAllJewelry, loggedUser, setLoggedUser } = props
    const [jewelry, setJewelry] = useState({
        itemNumber: "",
        image: "",
        itemDescription: "",
        medium: "",
        hardware: "",
        cost: "",
        quantity: ""
    })

    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/jewelry/${id}`)
        .then((response) => {
            console.log(response)
            console.log(response.data.oneSingleJewelry)
            setJewelry(response.data.oneSingleJewelry)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [id])

    const handleDeleteJewelry = () => {
    axios.delete(`http://localhost:8000/api/delete/${id}`)
        .then((response) => {
            console.log("Your Jewelry Piece has been removed", response.data)
            console.log(response.data.oneSingleJewelry)
            getAllJewelry()
            navigate("/ShopInventory")
        })
        .catch((err) => {
            console.log("error deleting jewelry piece", err.response)
        })
    }


    return (
        <div className="container">
            <div className="jewelryName">
                <div className="card-deck">
                    <div className="card @media">
                        <div className="col-sm" key={jewelry._id}>
                            <div className="card-body">
                            <p className="card-img-top">
                                <img src={jewelry.image} alt='jewelry image' width={"150px"}/>
                                </p>
                                <h5 className="card-title">{jewelry.itemNumber}</h5>
                                <p className="card-text"><small className="text-muted">{jewelry.itemDescription}</small></p>
                                <p className="card-text"><small className="text-muted">Cost:  ${jewelry.cost}</small></p>
                                <p className="card-text"><small className="text-muted">Qty:  {jewelry.quantity}</small></p>
                            </div>
                            {loggedUser?._id && loggedUser._id === jewelry.creatorId ?
                                <>
                                <Link to={`/edit/${jewelry._id}`}><button className="btn btn-secondary btn-sm">Edit</button></Link>  
                                <button onClick={() => handleDeleteJewelry(jewelry._id)} className="btn btn-secondary btn-sm">Delete</button>
                                </>
                            : null
                            }
                            <Link to={`/view/${jewelry._id}`}><button className="btn btn-secondary btn-sm">View</button></Link>  
                            {/* <Link to={`/edit/${jewelry._id}`}>
                                <button className="btn btn-secondary btn-sm">Edit</button>
                            </Link>
                            <Link to={`/view/${jewelry._id}`}>
                                <button className="btn btn-secondary btn-sm">View</button>
                            </Link>
                            <button onClick={() => handleDeleteJewelry(jewelry._id)} className="btn btn-secondary btn-sm">Delete</button> */}
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default View