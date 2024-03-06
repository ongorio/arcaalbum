import React from 'react';
import { useState, useEffect, useContext } from "react";
import {db} from "../fbapp/fbapp";

import {collection, doc, getDocs, query} from "firebase/firestore";

import Loading from "../components/Loading/Loading";

import {CardOwnershipContext} from "./CardOwnershipContext";


export const PlayersContext = React.createContext({
    countriesLoaded: false,
    countries: [{name: '', flag: '', countryClass: '', id: ''},],
    playersLoaded: false,
    players: {
        1: [{
            id: 1, name: '', team: '', birthdate: '', height: '', pos: '', image: ''
        },]
    },
    notOwnedPlayers: []
})

export const PlayersContextProvider = (props) =>{
    const ownershipCtx = useContext(CardOwnershipContext);

    const [countriesState, setCountriesState] = useState([])
    const [countriesLoaded, setCountriesLoaded] = useState(false);

    const [playersState, setPlayersState] = useState({})
    const [playersLoaded, setPlayersLoaded] = useState(false)
    const [notOwnedPlayers, setNotOwnedPlayers] = useState([])

    async function getCountries(){
        const countriesCollection = collection(db, 'countries');
        const countriesSnap = await getDocs(countriesCollection)

        const countriesList = countriesSnap.docs.map(countryDoc =>{
            const docData = countryDoc.data();
            return {id: countryDoc.id, name: docData.name, flag: docData.flag, countryClass: docData.countryClass}
        })
        setCountriesState(countriesList);
    }

    async function getPlayers(){
        const playersCollection = collection(db, 'players');
        const playersSnap = await getDocs(playersCollection);

        const countriesMap = {};
        const notOwnedPlayersList = [];

        playersSnap.docs.forEach(playerDoc=>{
            const docData = playerDoc.data();
            let playerObj = {id: playerDoc.id, name: docData.name, image:docData.image, team: docData.team, birthdate: docData.birthdate, height: docData.height, pos: docData.pos, country: docData.country, owned: false};

            if (ownershipCtx.playersOwned.hasOwnProperty(playerObj.id)) {
                playerObj = {...playerObj, owned:true};
            }

            if (!playerObj.owned) notOwnedPlayersList.push(playerObj);

            if(countriesMap.hasOwnProperty(docData.country)){
                countriesMap[docData.country].push(playerObj);
            }else {
                countriesMap[docData.country] = [playerObj,]
            }
        })
        setPlayersState(countriesMap)
        setNotOwnedPlayers(notOwnedPlayersList)
    }

    useEffect(()=>{
        getCountries().then(()=>{
            console.log('Countries Loaded!')
            setCountriesLoaded(true);
        })

        getPlayers().then(()=>{
            console.log('Players Loaded!')
            setPlayersLoaded(true)
        })
    }, [])


    return <PlayersContext.Provider value={{
        countries: countriesState,
        countriesLoaded: countriesLoaded,
        players: playersState,
        playersLoaded: playersLoaded,
        notOwnedPlayers: notOwnedPlayers
    }}>
        { (!countriesLoaded || !playersLoaded) ? <Loading /> : props.children}
    </PlayersContext.Provider>
}
