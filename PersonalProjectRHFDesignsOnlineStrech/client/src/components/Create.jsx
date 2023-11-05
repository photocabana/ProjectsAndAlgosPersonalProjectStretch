import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Create = () => {
    const [jewelry, setJewelry] = useState({
        itemNumber: "",
        itemDescription: "",
        medium: "",
        hardware: "",
        cost: "",
        quantity: "",
        file: ""
    })

    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/new`, jewelry)
        .then(response => {
            console.log(response)
            navigate("/shopInventory")
        })
        .catch(err => {
            console.log(err.response)
            setErrors(err.response.data.error.errors)
        })
    }

    const logoutUser = () => {
        axios.post('http://localhost:8000/api/logoutUser', {}, {withCredentials:true})
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }


    // function handleChange(e) {
	// 	console.log(e.target.file);
	// 	setJewelry(URL.createObjectURL(e.target.jewelry.file[0]));
	// }

    // const fileFilter = (req, file, cb) => {
    //     const allowedFileTypes =  ["image/jpeg", "image/jpg", "image/png"]
    
    //         if(allowedFileTypes.includes(file.mimetype)) {
    //             cb(null, true)
    //         } else {
    //             cb(null, false)
    //         }
    //     }
    


    return (
        <div>
            <Link to={'/register'}><button className="btn btn-secondary btn-sm">Register</button></Link>  <Link to={'/login'}><button className="btn btn-secondary btn-sm">Sign In</button></Link>  <button onClick={logoutUser} className="btn btn-secondary btn-sm">Logout</button>
            <div className='card @media'>
                <h2 className="creativity">Feeling Creative?</h2>
                <br/>
                <br/>
                <div className="flex-container">

                    <br/>

                {/* Jewelry - Left Side Section */}

                    <div className="flex-item-left">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">

                {/* Jewelry - Item Nunmber Section */}

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

                {/* Jewelry - Item Description Section */}

                            <div>
                                <label htmlFor="itemDescription"><b>Item Description: </b></label>
                                <textarea
                                    name="itemDescription" 
                                    value={jewelry.itemDescription} 
                                    placeholder="Type..." 
                                    maxLength={255} 
                                    onChange={(e) => setJewelry({ ...jewelry, itemDescription: e.target.value })}
                                    cols="25" rows="5"
                                /> 
                                {errors.itemDescription ? <p>{errors.itemDescription.message}</p> : null}
                            </div>

                            <br/>

                {/* Jewelry - Medium Section */}

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

                {/* Jewelry - Hardware Section */}

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

                {/* Jewelry - Cost Section */}

                            <div className="form-group">
                                <label htmlFor="cost"><b>Cost:  $ </b></label>
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

                {/* Jewelry - Quantity Section */}

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

                {/* Jewelry - Enter Photo Section */}

                            {/* <div className="form-group">
                                <label htmlFor="quantity"><b>Choose Photo: </b></label>
                                <input 
                                type="photo" 
                                name="photo"
                                value={jewelry.photo}
                                onChange={(e) => setJewelry({ ...jewelry, photo: e.target.value })}
                                <img src={jewelry.photo} />

                            </div> */}

                            <button className="btn btn-secondary btn-sm" type="submit">Submit</button>  <Link to={"/shopInventory"}><button className='btn btn-secondary btn-sm'>Cancel</button></Link>
                        </form>
                    </div>

                {/* Jewelry - Right Side Section */}

                    <div className="flex-item-right">
                    <div className="">
                        <p><b>Examples: </b></p>
                        <div className="container">
                        <div className="row">
                            <div className="col-sm">
                            <img className='card-img-top' src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0036.JPG?updatedAt=1698583058987" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0032.JPG?updatedAt=1698583050934" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0033.JPG?updatedAt=1698583051118" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0031.JPG?updatedAt=1698583046245" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0034.JPG?updatedAt=1698583053438" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0038.JPG?updatedAt=1698583058671" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0039.JPG?updatedAt=1698583058017" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0030.JPG?updatedAt=1698583055849" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0029.JPG?updatedAt=1698583055815" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0028.JPG?updatedAt=1698583055463" alt="Card image cap"/>
                            </div>
                            <div className="col-sm">
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0009.JPG?updatedAt=1698582998763" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0006.JPG?updatedAt=1698583000604" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0008.JPG?updatedAt=1698583001642" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0002.JPG?updatedAt=1698583001186" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0005.JPG?updatedAt=1698583002224" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0010.JPG?updatedAt=1698583002354" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0015.JPG?updatedAt=1698583024867" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0019.JPG?updatedAt=1698583028438" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0018.JPG?updatedAt=1698583028480" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0025.JPG?updatedAt=1698583032842" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0026.JPG?updatedAt=1698583056018" alt="Card image cap"/>
                            </div>
                            <div className="col-sm">
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0013.JPG?updatedAt=1698583000217" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0016.JPG?updatedAt=1698583026369" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0011.JPG?updatedAt=1698583003687" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0017.JPG?updatedAt=1698583027113" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0023.JPG?updatedAt=1698583028096" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0021.JPG?updatedAt=1698583028484" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0022.JPG?updatedAt=1698583028643" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0024.JPG?updatedAt=1698583030080" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0027.JPG?updatedAt=1698583055738" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0014.JPG?updatedAt=1698583000911" alt="Card image cap"/>
                            {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create