import { useNavigate } from "react-router-dom";

import BaseView from "./BaseView";

import Button from "../components/Button/Button";

function SuccessView () {

    const navigate = useNavigate();

    function getRewardHandler (){
        navigate('/newcards');
    }

    return <BaseView>
        <h1 className={'text-center'}>¡Felicidades! <br/> Da Click para Obtener tu Recomensa </h1>
        <hr/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button onClick={getRewardHandler}>Obtener Recompensa</Button>

        </div>
    </BaseView>
}

export default SuccessView;