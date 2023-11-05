import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [userLogin, setUserLogin] = useState({
        email:'',
        password:''
    })

    const [errors, setErrors] = useState()
    const navigate = useNavigate()

    const onChangeHandler = (e) => {
        setUserLogin({...userLogin, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/loginUser', userLogin, {withCredentials:true})
            .then((res) => {
                console.log(res.data.message)
                navigate("/shopInventory")
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response.data.message)
            })
    }
    return (
        <div>
            <form onSubmit={submitHandler} className='col-4 mx-auto user-form mt-5'>
                <label className='form-label'>Email:</label>
                <input 
                type="text" 
                name="email" 
                className='form-control'
                onChange={onChangeHandler} 
                value={userLogin.email} 
                />
                {errors ? <p>{errors}</p> : null}

                <label className='form-label'>Password:</label>
                <input 
                type="password" 
                name="password" 
                className='form-control' 
                onChange={onChangeHandler} 
                value={userLogin.password} 
                />
                {errors ? <p>{errors}</p> : null}

                <button className='btn btn-dark border mt-3'>Login</button>
                <br />
                <Link className='text-black' to={'/register'}>Dont have an account? Sign up here</Link>
            </form>
        </div>
    )
}

export default Login
