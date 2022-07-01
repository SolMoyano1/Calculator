import React from 'react';
import '../stylesheets/CalculatorButtons.css'

function CalculatorButtons (props){
    const {children, addToScreen} = props;

    const isOperator = (value) =>{
        return isNaN(value) && (value !== '.') && (value !== '=');
    }

    return(
        <div className={`generalbtnsClass ${isOperator(children)? 'isOperatorClass' : ''}`}
             onClick={() => addToScreen(children)}>
            {children}
        </div>
    )
}
export default CalculatorButtons;