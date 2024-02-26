import BaseView from "./BaseView";
import {useNavigate} from "react-router-dom";

import Button from "../components/Button/Button";

function FailView () {
    const navigate = useNavigate();

    return <BaseView>
        <h1 className={'text-center'}>No se Completo con Exito, <br/> ¡Sigue Participando!
        </h1>
        <hr/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button onClick={() => navigate('/')}>Regresar a Inicio</Button>
        </div>

    </BaseView>
}

export default FailView;