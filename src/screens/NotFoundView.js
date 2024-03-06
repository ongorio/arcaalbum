import BaseView from "./BaseView";

import { useNavigate } from "react-router-dom";

function NotFoundView(){
    const navigate = useNavigate();
    return <BaseView>
        <h1 className={'text-center'}>La paginas que Buscas no se encontro!</h1>
        <h5 className={'text-center'}>Regresa al
            <a style={{color: 'black', cursor: 'pointer'}} onClick={()=>{navigate('/')}}>
                {'\u00a0'}Inicio
            </a></h5>
    </BaseView>
}

export default NotFoundView;