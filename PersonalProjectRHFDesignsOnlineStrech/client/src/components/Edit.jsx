import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

const Edit = (props) => {
    const { loggedUser, getAllJewelry } = props
    console.log('props', props)
    const [jewelry, setJewelry] = useState({
        itemNumber: "",
        image: "",
        itemDescription: "",
        medium: "",
        hardware: "",
        cost: "",
        quantity: "",
        creatorId: loggedUser._id
    })

    const {id} = useParams()
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})


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

    const submitHandler = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:8000/api/edit/${id}`, jewelry)
        .then((response) => {
            console.log('Look at me response', response)
            getAllJewelry()
            navigate("/ShopInventory")
        })
        .catch((err) => {
            console.log('look at me', typeof(err), err)

            setErrors(err.response.data.error.errors)
        })
    }


    return (
        <div>
            <div className='card @media'>
                <form onSubmit={submitHandler}>
                    <h2>Edit {jewelry.itemNumber}:</h2>

            {/* Jewelry Item Number Section */}

                    <div className="form-group">
                        <label htmlFor="itemNumber"><b>Item Number: </b></label>
                        <input 
                            type="text" 
                            name="itemNumber" 
                            value={jewelry.itemNumber} 
                            onChange={(e) => setJewelry({ ...jewelry, itemNumber: e.target.value })} 
                        />
                        {errors.itemNumber ? <p>{errors.itemNumber.message}</p> : null}
                    </div>
                    <br/>

            {/* Jewelry Image Section */}

                    <div className="form-group">
                    <p className="card-img-top">
                        <img src={jewelry.image} alt='jewelry image' width={"150px"}/>
                    </p>
                    </div>
                    <br/>

            {/* Jewelry Item Description Section */}

                    <div className="form-group">
                        <label htmlFor="itemDescription"><b>Item Description: </b></label>
                        <textarea
                            name="itemDescription" 
                            value={jewelry.itemDescription} 
                            maxLength={255} 
                            onChange={(e) => setJewelry({ ...jewelry, itemDescription: e.target.value })}
                            cols="25" rows="5"
                        />
                        {errors.itemDescription ? <p>{errors.itemDescription.message}</p> : null}
                    </div>
                    <br/>

            {/* Jewelry Cost Section */}

                    <div className="form-group">
                        <label htmlFor="cost"><b>Cost:  $</b></label>
                        <input 
                            type="number" 
                            pattern='[0-9]*'
                            name="cost" 
                            value={jewelry.cost}
                            onChange={(e) => setJewelry({ ...jewelry, cost: e.target.value })}
                        />
                        {errors.cost ? <p>{errors.cost.message}</p> : null}
                    </div>
                    <br/>

            {/* Jewelry Quantity Section */}

                    <div className="form-group">
                        <label htmlFor="quantity"><b>Quantity: </b></label>
                        <input 
                            type="number" 
                            pattern='[0-9]*'
                            name="quantity" 
                            value={jewelry.quantity}
                            onChange={(e) => setJewelry({ ...jewelry, quantity: e.target.value })}
                        />
                        {errors.quantity ? <p>{errors.quantity.message}</p> : null}
                    </div>
                    <br/>

            {/* Jewelry Medium Section */}

                        <div className="form-group">
                            <label htmlFor="medium"><b>Medium: </b></label>
                            <div className="form-radio">
                                <label>
                                <input
                                    type="radio"
                                    name="Lace"
                                    value="Lace"
                                    checked={jewelry.medium === "Lace"}
                                    onChange={(e) => setJewelry({ ...jewelry, medium: e.target.value })}
                                    className="form-check-input"
                                />
                                Lace
                                </label>
                            </div>
                            <div className="form-radio">
                                <label>
                                <input
                                    type="radio"
                                    name="Wood"
                                    value="Wood"
                                    checked={jewelry.medium === "Wood"}
                                    onChange={(e) => setJewelry({ ...jewelry, medium: e.target.value })}
                                    className="form-check-input"
                                />
                                Wood
                                </label>
                            </div>
                            <div className="form-radio">
                                <label>
                                <input
                                    type="radio"
                                    name="Leather"
                                    value="Leather"
                                    checked={jewelry.medium === "Leather"}
                                    onChange={(e) => setJewelry({ ...jewelry, medium: e.target.value })}
                                    className="form-check-input"
                                />
                                Leather
                                </label>
                            </div>
                            <div className="form-radio">
                                <label>
                                <input
                                    type="radio"
                                    name="Metal"
                                    value="Metal"
                                    checked={jewelry.medium === "Metal"}
                                    onChange={(e) => setJewelry({ ...jewelry, medium: e.target.value })}
                                    className="form-check-input"
                                />
                                Metal
                                </label>
                            </div>
                            <div className="form-radio">
                                <label>
                                <input
                                    type="radio"
                                    name="Pearls"
                                    value="Pearls"
                                    checked={jewelry.medium === "Pearls"}
                                    onChange={(e) => setJewelry({ ...jewelry, medium: e.target.value })}
                                    className="form-check-input"
                                />
                                Pearls
                                </label>
                            </div>
                            {errors.medium ? <p>{errors.medium.message}</p> : null}
                        </div>

                        <br/>

            {/* Jewelry Hardware Section */}

                        <div className="form-group">
                            <label htmlFor="hardware"><b>Hardware: </b></label>
                            <div className="form-radio">
                                <label>
                                <input
                                    type="radio"
                                    name="Silver - Surgical Steel"
                                    value="Silver - Surgical Steel"
                                    checked={jewelry.hardware === "Silver - Surgical Steel"}
                                    onChange={(e) => setJewelry({ ...jewelry, hardware: e.target.value })}
                                    className="form-check-input"
                                />
                                Silver - Surgical Steel
                                </label>
                            </div>
                            <div className="form-radio">
                                <label>
                                <input
                                    type="radio"
                                    name="Silver"
                                    value="Silver"
                                    checked={jewelry.hardware === "Silver"}
                                    onChange={(e) => setJewelry({ ...jewelry, hardware: e.target.value })}
                                    className="form-check-input"
                                />
                                Silver
                                </label>
                            </div>
                            <div className="form-radio">
                                <label>
                                <input
                                    type="radio"
                                    name="18K Gold Plated"
                                    value="18K Gold Plated"
                                    checked={jewelry.hardware === "18K Gold Plated"}
                                    onChange={(e) => setJewelry({ ...jewelry, hardware: e.target.value })}
                                    className="form-check-input"
                                />
                                18K Gold Plated
                                </label>
                            </div>
                            {errors.hardware ? <p>{errors.hardware.message}</p> : null}
                        </div>
                        <br/>
                    <button className="btn btn-secondary btn-sm" type="submit">Submit </button>  <Link to={"/shopInventory"}><button className='btn btn-secondary btn-sm'>Cancel</button></Link>

                    <Link to={`/view/${jewelry._id}`}> <button className="btn btn-secondary btn-sm">View</button> </Link>

                    <button onClick={handleDeleteJewelry}className="btn btn-secondary btn-sm">Delete </button>

                </form>
            </div>
        </div>
    )
}

export default Edit