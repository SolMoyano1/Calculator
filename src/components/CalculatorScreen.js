import React from 'react';
import '../stylesheets/CalculatorScreen.css' 

function CalculatorScreen ({showScreen}){

    return(
        <div className='calculatorScreen'>
            {showScreen}
        </div>
    )
}
export default CalculatorScreen;