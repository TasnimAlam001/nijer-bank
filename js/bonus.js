document.getElementById('bonus-btn').addEventListener('click',function(){
    const bonusAmount = getAmountFromInputById('bonus-input');
    const totalBalance = getAmountFromElementById('total-amount');
    const updateAmount = (totalBalance/100)*bonusAmount;
    const updateTotalAmount = totalBalance +updateAmount;
    insertTotalAmount('total-amount',updateTotalAmount);
    insertTotalAmount('incresed-p',bonusAmount);
    const prothom = document.getElementById('first');
    const ditio = document.getElementById('second');
    ditio.classList.remove('hidden');
    prothom.classList.add('hidden');
})