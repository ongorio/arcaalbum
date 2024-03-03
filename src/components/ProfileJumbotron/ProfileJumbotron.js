import { useState } from "react";

import styles from './ProfileJumbotron.module.css'

import Button from "../Button/Button";

import ProfileEditForm from "../ProfileEditForm/ProfileEditForm";

function ProfileJumbotron() {
    const [editing, setEditing] = useState(false);

    function editBtnHandler(){
        setEditing(true)
    }
    function cancelEditBtn(){
        setEditing(false);
    }

    return <div className={`${styles['jumbotron']}`}>
        {
            editing &&
            <ProfileEditForm cancelEditing={cancelEditBtn}/>
        }
        {
            !editing &&
            <div className={'text-center'}>
                <h2>Juan Hernandez</h2>
                <p>
                    <strong>Correo </strong> <br/>
                    juan.hernandez@example.com <br/>
                    <strong>Cartas Coleccionadas </strong> <br/>
                    55 <br/>
                </p>
                <Button btnType={'btn-ch'} onClick={editBtnHandler}>Editar</Button>
            </div>
        }

    </div>
}

export default ProfileJumbotron