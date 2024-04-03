import { useContext } from "react";
import { Authcontext } from "../assets/provider/UseProvider2";
import { Navigate } from "react-router-dom";


const Privaterout = ({ children }) => {

    const { user, loading } = useContext(Authcontext)
    if (loading) {
        return <span><span className="loading loading-spinner loading-lg"></span>
            # Loading dots</span>
    }


    if (user) {
        return children
    }
    return <Navigate to="/login"></Navigate>
};

export default Privaterout;