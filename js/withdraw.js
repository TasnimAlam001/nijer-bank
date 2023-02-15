document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawAmount = getAmountFromInputById('withdraw-input');
    const totalWithdraw = getAmountFromElementById('total-withdraw');
    const totalAmount = getAmountFromElementById('total-amount');
    if(withdrawAmount> totalAmount){
        alert('Not enough Balance');
        return;
    }
    const updateWithdaw = withdrawAmount+totalWithdraw;
    insertTotalAmount('total-withdraw',updateWithdaw);

    
    const updateAmount = totalAmount - withdrawAmount;
    
    insertTotalAmount('total-amount',updateAmount);
})

