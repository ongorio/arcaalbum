import BaseView from "./BaseView";

import WorldCupLogo from '../assets/2026worldcuplogo.png'

function HomeView () {
    return <BaseView>

            <div className={'m-row'}>

                <div className={'m-col-8'}>
                    <h1>Participa para Salvar el Mundo</h1>
                    <hr/>
                    <h4>Pasos para Ganar</h4>
                    <p>
                        1 - Compra cualquier producto participante <br/>
                        2 - Escanea el codigo QR <br/>
                        3 - Contesta la pregunta <br/>
                        4 - Obten tus cartas
                    </p>

                </div>

                <div className={'m-col-4'}>
                    <div className={'m-flex'}>
                        <img src={WorldCupLogo} width='100%'/>
                    </div>
                </div>

            </div>

    </BaseView>



}

export default HomeView;