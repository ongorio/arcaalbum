import { useState } from 'react';
import {useNavigate} from "react-router-dom";

function QuestionOption (props){
    const { isCorrect, successNavigation, failNavigation, text } = props;

    const [isRight, setIsRight] = useState(isCorrect);
    const navigate = useNavigate();

    function clickedHandler (event){
        if (isRight) navigate(successNavigation);
        else navigate(failNavigation);
    }


    return <div onClick={clickedHandler}>
        <h5>{text}</h5>

    </div>

}

export default QuestionOption;