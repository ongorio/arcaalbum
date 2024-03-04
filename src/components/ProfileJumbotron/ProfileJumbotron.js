import { useState, useContext } from "react";

import styles from './ProfileJumbotron.module.css'

import Button from "../Button/Button";

import ProfileEditForm from "../ProfileEditForm/ProfileEditForm";

import {AuthContext} from "../../context/AuthContext";
import {CardOwnershipContext} from "../../context/CardOwnershipContext";

function ProfileJumbotron() {
    const [editing, setEditing] = useState(false);
    const ctx = useContext(AuthContext);
    const ownershipCtx = useContext(CardOwnershipContext)

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
                <h2>{ctx.userInfo.firstname}</h2>
                <p>
                    <strong>Correo </strong> <br/>
                    {ctx.userInfo.email} <br/>
                    <strong>Cartas Coleccionadas </strong> <br/>
                    {ownershipCtx.cardsOwned} <br/>
                </p>
                <Button btnType={'btn-ch'} onClick={editBtnHandler}>Editar</Button>
            </div>
        }

    </div>
}

export default ProfileJumbotron