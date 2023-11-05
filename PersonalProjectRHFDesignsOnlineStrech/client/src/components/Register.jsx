import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
    // const {mainUser, setMainUser} = props;
    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    const changeHandler = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/registerUser', user, {withCredentials:true})
            .then((res) => {
                // setMainUser(res.data)
                console.log(res.data)
                navigate('/shopInventory')
            })
            .catch((err) => {
                console.log(err)
                setErrors(err.response.data.error.errors)
            })
    }
    return (
        <div>
            <form className='w-50 mx-auto' onSubmit={submitHandler}>
                <div>
                    <label className="form-label">
                    First Name:
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={user.firstName} 
                        name='firstName' 
                        onChange={changeHandler}
                    />
                    {errors.firstName ? <p>{errors.firstName.message}</p> : null}
                </div>
                <div>
                    <label className="form-label">
                    Last Name:
                    </label>
                    <input 
                    type="text" 
                    className="form-control" 
                    value={user.lastName} 
                    name='lastName' 
                    onChange={changeHandler}
                    />
                    {errors.lastName ? <p>{errors.lastName.message}</p> : null}
                </div>
                <div>
                    <label className="form-label">
                    Email:
                    </label>
                    <input 
                    type="email" 
                    className="form-control" 
                    value={user.email} 
                    name='email' 
                    onChange={changeHandler}
                    />
                    {errors.email ? <p>{errors.email.message}</p> : null}
                </div>
                <div>
                    <label className="form-label">
                    Password:
                    </label>
                    <input 
                    type="password" 
                    className="form-control" 
                    value={user.password} 
                    name='password' 
                    onChange={changeHandler}
                    />
                    {errors.password ? <p>{errors.password.message}</p> : null}
                </div>
                <div>
                    <label className="form-label">
                    Confirm Password:
                    </label>
                    <input 
                    type="password" 
                    className="form-control" 
                    value={user.confirmPassword} name='confirmPassword' 
                    onChange={changeHandler}
                    />
                    {errors.confirmPassword ? <p>{errors.confirmPassword.message}</p> : null}
                </div>
                <button className='btn btn-primary d-block'>Register</button>
                <Link to={'/login'}>Already Have An Account?</Link>
            </form>
        </div>
    )
}

export default Register
