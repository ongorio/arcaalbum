import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../Input/Input";

import styles from './LoginForm.module.css';
import Button from "../Button/Button";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function LoginForm () {

    const navigate = useNavigate();

    const [emailInputState, setEmailInputState] = useState({errors: [], isValid: true});
    const [pswdInputState, setPswdInputState] = useState({errors: [], isValid: true});


    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);

    function onSubmitHandler(event){
        event.preventDefault(passwordInputRef);

        let emailValue = emailInputRef.current.value;
        let passwordValue = passwordInputRef.current.value;

        let isEmailValid = true;
        let isPswdValid = true;

        if(emailValue === null || emailValue === '' || !emailValue.includes('@')){
            isEmailValid = false;
        }

        if (passwordValue === null || passwordValue === ''){
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

    }

    function registerLinkHandler(event){
        event.preventDefault();
        navigate('/registrar')
    }

    return <form className={`${styles['m-form']}`} onSubmit={onSubmitHandler}>
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
            <Button className={'m-ml-auto'} btnType={'btn-ch'}>Ingresar</Button>
        </div>

    </form>

}

export default LoginForm