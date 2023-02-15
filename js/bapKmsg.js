document.getElementById('bap-btn').addEventListener('click',function(){
    const baperMsg = getStringFromInputById('baper-msg');
    if(baperMsg === 'I Love You Bap'){

        const totalBalance = getAmountFromElementById('total-amount');
        const updateTotalAmount = totalBalance + 500;
        insertTotalAmount('total-amount',updateTotalAmount);

        const prothom = document.getElementById('one');
        const ditio = document.getElementById('two');
        ditio.classList.remove('hidden');
        prothom.classList.add('hidden');
    }
    else{
        alert('Tera Bap Khush Nehi Hua.')
        
    }
    
})