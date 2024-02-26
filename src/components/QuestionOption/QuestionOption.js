import { useState } from 'react';
import {useNavigate} from "react-router-dom";

import styles from './QuestionOption.module.css'

import TrophyIcon from '../../assets/trophyicon.png'

function QuestionOption (props){
    const { isCorrect, successNavigation, failNavigation, text } = props;

    const [isRight, setIsRight] = useState(isCorrect);
    const navigate = useNavigate();

    function clickedHandler (event){
        if (isRight) navigate(successNavigation);
        else navigate(failNavigation);
    }


    return <div onClick={clickedHandler} className={styles['option']}>
        <div className={`${styles['question-icon']}`}>
            <img src={TrophyIcon} width={20} height={35}/>
        </div>
        <p>{text}</p>

    </div>

}

export default QuestionOption;