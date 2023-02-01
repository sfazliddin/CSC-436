import { add, multiply } from "./math";
import { emptyInput } from "./error";

const eventHandler = () => {

    const addButton = document.getElementById('add');
    const multiplyButton = document.getElementById('multiply');
    const number1 = document.getElementById('number-1');
    const number2 = document.getElementById('number-2');
    const addResult = document.getElementById('result');
    const multiplyResult = document.getElementById('multiplyResult');
    const updateDomWithAddedNumbers = () => {
        addResult.innerHTML =
            // parseInt(number1.value, 10)+parseInt(number2.value,10);
            add(number1.value, number2.value);
            if(Number.isNaN(add(number1.value, number2.value)))
            emptyInput();
    }
    const updateDomWithMultipliedNumbers = () => {
        multiplyResult.innerHTML =
            // parseInt(number1.value, 10)*parseInt(number2.value,10);
            multiply(number1.value, number2.value);
            if(Number.isNaN(multiply(number1.value, number2.value)))
            emptyInput();

    }

    addButton.addEventListener('click', updateDomWithAddedNumbers);
    multiplyButton.addEventListener('click', updateDomWithMultipliedNumbers);
   
    
}

export { eventHandler };