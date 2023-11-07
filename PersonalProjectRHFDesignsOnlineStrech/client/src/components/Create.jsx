import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Create = (props) => {
    const {loggedUser, setAllJewelry} = props
    const [jewelry, setJewelry] = useState({
        itemNumber: "",
        itemDescription: "",
        medium: "",
        hardware: "",
        cost: "",
        quantity: "",
        image: "",
        creatorId: loggedUser._id
    })

    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/new`, jewelry)
        .then(response => {
            // allDesigns is the better getter - after the arrow is implied
            setAllJewelry(allDesigns => [...allDesigns, response.data.newlyCreatedJewelry])
            console.log(response)
            navigate("/ShopInventory")
        })
        .catch(err => {
            console.log(err.response)
            setErrors(err.response.data.error.errors)
        })
    }

    const logoutUser = () => {
        axios.post('http://localhost:8000/api/logoutUser', {}, {withCredentials:true})
            .then((res) => {
                console.log(res)
                navigate('/')
            })
            .catch((err) => {
                console.log(err);
            })
    }

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

                                <label htmlFor="itemNumber"><b>Image Item #:</b></label>
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

                {/* Jewelry - Enter Image Section */}

                            <div className='jewelryHolder'>
                                <div key={jewelry._id} className={`card-rounded ${jewelry.selected ? 'selected' : ''}`}>
                                <label htmlFor="quantity"><b>Images: </b></label>
                                    <div className='card-image'>
                                        <img width={"150px"}
                                        className='img-fluid'
                                        src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0009.JPG?updatedAt=1698582998763"
                                        name="004a"
                                        value="004a"
                                        {...jewelry.image === "004a"} 
                                        onChange={(e) => setJewelry({ ...jewelry, image: e.target.value })}
                                        onClick={() => (`${jewelry.image}`)}
                                        />
                                        <input className='card-body text-center'
                                        type="radio"
                                        name="jewelry"
                                        checked={jewelry.selected}
                                        onChange={(e) => {
                                        setJewelry(oldJewelry => ({
                                            ...oldJewelry, 
                                            image: e.target.previousSibling.src,
                                            itemNumber: e.target.previousSibling.name
                                        }))}}
                                        />
                                        <h3>004a</h3>
                                        {/* <h3 onClick={() => (`${jewelry.itemNumber}`)}>
                                        {jewelry.itemNumber}004a
                                        </h3> */}
                                        <hr />
                                    </div>
                                </div>
                                <div key={jewelry._id} className={`card-rounded ${jewelry.selected ? 'selected' : ''}`}>
                                    <div className='card-image'>
                                        <img width={"150px"}
                                        className='img-fluid'
                                        src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0011.JPG?updatedAt=1698583003687"
                                        name="006a"
                                        value="006a"
                                        {...jewelry.image === "006a"} 
                                        onChange={(e) => setJewelry({ ...jewelry, image: e.target.value })}
                                        onClick={() => (`${jewelry.image}`)}
                                        />
                                        <input className='card-body text-center'
                                        type="radio"
                                        name="jewelry"
                                        checked={jewelry.selected}
                                        onChange={(e) => {
                                        setJewelry(oldJewelry => ({
                                            ...oldJewelry, 
                                            image: e.target.previousSibling.src,
                                            itemNumber: e.target.previousSibling.name
                                        }))}}
                                        />
                                        <h3>006a</h3>
                                        {/* <h3 onClick={() => (`${jewelry.itemNumber}`)}>
                                        {jewelry.itemNumber}006a
                                        </h3> */}
                                        <hr />
                                    </div>
                                </div>
                                <div key={jewelry._id} className={`card-rounded ${jewelry.selected ? 'selected' : ''}`}>
                                    <div className='card-image'>
                                        <img width={"150px"}
                                        className='img-fluid'
                                        src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0019.JPG?updatedAt=1698583028438"
                                        name="007a"
                                        value="007a"
                                        {...jewelry.image === "007a"} 
                                        onChange={(e) => setJewelry({ ...jewelry, image: e.target.value })}
                                        onClick={() => (`${jewelry.image}`)}
                                        />
                                        <input className='card-body text-center'
                                        type="radio"
                                        name="jewelry"
                                        checked={jewelry.selected}
                                        onChange={(e) => {
                                        setJewelry(oldJewelry => ({
                                            ...oldJewelry, 
                                            image: e.target.previousSibling.src,
                                            itemNumber: e.target.previousSibling.name
                                        }))}}
                                        />
                                        <h3>007a</h3>
                                        {/* <h3 onClick={() => (`${jewelry.itemNumber}`)}>
                                        {jewelry.itemNumber}007a
                                        </h3> */}
                                        <hr />
                                    </div>
                                </div>
                                <div key={jewelry._id} className={`card-rounded ${jewelry.selected ? 'selected' : ''}`}>
                                    <div className='card-image'>
                                        <img width={"150px"}
                                        className='img-fluid'
                                        src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0023.JPG?updatedAt=1698583028096"
                                        name="011a"
                                        value="011a"
                                        {...jewelry.image === "011a"} 
                                        onChange={(e) => setJewelry({ ...jewelry, image: e.target.value })}
                                        onClick={() => (`${jewelry.image}`)}
                                        />
                                        <input className='card-body text-center'
                                        type="radio"
                                        name="jewelry"
                                        checked={jewelry.selected}
                                        onChange={(e) => {
                                        setJewelry(oldJewelry => ({
                                            ...oldJewelry, 
                                            image: e.target.previousSibling.src,
                                            itemNumber: e.target.previousSibling.name
                                        }))}}
                                        />
                                        <h3>011a</h3>
                                        {/* <h3 onClick={() => (`${jewelry.itemNumber}`)}>
                                        {jewelry.itemNumber}011a
                                        </h3> */}
                                        <hr />
                                    </div>
                                </div>
                                <div key={jewelry._id} className={`card-rounded ${jewelry.selected ? 'selected' : ''}`}>
                                    <div className='card-image'>
                                        <img width={"150px"}
                                        className='img-fluid'
                                        src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0014.JPG?updatedAt=1698583000911"
                                        name="015a"
                                        value="015a"
                                        {...jewelry.image === "015a"} 
                                        onChange={(e) => setJewelry({ ...jewelry, image: e.target.value })}
                                        onClick={() => (`${jewelry.image}`)}
                                        />
                                        <input className='card-body text-center'
                                        type="radio"
                                        name="jewelry"
                                        checked={jewelry.selected}
                                        onChange={(e) => {
                                        setJewelry(oldJewelry => ({
                                            ...oldJewelry, 
                                            image: e.target.previousSibling.src,
                                            itemNumber: e.target.previousSibling.name
                                        }))}}
                                        />
                                        <h3>015a</h3>
                                        {/* <h3 onClick={() => (`${jewelry.itemNumber}`)}>
                                        {jewelry.itemNumber}015a
                                        </h3> */}
                                        <hr />
                                    </div>
                                </div>
                                <div key={jewelry._id} className={`card-rounded ${jewelry.selected ? 'selected' : ''}`}>
                                    <div className='card-image'>
                                        <img width={"150px"}
                                        className='img-fluid'
                                        src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0021.JPG?updatedAt=1698583028484"
                                        name="017a"
                                        value="017a"
                                        {...jewelry.image === "017a"} 
                                        onChange={(e) => setJewelry({ ...jewelry, image: e.target.value })}
                                        onClick={() => (`${jewelry.image}`)}
                                        />
                                        <input className='card-body text-center'
                                        type="radio"
                                        name="jewelry"
                                        checked={jewelry.selected}
                                        onChange={(e) => {
                                        setJewelry(oldJewelry => ({
                                            ...oldJewelry, 
                                            image: e.target.previousSibling.src,
                                            itemNumber: e.target.previousSibling.name
                                        }))}}
                                        />
                                        <h3>017a</h3>
                                        {/* <h3 onClick={() => (`${jewelry.itemNumber}`)}>
                                        {jewelry.itemNumber}017a
                                        </h3> */}
                                        <hr />
                                    </div>
                                </div>
                                <div key={jewelry._id} className={`card-rounded ${jewelry.selected ? 'selected' : ''}`}>
                                    <div className='card-image'>
                                        <img width={"150px"}
                                        className='img-fluid'
                                        src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0022.JPG?updatedAt=1698583028643"
                                        name="023a"
                                        value="023a"
                                        {...jewelry.image === "023a"} 
                                        onChange={(e) => setJewelry({ ...jewelry, image: e.target.value })}
                                        onClick={() => (`${jewelry.image}`)}
                                        />
                                        <input className='card-body text-center'
                                        type="radio"
                                        name="jewelry"
                                        checked={jewelry.selected}
                                        onChange={(e) => {
                                        setJewelry(oldJewelry => ({
                                            ...oldJewelry, 
                                            image: e.target.previousSibling.src,
                                            itemNumber: e.target.previousSibling.name
                                        }))}}
                                        />
                                        <h3>023a</h3>
                                        {/* <h3 onClick={() => (`${jewelry.itemNumber}`)}>
                                        {jewelry.itemNumber}023a
                                        </h3> */}
                                        <hr />
                                    </div>
                                </div>
                                <div key={jewelry._id} className={`card-rounded ${jewelry.selected ? 'selected' : ''}`}>
                                    <div className='card-image'>
                                        <img width={"150px"}
                                        className='img-fluid'
                                        src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0008.JPG?updatedAt=1698583001642"
                                        name="034a"
                                        value="034a"
                                        {...jewelry.image === "034a"} 
                                        onChange={(e) => setJewelry({ ...jewelry, image: e.target.value })}
                                        onClick={() => (`${jewelry.image}`)}
                                        />
                                        <input className='card-body text-center'
                                        type="radio"
                                        name="jewelry"
                                        checked={jewelry.selected}
                                        onChange={(e) => {
                                        setJewelry(oldJewelry => ({
                                            ...oldJewelry, 
                                            image: e.target.previousSibling.src,
                                            itemNumber: e.target.previousSibling.name
                                        }))}}
                                        />
                                        <h3>034a</h3>
                                        {/* <h3 onClick={() => (`${jewelry.itemNumber}`)}>
                                        {jewelry.itemNumber}034a
                                        </h3> */}
                                        <hr />
                                    </div>
                                </div>
                                <div key={jewelry._id} className={`card-rounded ${jewelry.selected ? 'selected' : ''}`}>
                                    <div className='card-image'>
                                        <img width={"150px"}
                                        className='img-fluid'
                                        src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0016.JPG?updatedAt=1698583026369"
                                        name="035a"
                                        value="035a"
                                        {...jewelry.image === "035a"} 
                                        onChange={(e) => setJewelry({ ...jewelry, image: e.target.value })}
                                        onClick={() => (`${jewelry.image}`)}
                                        />
                                        <input className='card-body text-center'
                                        type="radio"
                                        name="jewelry"
                                        checked={jewelry.selected}
                                        onChange={(e) => {
                                        setJewelry(oldJewelry => ({
                                            ...oldJewelry, 
                                            image: e.target.previousSibling.src,
                                            itemNumber: e.target.previousSibling.name
                                        }))}}
                                        />
                                        <h3>035a</h3>
                                        {/* <h3 onClick={() => (`${jewelry.itemNumber}`)}>
                                        {jewelry.itemNumber}035a
                                        </h3> */}
                                        <hr />
                                    </div>
                                </div>
                                <div key={jewelry._id} className={`card-rounded ${jewelry.selected ? 'selected' : ''}`}>
                                    <div className='card-image'>
                                        <img width={"150px"}
                                        className='img-fluid'
                                        src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0017.JPG?updatedAt=1698583027113"
                                        name="041a"
                                        value="041a"
                                        {...jewelry.image === "041a"} 
                                        onChange={(e) => setJewelry({ ...jewelry, image: e.target.value })}
                                        onClick={() => (`${jewelry.image}`)}
                                        />
                                        <input className='card-body text-center'
                                        type="radio"
                                        name="jewelry"
                                        checked={jewelry.selected}
                                        onChange={(e) => {
                                        setJewelry(oldJewelry => ({
                                            ...oldJewelry, 
                                            image: e.target.previousSibling.src,
                                            itemNumber: e.target.previousSibling.name
                                        }))}}
                                        />
                                        <h3>041a</h3>
                                        {/* <h3 onClick={() => (`${jewelry.itemNumber}`)}>
                                        {jewelry.itemNumber}041a
                                        </h3> */}
                                        <hr />
                                    </div>
                                </div>
                                <div key={jewelry._id} className={`card-rounded ${jewelry.selected ? 'selected' : ''}`}>
                                    <div className='card-image'>
                                        <img width={"150px"}
                                        className='img-fluid'
                                        src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0018.JPG?updatedAt=1698583028480"
                                        name="049a"
                                        value="049a"
                                        {...jewelry.image === "049a"} 
                                        onChange={(e) => setJewelry({ ...jewelry, image: e.target.value })}
                                        onClick={() => (`${jewelry.image}`)}
                                        />
                                        <input className='card-body text-center'
                                        type="radio"
                                        name="jewelry"
                                        checked={jewelry.selected}
                                        onChange={(e) => {
                                        setJewelry(oldJewelry => ({
                                            ...oldJewelry, 
                                            image: e.target.previousSibling.src,
                                            itemNumber: e.target.previousSibling.name
                                        }))}}
                                        />
                                        <h3>049a</h3>
                                        {/* <h3 onClick={() => (`${jewelry.itemNumber}`)}>
                                        {jewelry.itemNumber}049a
                                        </h3> */}
                                        <hr />
                                    </div>
                                </div>
                                <div key={jewelry._id} className={`card-rounded ${jewelry.selected ? 'selected' : ''}`}>
                                    <div className='card-image'>
                                        <img width={"150px"}
                                        className='img-fluid'
                                        src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0013.JPG?updatedAt=1698583000217"
                                        name="051a"
                                        value="051a"
                                        {...jewelry.image === "051a"} 
                                        onChange={(e) => setJewelry({ ...jewelry, image: e.target.value })}
                                        onClick={() => (`${jewelry.image}`)}
                                        />
                                        <input className='card-body text-center'
                                        type="radio"
                                        name="jewelry"
                                        checked={jewelry.selected}
                                        onChange={(e) => {
                                        setJewelry(oldJewelry => ({
                                            ...oldJewelry, 
                                            image: e.target.previousSibling.src,
                                            itemNumber: e.target.previousSibling.name
                                        }))}}
                                        />
                                        <h3>051a</h3>
                                        {/* <h3 onClick={() => (`${jewelry.itemNumber}`)}>
                                        {jewelry.itemNumber}051a
                                        </h3> */}
                                        <hr />
                                    </div>
                                </div>
                                <div key={jewelry._id} className={`card-rounded ${jewelry.selected ? 'selected' : ''}`}>
                                    <div className='card-image'>
                                        <img width={"150px"}
                                        className='img-fluid'
                                        src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0024.JPG?updatedAt=1698583030080"
                                        name="052a"
                                        value="052a"
                                        {...jewelry.image === "052a"} 
                                        onChange={(e) => setJewelry({ ...jewelry, image: e.target.value })}
                                        onClick={() => (`${jewelry.image}`)}
                                        />
                                        <input className='card-body text-center'
                                        type="radio"
                                        name="jewelry"
                                        checked={jewelry.selected}
                                        onChange={(e) => {
                                        setJewelry(oldJewelry => ({
                                            ...oldJewelry, 
                                            image: e.target.previousSibling.src,
                                            itemNumber: e.target.previousSibling.name
                                        }))}}
                                        />
                                        <h3>052a</h3>
                                        <h3 onClick={() => (`${jewelry.itemNumber}`)}>
                                        {jewelry.itemNumber}052a
                                        </h3>
                                        <hr />
                                    </div>
                                </div>
                                <div key={jewelry._id} className={`card-rounded ${jewelry.selected ? 'selected' : ''}`}>
                                    <div className='card-image'>
                                        <img width={"150px"}
                                        className='img-fluid'
                                        src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0015.JPG?updatedAt=1698583024867"
                                        name="053a"
                                        value="053a"
                                        {...jewelry.image === "053a"} 
                                        onChange={(e) => setJewelry({ ...jewelry, image: e.target.value })}
                                        onClick={() => (`${jewelry.image}`)}
                                        />
                                        <input className='card-body text-center'
                                        type="radio"
                                        name="jewelry"
                                        checked={jewelry.selected}
                                        onChange={(e) => {
                                        setJewelry(oldJewelry => ({
                                            ...oldJewelry, 
                                            image: e.target.previousSibling.src,
                                            itemNumber: e.target.previousSibling.name
                                        }))}}
                                        />
                                        <h3>053a</h3>
                                        {/* <h3 onClick={() => (`${jewelry.itemNumber}`)}>
                                        {jewelry.itemNumber}053a
                                        </h3> */}
                                        <hr />
                                    </div>
                                </div>
                                <div key={jewelry._id} className={`card-rounded ${jewelry.selected ? 'selected' : ''}`}>
                                    <div className='card-image'>
                                        <img width={"150px"}
                                        className='img-fluid'
                                        src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0006.JPG?updatedAt=1698583000604"
                                        name="055a"
                                        value="055a"
                                        {...jewelry.image === "055a"} 
                                        onChange={(e) => setJewelry({ ...jewelry, image: e.target.value })}
                                        onClick={() => (`${jewelry.image}`)}
                                        />
                                        <input className='card-body text-center'
                                        type="radio"
                                        name="jewelry"
                                        checked={jewelry.selected}
                                        onChange={(e) => {
                                            setJewelry(oldJewelry => ({
                                                ...oldJewelry, 
                                                image: e.target.previousSibling.src,
                                                itemNumber: e.target.previousSibling.name
                                            }))}}
                                        />
                                        <h3>055a</h3>
                                        {/* <h3 onClick={() => (`${jewelry.itemNumber}`)}>
                                        {jewelry.itemNumber}055a
                                        </h3> */}
                                        <hr />
                                    </div>
                                </div>
                                <div key={jewelry._id} className={`card-rounded ${jewelry.selected ? 'selected' : ''}`}>
                                    <div className='card-image'>
                                        <img width={"150px"}
                                        className='img-fluid'
                                        src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0025.JPG?updatedAt=1698583032842"
                                        name="061a"
                                        value="061a"
                                        {...jewelry.image === "061a"} 
                                        onChange={(e) => setJewelry({ ...jewelry, image: e.target.value })}
                                        onClick={() => (`${jewelry.image}`)}
                                        />
                                        <input className='card-body text-center'
                                        type="radio"
                                        name="jewelry"
                                        checked={jewelry.selected}
                                        onChange={(e) => {
                                            setJewelry(oldJewelry => ({
                                                ...oldJewelry, 
                                                image: e.target.previousSibling.src,
                                                itemNumber: e.target.previousSibling.name
                                            }))}}
                                        />
                                        <h3>061a</h3>
                                        {/* <h3 onClick={() => (`${jewelry.itemNumber}`)}>
                                        {jewelry.itemNumber}061a
                                        </h3> */}
                                        <hr />
                                    </div>
                                </div>
                                <div key={jewelry._id} className={`card-rounded ${jewelry.selected ? 'selected' : ''}`}>
                                    <div className='card-image'>
                                        <img width={"150px"}
                                        className='img-fluid'
                                        src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0005.JPG?updatedAt=1698583002224"
                                        name="062a"
                                        value="062a"
                                        {...jewelry.image === "062a"} 
                                        onChange={(e) => setJewelry({ ...jewelry, image: e.target.value })}
                                        onClick={() => (`${jewelry.image}`)}
                                        />
                                        <input className='card-body text-center'
                                        type="radio"
                                        name="jewelry"
                                        checked={jewelry.selected}
                                        onChange={(e) => {
                                            setJewelry(oldJewelry => ({
                                                ...oldJewelry, 
                                                image: e.target.previousSibling.src,
                                                itemNumber: e.target.previousSibling.name
                                            }))}}
                                        />
                                        <h3>062a</h3>
                                        {/* <h3 onClick={() => (`${jewelry.itemNumber}`)}>
                                        {jewelry.itemNumber}062a
                                        </h3> */}
                                        <hr />
                                    </div>
                                </div>
                                <div key={jewelry._id} className={`card-rounded ${jewelry.selected ? 'selected' : ''}`}>
                                    <div className='card-image'>
                                        <img width={"150px"}
                                        className='img-fluid'
                                        src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0027.JPG?updatedAt=1698583055738"
                                        name="066a"
                                        value="066a"
                                        {...jewelry.image === "066a"} 
                                        onChange={(e) => setJewelry({ ...jewelry, image: e.target.value })}
                                        onClick={() => (`${jewelry.image}`)}
                                        />
                                        <input className='card-body text-center'
                                        type="radio"
                                        name="jewelry"
                                        checked={jewelry.selected}
                                        onChange={(e) => {
                                            setJewelry(oldJewelry => ({
                                                ...oldJewelry, 
                                                image: e.target.previousSibling.src,
                                                itemNumber: e.target.previousSibling.name
                                            }))}}
                                        />
                                        <h3>066a</h3>
                                        {/* <h3 onClick={() => (`${jewelry.itemNumber}`)}>
                                        {jewelry.itemNumber}066a
                                        </h3> */}
                                        <hr />
                                    </div>
                                </div>
                                <div key={jewelry._id} className={`card-rounded ${jewelry.selected ? 'selected' : ''}`}>
                                    <div className='card-image'>
                                        <img width={"150px"}
                                        className='img-fluid'
                                        src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0026.JPG?updatedAt=1698583056018"
                                        name="075a"
                                        value="075a"
                                        {...jewelry.image === "075a"} 
                                        onChange={(e) => setJewelry({ ...jewelry, image: e.target.value })}
                                        onClick={() => (`${jewelry.image}`)}
                                        />
                                        <input className='card-body text-center'
                                        type="radio"
                                        name="jewelry"
                                        checked={jewelry.selected}
                                        onChange={(e) => {
                                            setJewelry(oldJewelry => ({
                                                ...oldJewelry, 
                                                image: e.target.previousSibling.src,
                                                itemNumber: e.target.previousSibling.name
                                            }))}}
                                        />
                                        <h3>075a</h3>
                                        {/* <h3 onClick={() => (`${jewelry.itemNumber}`)}>
                                        {jewelry.itemNumber}075a
                                        </h3> */}
                                        <hr />
                                    </div>
                                </div>
                                <div key={jewelry._id} className={`card-rounded ${jewelry.selected ? 'selected' : ''}`}>
                                    <div className='card-image'>
                                        <img width={"150px"}
                                        className='img-fluid'
                                        src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0002.JPG?updatedAt=1698583001186"
                                        name="078a"
                                        value="078a"
                                        {...jewelry.image === "078a"} 
                                        onChange={(e) => setJewelry({ ...jewelry, image: e.target.value })}
                                        onClick={() => (`${jewelry.image}`)}
                                        />
                                        <input className='card-body text-center'
                                        type="radio"
                                        name="jewelry"
                                        checked={jewelry.selected}
                                        onChange={(e) => {
                                            setJewelry(oldJewelry => ({
                                                ...oldJewelry, 
                                                image: e.target.previousSibling.src,
                                                itemNumber: e.target.previousSibling.name
                                            }))}}

                                            />
                                        <h3>078a</h3>
                                        {/* <h3 onClick={() => (`${jewelry.itemNumber}`)}>
                                        {jewelry.itemNumber}078a
                                        </h3> */}
                                        <hr />
                                    </div>
                                </div>
                                <div key={jewelry._id} className={`card-rounded ${jewelry.selected ? 'selected' : ''}`}>
                                    <div className='card-image'>
                                        <img width={"150px"}
                                        className='img-fluid'
                                        src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0010.JPG?updatedAt=1698583002354"
                                        name="079a"
                                        value="079a"
                                        {...jewelry.image === "079a"} 
                                        onChange={(e) => setJewelry({ ...jewelry, image: e.target.value })}
                                        onClick={() => (`${jewelry.image}`)}
                                        />
                                        <input className='card-body text-center'
                                        type="radio"
                                        name="jewelry"
                                        checked={jewelry.selected}
                                        onChange={(e) => {
                                            setJewelry(oldJewelry => ({
                                                ...oldJewelry, 
                                                image: e.target.previousSibling.src,
                                                itemNumber: e.target.previousSibling.name
                                            }))}}
                                        />
                                        <h3>079a</h3>
                                        {/* <h3 onClick={() => (`${jewelry.itemNumber}`)}>
                                        {jewelry.itemNumber}079a
                                        </h3> */}
                                        <hr />
                                    </div>
                                </div>
                                {errors.hardware ? <p>{errors.hardware.message}</p> : null}
                            </div>

                            <br/>

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
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0021.JPG?updatedAt=1698583028484" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0022.JPG?updatedAt=1698583028643" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0024.JPG?updatedAt=1698583030080" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0027.JPG?updatedAt=1698583055738" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0014.JPG?updatedAt=1698583000911" alt="Card image cap"/>
                            {/* <img className="card-img-top" src="..." alt="Card image cap"/> */}
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
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0013.JPG?updatedAt=1698583000217" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0016.JPG?updatedAt=1698583026369" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0011.JPG?updatedAt=1698583003687" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0017.JPG?updatedAt=1698583027113" alt="Card image cap"/>
                            <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/IMG_0023.JPG?
                            updatedAt=1698583028096" alt="Card image cap"/>
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