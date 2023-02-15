document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositAmount = getAmountFromInputById('inpt-deposit');
    const totalDeposit = getAmountFromElementById('total-deposit');
    const updateDeposit = depositAmount+totalDeposit;
    insertTotalAmount('total-deposit',updateDeposit);

    const totalAmount = getAmountFromElementById('total-amount');
    const updateAmount = totalAmount + depositAmount;
    
    insertTotalAmount('total-amount',updateAmount);
})

