import { useState } from "react";


import QuestionOption from "../QuestionOption/QuestionOption";

function Question (props){
    const { questionText, options } = props;

    const optionComponent = options.map(object =>{
        return <QuestionOption isCorrect={object.isCorrect} successNavigation={'/success'} failNavigation={'/fail'} key={object.id} text={object.text} />
    })
    console.log(optionComponent)
    return <>
        <h1> {questionText} </h1>
        <hr/>
        <div>
            {optionComponent}
        </div>

    </>
}

export default Question;