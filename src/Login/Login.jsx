

import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { Authcontext } from '../assets/provider/UseProvider2';

const Login = () => {
    const Navigate = useNavigate()


    const { signInUser } = useContext(Authcontext);
    const [success, setSuccess] = useState('')
    const [error, seterror] = useState('')

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setSuccess('')
        seterror('')


        signInUser(email, password)
            .then(result => {
                const user = result.user;

                console.log(user); // or perform redirection or other actions upon successful login
                setSuccess('Registration successful!')
                e.target.reset()
                Navigate('/')
            })
            .catch(error => {
                console.error(error.message); // Display error message to user
                // seterror('Registration failed. Please try again.')
                seterror(error.message)
            });
    };


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <Link to="/forgot-password" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="px-5">New to login? Please <Link to="/heroregister" className="btn btn-link">register</Link>.</p>

                    {
                        success && <p className='text-green-400 p-5'>{success}</p>
                    }
                    {
                        error && <p className='text-red-400 p-5'>{error}</p>
                    }
                    <Link><button className='btn btn-ghost'>google</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
