import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import "../App.css"

const ShopInventory = (props) => {
    const {loggedUser, setLoggedUser, allJewelry, setAllJewelry} = props
    const navigate = useNavigate()
    console.log(loggedUser._id)

    const handleDeleteJewelry = (idFromBelow) => {
    axios.delete(`http://localhost:8000/api/delete/${idFromBelow}`)
        .then((response) => {
        console.log("Your Jewelry piece deletion has been removed")
        console.log(response)
        const filteredJewelry = allJewelry.filter((jewelry) => {
            return jewelry._id !== idFromBelow})
        setAllJewelry(filteredJewelry)})
        .catch((err) => {
        console.log("error deleting jewelry", err.response)
        })
    }

    const logoutUser = () => {
        axios.post('http://localhost:8000/api/logoutUser', {}, {withCredentials:true})
            .then((res) => {
                console.log(res)
                setLoggedUser({})
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <div className="container">
            <Link to={'/register'}><button className="btn btn-secondary btn-sm">Register</button></Link>  <Link to={'/login'}><button className="btn btn-secondary btn-sm">Sign In</button></Link>  <button onClick={logoutUser} className="btn btn-secondary btn-sm">Logout</button>
            <div className="jewelryName">
                <div className="card-deck">
                    <div className="card @media">
                        {allJewelry.map((jewelry) => (
                            <div className="col-sm" key={jewelry._id}>
                            <div className="card-body">
                                <p className="card-img-top">
                                <img src={jewelry.image} alt='jewelry image' width={"150px"}/>
                                </p>
                                <h5 className="card-title">{jewelry.itemNumber}</h5>
                                <p className="card-text"><b>{jewelry.itemDescription}</b></p>
                                <p className="card-text"><b>Cost:  ${jewelry.cost}</b></p>
                                <p className="card-text"><b>Qty:  {jewelry.quantity}</b></p>
                            </div>
                            {loggedUser._id && loggedUser._id === jewelry.creatorId ?
                            <>
                            <Link to={`/edit/${jewelry._id}`}><button className="btn btn-secondary btn-sm">Edit</button></Link>  
                            <button onClick={() => handleDeleteJewelry(jewelry._id)} className="btn btn-secondary btn-sm">Delete</button>
                            </>
                            : null
                            }
                            <Link to={`/view/${jewelry._id}`}><button className="btn btn-secondary btn-sm">View</button></Link>  
                            <hr/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopInventory