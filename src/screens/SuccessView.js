import BaseView from "./BaseView";

import Button from "../components/Button/Button";

function SuccessView () {
    return <BaseView>
        <h1 className={'text-center'}>¡Felicidades! <br/> Da Click para Obtener tu Recomensa </h1>
        <hr/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Button>Obtener Recompensa</Button>

        </div>
    </BaseView>
}

export default SuccessView;