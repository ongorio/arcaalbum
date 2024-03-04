import BaseView from "./BaseView";
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { addDoc, doc, writeBatch, collection } from "firebase/firestore";
import {db} from "../fbapp/fbapp";

import PlayerCard from "../components/Card/PlayerCard";
import Button from "../components/Button/Button";

import {PlayersContext} from "../context/PlayersContext";
import {AuthContext} from "../context/AuthContext";
import {CardOwnershipContext} from "../context/CardOwnershipContext";

function NewCardView(){

    const navigate = useNavigate();
    const playersCtx = useContext(PlayersContext)
    const authCtx = useContext(AuthContext)
    const ownershipCtx = useContext(CardOwnershipContext)

    const [players, setPlayers] = useState([]);


    const playersCard = players.map(player => {
        if (players.length > 1) {
            return <div className={'m-col-6'} key={player.id}>
                <div className={'m-flex justify-center'}>
                    <PlayerCard
                        playerName={player.name}
                        position={player.pos}
                        team={player.team}
                        birthdate={player.birthdate}
                        height={player.height}
                        playerPhoto={player.image}
                        countryClass={'france'}
                    />
                </div>
            </div>
        }

        return <div className={'m-col-12'} key={player.id}>
            <div className={'m-flex justify-center'}>
                <PlayerCard
                    playerName={player.name}
                    position={player.pos}
                    team={player.team}
                    birthdate={player.birthdate}
                    height={player.height}
                    playerPhoto={player.image}
                    countryClass={'france'}
                />
            </div>
        </div>
    })

    function goAlbumHandler() {
        ownershipCtx.setLoading()
        navigate('/album');
    }

    async function createOwnerships(playersToAdd){
        if (playersToAdd.length < 1) return;

        const batch = writeBatch(db);
        for (let p of playersToAdd){
            const docReference = doc(collection(db, 'ownerships'));
            batch.set(docReference, {
                player: p.id,
                userId: authCtx.userInfo.userUid
            })
        }

        try{
            await batch.commit();
            console.log('Batch Committed')
        }catch (error){
            console.log('Error: ', error.message)
            console.log('Batch Failed!')
        }

    }

    useEffect(() => {

        // TODO: limit operations if no cards left and review 2 card operations
        let playersNotOwnedSize = playersCtx.notOwnedPlayers.length;
        let number1 = Math.floor(Math.random() * playersNotOwnedSize);
        let number2;

        if (playersNotOwnedSize > 1) {
            do {
                number2 = Math.floor(Math.random() * playersNotOwnedSize);

            } while (number2 === number1)
        }

        let playersToAdd = [];

        const player1 = playersCtx.notOwnedPlayers[number1];
        const player2 = playersCtx.notOwnedPlayers[number2];

        playersToAdd.push(player1, player2);

        setPlayers(playersToAdd);
        createOwnerships(playersToAdd)
        .then(()=>{
            console.log('Batched Created')
            return ownershipCtx.getOwnerships()
        })
        .then(()=>{
            console.log('Ownerships reloaded!')
        })

    }, []);


    return <BaseView>
        <h1 className={'text-center'}>Cartas Obtenidos!</h1>
        <hr/>
        <div className={'m-row'}>
            {playersCard}
        </div>

        <div style={{display: 'flex', justifyContent:'center', marginBottom: '1rem', marginTop: '1rem'}}>
            <Button onClick={goAlbumHandler}>Ir a Album</Button>
        </div>

    </BaseView>
}

export default NewCardView;