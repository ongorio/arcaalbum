import {useState, useContext, useEffect} from "react";

import {PlayersContext} from "../context/PlayersContext";
import {CardOwnershipContext} from "../context/CardOwnershipContext";

import questionPhoto from '../assets/questionmark.jpg'

import PlayerCard from "../components/Card/PlayerCard";

import PaginationBar from "../components/PaginationBar/PaginationBar";

import BaseView from "./BaseView";

function Album(){

    const ctx = useContext(PlayersContext);
    const ownershipCtx = useContext(CardOwnershipContext)

    const [currentPage, setCurrentPage] = useState(1);
    const [currentCountry, setCurrentCountry] = useState(ctx.countries[0]);

    const currentPlayers = ctx.players[currentCountry.id];

    const cards = currentPlayers.map(player=>{
        return <div className={'m-col-4'} key={player.id}>
            <div className={'m-flex justify-center'}>
                <PlayerCard
                    playerName={player.name}
                    position={player.pos}
                    team={player.team}
                    birthdate={player.birthdate}
                    height={player.height}
                    playerPhoto={(player.owned ? player.image : questionPhoto)}
                    countryClass={currentCountry.countryClass}
                />
            </div>
        </div>
    })


    const onNext = ()=>{
        setCurrentPage(prevState => {
            setCurrentCountry(ctx.countries[prevState])
            return prevState + 1
        })
    }

    const onPrev = () => {
        setCurrentPage(prevState => {
            setCurrentCountry(ctx.countries[prevState - 2])
            return prevState - 1
        });
    }

    return <BaseView>
        <PaginationBar data={ctx.countries} onnext={onNext} onprev={onPrev} currentPage={currentPage} />
        <hr/>
        <div className={'m-row'}>
            <div className={'m-col-4'}>
                <img src={currentCountry.flag} height={150} width={250} className={'m-image'} />
                <h2 className={'text-center'}>{currentCountry.name}</h2>
            </div>
            <div className={'m-col-8'}>
                <div className={'m-row'}>
                    {cards}
                </div>
            </div>

        </div>
    </BaseView>
}

export default Album;