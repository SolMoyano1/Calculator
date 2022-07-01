import React, { useState } from 'react';
import '../stylesheets/CalculatorStructure.css';
import {evaluate} from 'mathjs'
import CalculatorScreen from './CalculatorScreen';
import CalculatorButtons from './CalculatorButtons';

function CalculatorStructure (){

    const [screen, setScreen] = useState('');

    const watchInScreen =(value) =>{
        setScreen (screen + value);
    }
    const showResult = ()=>{
        setScreen (evaluate);
    }

    return(
        <div className='calculatorConteiner'>

            <CalculatorScreen showScreen={screen}/>

            <div className='calculatorRows'>
                <CalculatorButtons addToScreen={watchInScreen}>1</CalculatorButtons>
                <CalculatorButtons addToScreen={watchInScreen}>2</CalculatorButtons>
                <CalculatorButtons addToScreen={watchInScreen}>3</CalculatorButtons>
                <CalculatorButtons addToScreen={watchInScreen}>+</CalculatorButtons>
            </div>

            <div className='calculatorRows'>
                <CalculatorButtons addToScreen={watchInScreen}>4</CalculatorButtons>
                <CalculatorButtons addToScreen={watchInScreen}>5</CalculatorButtons>
                <CalculatorButtons addToScreen={watchInScreen}>6</CalculatorButtons>
                <CalculatorButtons addToScreen={watchInScreen}>-</CalculatorButtons>
            </div>

            <div className='calculatorRows'>
                <CalculatorButtons addToScreen={watchInScreen}>7</CalculatorButtons>
                <CalculatorButtons addToScreen={watchInScreen}>8</CalculatorButtons>
                <CalculatorButtons addToScreen={watchInScreen}>9</CalculatorButtons>
                <CalculatorButtons addToScreen={watchInScreen}>*</CalculatorButtons>
            </div>

            <div className='calculatorRows'>
                <CalculatorButtons addToScreen={watchInScreen}>.</CalculatorButtons>
                <CalculatorButtons addToScreen={watchInScreen}>0</CalculatorButtons>
                <CalculatorButtons addToScreen={showResult}>=</CalculatorButtons>
                <CalculatorButtons addToScreen={watchInScreen}>/</CalculatorButtons>
            </div>

            <div className='calculatorRows'>
                <CalculatorButtons addToScreen={() => setScreen('')}>Delete</CalculatorButtons>
            </div>

            





        </div>
    )
}
export default CalculatorStructure;