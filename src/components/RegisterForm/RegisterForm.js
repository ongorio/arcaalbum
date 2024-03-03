import { useNavigate } from "react-router-dom";
import { useState, useRef, useContext } from "react";

import {AuthContext} from "../../context/AuthContext";


import styles from './RegisterForm.module.css'

import Button from "../Button/Button";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Input from "../Input/Input";

function RegisterForm () {

    const navigate = useNavigate();
    const ctx = useContext(AuthContext)

    const emailInputRef = useRef(null);
    const nombreInputRef = useRef(null);
    const apellidoInputRef = useRef(null);
    const pswdInputRef = useRef(null);

    const [emailInputState, setEmailInputState] = useState({errors: [], isValid: true});
    const [nombrInputState, setNombreInputState] = useState({errors: [], isValid: true});
    const [apellidoInputState, setApellidoInputState] = useState({errors: [], isValid: true});
    const [pswdInputState, setPswdInputState] = useState({errors: [], isValid: true});


    function loginLinkHandler(event){
        event.preventDefault();
        navigate('/ingresar')
    }

    async function onSubmitHandler (event){
        event.preventDefault();

        let emailValue = emailInputRef.current.getValue();
        let nombreValue = nombreInputRef.current.getValue();
        let apellidoValue = apellidoInputRef.current.getValue();
        let passwordValue = pswdInputRef.current.getValue();

        let isEmailValid = true;
        let isNombreValid = true;
        let isApellidoValid = true;
        let isPasswordValid = true;


        if (emailValue === null || emailValue === undefined || emailValue === '' || !emailValue.includes('@')){
            isEmailValid = false;
        }

        if (nombreValue === null || nombreValue === undefined || nombreValue === '' || nombreValue.length < 2){
            isNombreValid = false;
        }

        if (apellidoValue === null || apellidoValue === undefined || apellidoValue === '' || nombreValue.length < 2){
            isApellidoValid = false;
        }

        if (passwordValue === null || passwordValue === undefined || passwordValue === '' || passwordValue < 6){
            isPasswordValid = false;
        }

        if (!isEmailValid){
            setEmailInputState(prevState => {
                return {...prevState, errors: ['El Correo no es Valido'], isValid: false}
            });
        }else{
            setEmailInputState(prevState => {
                return {...prevState, errors: null, isValid: true}
            });
        }

        if (!isNombreValid){
            setNombreInputState(prevState => {
                return {...prevState, errors: ['El nombre debe tener una longitud de minimo 2'], isValid: false}
            });
        }else{
            setNombreInputState(prevState => {
                return {...prevState, errors: null, isValid: true}
            });
        }

        if (!isApellidoValid){
            setApellidoInputState(prevState => {
                return {...prevState, errors: ['EL apellido debe tener una longitud de minimo 2'], isValid: false}
            });
        }else{
            setApellidoInputState(prevState => {
                return {...prevState, errors: null, isValid: true}
            });
        }

        if (!isPasswordValid){
            setPswdInputState(prevState => {
                return {...prevState, errors: ['La contrasena debe tener una longitud de minimo 6 caracteres'], isValid: false}
            });
        }else{
            setPswdInputState(prevState => {
                return {...prevState, errors: null, isValid: true}
            });
        }

        if (!isEmailValid) emailInputRef.current.focus();
        else if (!isNombreValid) nombreInputRef.current.focus();
        else if (!isApellidoValid) apellidoInputRef.current.focus();
        else if (!isPasswordValid) pswdInputRef.current.focus();

        if (isEmailValid && isNombreValid && isApellidoValid && isPasswordValid){

            let response = await ctx.register({emailValue, apellidoValue, nombreValue, passwordValue});
            console.log(response)
            // TODO: Handle firebase errors properly
        }
    }

    return <form className={`${styles['m-form']}`} onSubmit={onSubmitHandler}>
        <label>Correo</label>
        <div style={{marginBottom: '1rem'}}>
            <Input type={"email"} ref={emailInputRef} isValid={emailInputState.isValid} />
            {!emailInputState.isValid && <ErrorMessage>{emailInputState.errors[0]}</ErrorMessage>}
        </div>

        <label>Nombre</label>
        <div style={{marginBottom: '1rem'}}>
            <Input type={'text'} ref={nombreInputRef} isValid={nombrInputState.isValid} />
            {!nombrInputState.isValid && <ErrorMessage>{nombrInputState.errors[0]}</ErrorMessage>}
        </div>

        <label>Apellido</label>
        <div style={{marginBottom: '1rem'}}>
            <Input type={'text'} ref={apellidoInputRef} isValid={apellidoInputState.isValid} />
            {!apellidoInputState.isValid && <ErrorMessage>{apellidoInputState.errors[0]}</ErrorMessage>}
        </div>
        <label>Contrasena</label>
        <div style={{marginBottom: '1rem'}}>
            <Input type={'password'} ref={pswdInputRef} isValid={pswdInputState.isValid} />
            {!pswdInputState.isValid && <ErrorMessage>{pswdInputState.errors[0]}</ErrorMessage>}
        </div>


        <small>
            <p className={'text-center'}>
                Ya tienes cuenta, Ingresa
                <a onClick={loginLinkHandler} style={{color:'black', cursor: 'pointer'}}>
                    {'\u00a0'}Aqui
                </a>
            </p>
        </small>
        <div className={'m-flex'} style={{marginTop: '1rem'}}>
            <Button className={'m-ml-auto'} btnType={'btn-ch'} type={'submit'} >Registrarse</Button>
        </div>
    </form>
}

export default RegisterForm