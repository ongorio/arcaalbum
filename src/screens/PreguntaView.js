
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

import Question from "../components/Question/Question";
import BaseView from "./BaseView";


const preguntas = [
    {id: 1, text:'¿Por que es importante promover estilos de vida sostenibles?'},
    {id: 2, text: '¿Qué importancia tiene la promoción de una cultura de paz y no violencia para el desarrollo sostenible?'}

]

const opciones = {
    1: [
        {id: 1, isCorrect: true, text: 'Para garantizar la preservacion natural'},
        {id: 2, isCorrect: false, text: 'para agotar los recursos naturales'},
        {id: 3, isCorrect: false, text: 'para aumentar el consumo excesivo'},
        {id: 4, isCorrect: false, text: 'para acelerar el cambio climatico'}
    ],
    2: [
        {id: 5, isCorrect: false, text: 'Incrementa Conflictos'},
        {id: 6, isCorrect: true, text: 'Favorece La cooperacion'},
        {id: 7, isCorrect: false, text: 'Aumenta la violencia'},
        {id: 8, isCorrect: false, text: 'fomenta la discriminaion'}
    ]
}

function PreguntaView () {

    const navigate = useNavigate();
    const [question, setQuestion ] = useState(preguntas[Math.floor(Math.random() * preguntas.length)]);

    return <BaseView>
        <Question questionText={question.text} options={opciones[question.id]} />
    </BaseView>
}

export default PreguntaView