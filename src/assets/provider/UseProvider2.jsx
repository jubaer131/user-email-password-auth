
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase.config";
import { createContext, useEffect, useState } from 'react';





export const Authcontext = createContext(null)

const UseProvider2 = ({ children }) => {

    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)

    const creatUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const signInUser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentuser => {
            setuser(currentuser)
            setloading(false)
            console.log('obserbing current user', currentuser)
        })
        return () => {
            unsubcribe()
        }
    }, [])

    const logout = () => {
        setloading(true)
        return signOut(auth)
    }


    const authinfo2 = { user, creatUser, signInUser, logout, loading }

    return (
        <Authcontext.Provider value={authinfo2}>
            {children}
        </Authcontext.Provider >
    );
};

export default UseProvider2


UseProvider2.propTypes = {
    children: PropTypes.node
}