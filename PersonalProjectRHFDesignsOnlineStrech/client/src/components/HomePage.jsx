import {useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
    // const {mainUser, setMainUser} = props
    const navigate = useNavigate()


    return (
        <div>
            <div>
                <h1>Welcome to My Shop!</h1>
                <br />
                <h3>Please take a moment to browse around the site</h3>
                <br />
                <p>The three links above will navigate you to different areas within the shop: </p>
                <p>Home directs to the Inventory page,</p> <p>Creation is where a custom piece can be ordered,</p> 
                <p>and there is a link to my companies story.</p>
                <div>
                    <Link className='text-black' to={'/register'}><button>Dont have an account? Sign up here</button></Link>  <Link className='text-black' to={'/login'}><button>Returning guest? Sign In here</button></Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage
