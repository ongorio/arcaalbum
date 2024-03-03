import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../fbapp/fbapp';
import {AuthContext} from "../../context/AuthContext";

import Input from "../Input/Input";

import styles from './LoginForm.module.css';
import Button from "../Button/Button";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function LoginForm () {

    const ctx = useContext(AuthContext);
    const navigate = useNavigate();

    const [loginError, setLoginError] = useState(null);

    const [emailInputState, setEmailInputState] = useState({errors: [], isValid: true});
    const [pswdInputState, setPswdInputState] = useState({errors: [], isValid: true});


    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    async function onSubmitHandler(event){
        event.preventDefault(passwordInputRef);

        let emailValue = emailInputRef.current.getValue();
        let passwordValue = passwordInputRef.current.getValue();

        let isEmailValid = true;
        let isPswdValid = true;

        if(emailValue === null || emailValue === undefined || emailValue === '' || !emailValue.includes('@')){
            isEmailValid = false;
        }

        if (passwordValue === null || passwordValue === undefined || passwordValue === ''){
            isPswdValid = false;
        }


        if(!isEmailValid){
            setEmailInputState(prevState => {
                return {...prevState, errors: ['Debe ser un email Valido',], isValid: false}
            });
        }else {
            setEmailInputState(prevState => {
                return {...prevState, errors: null, isValid: true}
            })
        }

        if(!isPswdValid){
            setPswdInputState(prevState => {
                return {...prevState, errors: ['Escribe tu Contrasena'], isValid: false}
            });
        }else {
            setPswdInputState(prevState => {
                return {...prevState, errors: null, isValid: true}
            })
        }

        if (!isEmailValid) emailInputRef.current.focus();
        else if (!isPswdValid) passwordInputRef.current.focus();

        if (isEmailValid && isPswdValid){
            try{

                const response = await ctx.login(emailValue, passwordValue);
                if (response.success){
                    setLoginError(null);
                    navigate('/');
                    return;
                }
                let error = response.errors[0]
                if (error === 'auth/invalid-credential'){
                    setLoginError('Correo/Contrasena Incorrecto')
                }else{
                    setLoginError('Algo Salio Mal! Vuelve a Intentarlo');
                }
            }catch (error){
                setLoginError('Algo Salio Mal! Vuelve a Intentarlo');
            }
        }
    }

    function registerLinkHandler(event){
        event.preventDefault();
        navigate('/registrar')
    }

    return <form className={`${styles['m-form']}`} onSubmit={onSubmitHandler}>
        {
            loginError &&
            <div style={{marginBottom: '1rem'}}>
                <ErrorMessage>{loginError}</ErrorMessage>
            </div>
        }


        <label>Correo</label>
        <div style={{marginBottom: '1rem'}}>

            <Input type={'email'} ref={emailInputRef} placeholder={'example@example.com'} isValid={emailInputState.isValid} />
            {!emailInputState.isValid && <ErrorMessage> {emailInputState.errors[0]} </ErrorMessage>}
        </div>

        <label>Contrasena</label>
        <div style={{marginBottom: '1rem'}}>

            <Input type={'password'} ref={passwordInputRef} isValid={pswdInputState.isValid} />
            {!pswdInputState.isValid && <ErrorMessage> {pswdInputState.errors[0]} </ErrorMessage>}
        </div>

        <small>
            <p className={'text-center'}>
                No tienes cuenta, Registrate
                <a style={{color: 'black', cursor: 'pointer'}} onClick={registerLinkHandler}>
                    {'\u00a0'}Aqui
                </a>
            </p>
        </small>
        <div className={'m-flex'} style={{marginTop: '1rem'}}>
            <Button className={'m-ml-auto'} btnType={'btn-ch'} type={'submit'}>Ingresar</Button>
        </div>

    </form>

}

export default LoginForm