import React, {useState, useEffect} from 'react';

import {db, auth} from "../fbapp/fbapp";

import { getDocs, collection, query, where } from "firebase/firestore";

import loading from "../components/Loading/Loading";
import Loading from "../components/Loading/Loading";

export const CardOwnershipContext = React.createContext({
    playersOwned: {
        1: {
            owned: false
        }
    },
    cardsOwned: 0
})

export const CardOwnershipContextProvider = props=>{
    const [cardOwnershipLoaded, setCardOwnershipLoaded] = useState(false);
    const [playersOwnedState, setPlayersOwnedState] = useState({})

    async function getOwnership(){
        const ownershipCollection = collection(db, 'ownerships');
        const q = query(ownershipCollection, where('userId', '==', auth.currentUser.uid))
        const ownershipsSnaps = await getDocs(q);

        let playersWithOwnership = {};

        ownershipsSnaps.docs.forEach(ownershipDoc=>{
            const ownershipData = ownershipDoc.data();

            playersWithOwnership[ownershipData.player] = {owned: true}
        })

        setPlayersOwnedState(playersWithOwnership)

    }

    useEffect(()=>{
        if(auth.currentUser?.uid){
            getOwnership().then(()=>{
                console.log('Ownerships loaded!')
                setCardOwnershipLoaded(true)
            })
        }else{
            setCardOwnershipLoaded(true)
        }


    }, [])

    return <CardOwnershipContext.Provider value={{
        playersOwned: playersOwnedState
    }}>
        { !cardOwnershipLoaded ? <Loading/> :  props.children}
    </CardOwnershipContext.Provider>
}