

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "./assets/provider/UseProvider2";


const Heroregister = () => {
    const { creatUser } = useContext(Authcontext)
    console.log(creatUser)

    const [register, setRegister] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;

        if (password.length < 6) {
            setRegister('Please enter a password with at least 6 characters.');
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegister('Password must contain at least one uppercase letter.');
            return;
        }

        setRegister('');
        setSuccess('');

        creatUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess('Registration successful!');
            })
            .catch(error => {
                console.log(error);
                setRegister('Registration failed. Please try again.');
            });
    };

    return (
        <div>
            <div className="hero min-h-screen bg-green-300">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    className="input input-bordered"
                                    required
                                />
                                <span onClick={() => setShowPassword(!showPassword)}>
                                    {/* You can use an eye icon here to toggle password visibility */}
                                    {showPassword ? 'Hide' : 'Show'}
                                </span>
                            </div>
                            <div className="form-control mt-4">
                                <input type="checkbox" id="terms" name="terms" required />
                                <label htmlFor="terms" className="ml-2">I agree to the terms and conditions</label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        {register && <p className="text-red-500">{register}</p>}
                        {success && <p className="text-green-500">{success}</p>}
                        <p>Already have an account? Please <Link to="/login" className="text-blue-500">login</Link>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Heroregister;
