function getStringFromInputById (inputId){
    const inputvalue = document.getElementById(inputId);
    const inputvalueSting = inputvalue.value;
    inputvalue.value = '';
    return inputvalueSting;
}

function getAmountFromInputById(inputId){
    const inputvalue = document.getElementById(inputId);
    const inputvalueSting = inputvalue.value;
    const inputAmount = parseFloat(inputvalueSting);
    inputvalue.value = '';
    // if(inputAmount< 0){
    //     return alert('Fokir, Minus value deposit hoi naaa..')
    // }
    // else if(inputAmount === 0){
    //     return alert('Fokinni...');
    // }
    // else{       
       
    // }
    return inputAmount;
    
    
}

function getAmountFromElementById(elementId){
    const elementValue = document.getElementById(elementId);
    const elementSting = elementValue.innerText;
    const elementAmount = parseFloat(elementSting);
    
    return elementAmount;
}

function insertTotalAmount(elementId, amount){
    const x = document.getElementById(elementId);
    x.innerText = amount;
}

