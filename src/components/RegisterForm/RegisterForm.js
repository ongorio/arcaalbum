import { useNavigate } from "react-router-dom";

import styles from './RegisterForm.module.css'

import Button from "../Button/Button";

import Input from "../Input/Input";

function RegisterForm () {

    const navigate = useNavigate();

    function loginLinkHandler(event){
        event.preventDefault();
        navigate('/')
    }

    function onSubmitHandler (event){
        event.preventDefault();
    }

    return <form className={`${styles['m-form']}`} onSubmit={onSubmitHandler}>
        <label>Correo</label>
        <div>
            <Input type={"email"}/>
        </div>

        <label>Nombre</label>
        <div>
            <Input type={'text'}/>
        </div>

        <label>Apellido</label>
        <div>
            <Input type={'text'}/>
        </div>
        <label>Contrasena</label>
        <div>
            <Input type={'password'}/>
        </div>


        <small>
            <p className={'text-center'}>
                Ya tienes cuenta, Ingresa
                <a onClick={loginLinkHandler} style={{color:'black', cursor: 'pointer'}}>
                    Aqui
                </a>
            </p>
        </small>
        <div className={'m-flex'} style={{marginTop: '1rem'}}>
            <Button className={'m-ml-auto'} btnType={'btn-ch'} >Registrarse</Button>
        </div>
    </form>
}

export default RegisterForm