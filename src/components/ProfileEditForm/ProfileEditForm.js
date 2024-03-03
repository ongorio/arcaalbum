import { useState, useRef, useEffect, useContext } from "react";

import { doc, updateDoc } from 'firebase/firestore'

import {AuthContext} from "../../context/AuthContext";
import Input from "../Input/Input";
import Button from "../Button/Button";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {db} from "../../fbapp/fbapp";

function ProfileEditForm (props) {
    const {cancelEditing} = props;

    const ctx = useContext(AuthContext);

    const [updateError, setUpdateError] = useState(null)

    const correoInputRef = useRef(null);
    const nombreInputRef = useRef(null);
    const apellidoInputRef = useRef(null);

    const [nombreInputState, setNombreInputState] = useState({errors: [], isValid: true})
    const [apellidoInputState, setApellidoInputState] = useState({errors: [], isValid: true})

    useEffect(() => {
        correoInputRef.current.changeValue(ctx.userInfo.email)
        nombreInputRef.current.changeValue(ctx.userInfo.firstname);
        apellidoInputRef.current.changeValue(ctx.userInfo.lastname);
    }, []);


    async function submitHandler(event){
        event.preventDefault();

        const firstNameValue = nombreInputRef.current.getValue();
        const lastNameValue = apellidoInputRef.current.getValue();

        let isFirstnameValid = true;
        let isLastnameValid = true;

        if (firstNameValue === null || firstNameValue === undefined || firstNameValue.length < 2){
            isFirstnameValid = false;
        }

        if (lastNameValue === null || lastNameValue === undefined || lastNameValue.length < 2){
            isLastnameValid = false;
        }

        if(!isFirstnameValid){
            setNombreInputState(prevState => {
                return {...prevState, errors: ['El nombre debe contener al menos 2 caracters'], isValid: false}
            })
        }else{
            setNombreInputState(prevState => {
                return {...prevState, errors: null, isValid: true}
            })
        }

        if(!isLastnameValid){
            setApellidoInputState(prevState => {
                return {...prevState, errors: ['El apellido debe contener al menos 2 caracteres'], isValid: false}
            })
        }else{
            setApellidoInputState(prevState => {
                return {...prevState, errors: null, isValid: true}
            })
        }

        if(!isFirstnameValid) nombreInputRef.current.focus();
        else if(!isLastnameValid) apellidoInputRef.current.focus();

        if(isFirstnameValid && isLastnameValid){
            // TODO: add update code

            try{
                const docRef = doc(db, 'userExtensions', ctx.userInfo.userUid)
                await updateDoc(docRef, {
                    firstName: firstNameValue,
                    lastName: lastNameValue
                })
                await ctx.getUserData();
                setUpdateError(null);
                cancelEditing()
            }catch (error){
                console.log('Error: ', error.message);

                setUpdateError('Algo Salio mal, Intentalo mas Tarde');
            }
        }
    }


    return <form onSubmit={submitHandler}>
        <div style={{marginBottom: '1rem'}}>
            {
                updateError &&
                <ErrorMessage>{updateError}</ErrorMessage>
            }
        </div>


        <label>Correo</label>
        <div style={{marginBottom: '1rem'}}>
            <Input type={'text'} ref={correoInputRef} disabled={true}/>
        </div>

        <label>Nombre</label>
        <div style={{marginBottom: '1rem'}}>
            <Input type={'text'} ref={nombreInputRef} isValid={nombreInputState.isValid} />
            {!nombreInputState.isValid && <ErrorMessage>{nombreInputState.errors[0]}</ErrorMessage>}
        </div>

        <label>Apellido</label>
        <div style={{marginBottom: '1rem'}}>
            <Input type={'text'} ref={apellidoInputRef} isValid={apellidoInputState.isValid} />
            {!apellidoInputState.isValid && <ErrorMessage>{apellidoInputState.errors[0]}</ErrorMessage>}
        </div>

        <div className={'m-flex'}>
            <Button btnType={'btn-ch'} className={'m-ml-auto'} onClick={cancelEditing}>Cancel</Button>
            <Button btnType={'btn-ch'} type={'submit'}>Editar</Button>
        </div>

    </form>
}

export default ProfileEditForm;