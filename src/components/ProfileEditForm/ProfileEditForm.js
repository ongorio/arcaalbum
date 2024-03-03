import { useState, useRef } from "react";


import Input from "../Input/Input";
import Button from "../Button/Button";

function ProfileEditForm (props) {
    const {cancelEditing} = props;

    const nombreInputRef = useRef(null);
    const apellidoInputRef = useRef(null);

    const [nombreInputState, setNombreInputState] = useState({errors: [], isValid: true})
    const [apellidoInputState, setApellidoInputState] = useState({errors: [], isValid: true})

    return <form>

        <label>Correo</label>
        <div style={{marginBottom: '1rem'}}>
            <Input type={'text'} disabled={true}/>
        </div>

        <label>Nombre</label>
        <div style={{marginBottom: '1rem'}}>
            <Input type={'text'} ref={nombreInputRef} />
        </div>

        <label>Apellido</label>
        <div style={{marginBottom: '1rem'}}>
            <Input type={'text'} ref={apellidoInputRef} />
        </div>

        <div className={'m-flex'}>
            <Button btnType={'btn-ch'} className={'m-ml-auto'} onClick={cancelEditing}>Cancel</Button>
        </div>

    </form>
}

export default ProfileEditForm;