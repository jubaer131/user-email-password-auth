import { Form } from "react-router-dom";


const Register = () => {

    const handleragister = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
    }
    return (
        <div className="mt-14">
            <div className="w-6/12 mx-auto">
                <h1 className="text-center text-4xl font-extrabold">Please register</h1>
                <Form onSubmit={handleragister}>
                    <input className="border-green-400 w-full border-solid mb-6 p-3" placeholder="Email " type="email" name="email" />
                    <br />
                    <input className="border-green-400 w-full border-solid mb-6 p-3" placeholder="password" type="password" name="password" />
                    <br />
                    <input className="border-green-400 w-full border-solid btn" type="submit" value="register" />
                </Form>
            </div>
        </div>
    );
};

export default Register;