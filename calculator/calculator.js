const areArgumentsValid = (num1, num2) => {
    if(typeof(num1) == 'number' && typeof(num2) == 'number'){
        return true;
    }
    return false;
} 

const add = (num1, num2) => {
    if(areArgumentsValid(num1,num2)){
        return num1 + num2;
    }

    throw new Error('One or more inputs are invalid');
}

const subtract = (num1, num2) => {
    if(areArgumentsValid(num1,num2)){
        return num1 - num2;
    }

    throw new Error('One or more inputs are invalid');
}

const multiply = (num1 ,num2) => {
    if(areArgumentsValid(num1,num2)){
        return num1 * num2;
    }

    throw new Error('One or more inputs are invalid');
}

const divide = (num1 ,num2) => {
    if(areArgumentsValid(num1,num2)){
        return num1 / num2;
    }

    throw new Error('One or more inputs are invalid');
}

const calculator = {
    add,
    subtract,
    multiply,
    divide, 
}

export default calculator;
