document.getElementById('login-btn').addEventListener('click',function(){
    const inputEmail = getStringFromInputById('email');
    console.log(inputEmail);
    const inputPass = getStringFromInputById('pass');
    
    
    if(inputEmail ==='test@gmail.com' && inputPass ==='password'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Type correct Email and Password');
    }
})