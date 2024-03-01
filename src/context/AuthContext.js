import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { auth, app } from "../fbapp/fbapp";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import errorMessage from "../components/ErrorMessage/ErrorMessage";

export const AuthContext = React.createContext({
    login: (email, pswd) =>{},
    logout:() => {},
    userInfo: {
        isAuthenticated: false,
        email: '',
        firstname: '',
        lastname: ''
    }
})

export const AuthContextProvider = props =>{
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        isAuthenticated: false,
        email: '',
        firstname: '',
        lastname: ''
    })


    async function login(email, pswd) {
        let response = {errors: [], success: true};

        try{
            const userCredentials = await signInWithEmailAndPassword(auth, email, pswd);
            const user = userCredentials.user;
            setUserInfo(prevState => {
                return {...prevState, isAuthenticated:true,  email:user.email}
            });
        }catch (error){
            const errorCode = error.code;
            const errorMessage = error.message;

            response = {...response, errors: [errorCode,], success: false}
        }

        return response;
    }

    function logout (){
        signOut(auth)
            .then(()=>{
                setUserInfo(prevState => {
                    return {...prevState, email: '', isAuthenticated: false}
                })
                navigate('/')
            })
            .catch(error=>{
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log('Error Code: ', errorCode);
                console.log('Error Message: ', errorMessage);
            })
    }

    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            if (user?.uid){
                setUserInfo(prevState => {
                    return {...prevState, email: user.email, isAuthenticated: true}
                })
            }else{
                setUserInfo(prevState => {
                    return {...prevState, email: '', isAuthenticated: false}
                })
            }
        })
    },[])



    return <AuthContext.Provider value={{
        login: login,
        logout: logout,
        userInfo: userInfo,
    }}>
        {props.children}
    </ AuthContext.Provider>
}
