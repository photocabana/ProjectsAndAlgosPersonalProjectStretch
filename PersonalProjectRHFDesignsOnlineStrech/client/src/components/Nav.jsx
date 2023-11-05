import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='@media'>
        <img className="card-img-top" src="https://ik.imagekit.io/photocabana7/RHFDesignsOnline/NavBannerDark_elsehfGLx9?updatedAt=1698586185004" alt="Card image cap"></img>
            <Link to={"/shopInventory"}> Home </Link> |
            <Link to={"/create"}> Creation </Link> |
            <Link to={"/company"}> Company </Link>
            <hr/>
        </div>
    )
}

export default Nav

