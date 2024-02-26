import {useState} from "react";

import PlayerCard from "../components/Card/PlayerCard";
import franceFlag from '../assets/franceflage.png';
import mexicoFlag from '../assets/mexicoflag.jpg'
import questionCard from '../assets/questionmark.jpg'

import PaginationBar from "../components/PaginationBar/PaginationBar";

import BaseView from "./BaseView";


import { countries, players } from '../data/playersData'


function Album(){

    const [currentPage, setCurrentPage] = useState(1);
    const [currentCountry, setCurrentCountry] = useState(countries[0]);

    const currentPlayers = players[currentCountry.id];
    const cards = currentPlayers.map(player => {
        return <div className={'m-col-2'}>
            <PlayerCard
                playerName={player.name}
                position={player.pos}
                team={player.team}
                birthdate={player.birthdate}
                height={player.height}
                key={player.id}
                playerPhoto={player.image}
                countryClass={currentCountry.countryClass}
            />
        </div>

    });

    const onNext = ()=>{
        setCurrentPage(prevState => {
            setCurrentCountry(countries[prevState])
            return prevState + 1
        })
        //setCurrentCountry(countries[currentPage])
    }

    const onPrev = () => {
        setCurrentPage(prevState => {
            setCurrentCountry(countries[prevState - 2])
            return prevState - 1
        });
        //setCurrentCountry(countries[currentPage])
    }

    return <BaseView>
        <PaginationBar data={countries} onnext={onNext} onprev={onPrev} currentPage={currentPage} />
        <hr/>
        <div className={'m-row'}>
            <div className={'m-col-2'}>
                <img src={currentCountry.flag} height={150} width={250} className={'m-image'} />
                <h2>{currentCountry.name}</h2>
            </div>
            <div className={'m-col-6'}>
                <div className={'m-row'}>
                    {cards}
                </div>
            </div>

        </div>
    </BaseView>
}

export default Album;