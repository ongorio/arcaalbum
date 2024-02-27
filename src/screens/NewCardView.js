import BaseView from "./BaseView";
import { useNavigate } from "react-router-dom";

import PlayerCard from "../components/Card/PlayerCard";
import Button from "../components/Button/Button";

import {players} from "../data/playersData";

const player = players[1][0];
const player2 = players[2][0];
function NewCardView(){

    const navigate = useNavigate();

    function goAlbumHandler (){
        navigate('/album');
    }

    return <BaseView>
        <h1 className={'text-center'}>Cartas Obtenidos!</h1>
        <hr/>
        <div className={'m-row'}>
            <div className={'m-col-6'}>
                <div className={'m-flex justify-center'}>
                    <PlayerCard
                        playerName={player.name}
                        position={player.position}
                        team={player.team}
                        birthdate={player.birthdate}
                        height={player.height}
                        playerPhoto={player.image}
                        countryClass={'france'}
                    />
                </div>
            </div>

            <div className={'m-col-6'}>
                <div className={'m-flex justify-center'}>
                    <PlayerCard
                        playerName={player2.name}
                        position={player2.position}
                        team={player2.team}
                        birthdate={player2.birthdate}
                        height={player2.height}
                        playerPhoto={player2.image}
                        countryClass={'mexico'}
                    />
                </div>
            </div>
        </div>

        <div style={{display: 'flex', justifyContent:'center', marginBottom: '1rem', marginTop: '1rem'}}>
            <Button onClick={goAlbumHandler}>Ir a Album</Button>
        </div>

    </BaseView>
}

export default NewCardView;