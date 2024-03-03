import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {auth, app, db} from "../fbapp/fbapp";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {doc, setDoc, addDoc, collection, getDoc} from "firebase/firestore";

export const AuthContext = React.createContext({
    login: (email, pswd) =>{},
    logout:() => {},
    register: userData => {},
    getUserData: () =>{},
    userInfo: {
        isAuthenticated: false,
        email: '',
        firstname: '',
        lastname: '',
        userUid: ''
    }
})

export const AuthContextProvider = props =>{
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        isAuthenticated: false,
        email: '',
        firstname: '',
        lastname: '',
        userUid: ''
    })


    async function getUserData(){
        if(userInfo.isAuthenticated){
            const docRef = doc(db, 'userExtensions', userInfo.userUid);
            const docSnap = await getDoc(docRef);
            const data = docSnap.data();

            setUserInfo(prevState => {
                return {...prevState, firstname: data.firstName, lastname: data.lastName}
            })
        }
    }


    async function register(userData){
        let response = {errors: [], success: true}

        let user;
        try{
            let userCredential = await createUserWithEmailAndPassword(auth, userData.emailValue, userData.passwordValue)

            await setDoc(doc(db, 'userExtensions', userCredential.user.uid), {
                email: userData.emailValue,
                firstName: userData.nombreValue,
                lastName: userData.apellidoValue,
                userUid: userCredential.user.uid
            })

        }catch (error){
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log('Error Code: ', errorCode);
            console.log('Error Message: ', errorMessage);


            response = {...response, errors: [errorCode,], success: false}
        }

        return response;
    }

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
        auth.onAuthStateChanged(async(user)=>{
            if (user?.uid){

                let docRef = doc(db, 'userExtensions', user.uid);
                const docSnap = await getDoc(docRef);
                const data = docSnap.data();

                setUserInfo(prevState => {
                    return {...prevState, email: user.email, firstname:data.firstName, lastname: data.lastName, userUid:user.uid,  isAuthenticated: true}
                })
            }else{
                setUserInfo(prevState => {
                    return {...prevState, email: '', firstname: '', lastname: '', userUid: '' ,  isAuthenticated: false}
                })
            }
        })
    },[])



    return <AuthContext.Provider value={{
        login: login,
        logout: logout,
        register: register,
        userInfo: userInfo,
        getUserData: getUserData
    }}>
        {props.children}
    </ AuthContext.Provider>
}
