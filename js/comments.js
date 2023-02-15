document.getElementById('i-1').addEventListener('click',function(){
    const cmntText = getStringFromInputById('i-1');
    cmntText.classList.add('bold');
    
})
document.getElementById('i-2').addEventListener('click',function(){
    const cmntText = getStringFromInputById('i-2');
    cmntText.classList.add('italic');

})
document.getElementById('i-3').addEventListener('click',function(){
    const cmntText = getStringFromInputById('i-3');
    cmntText.classList.add('underline-offset-0');

})
// document.getElementById('i-4').addEventListener('click',function(){
//     const cmntText = getStringFromInputById('i-4');
//     cmntText.classList.add('underLine');

// })
// document.getElementById('i-5').addEventListener('click',function(){
//     const cmntText = getStringFromInputById('i-5');
//     cmntText.classList.add('bold');

// })
// document.getElementById('i-6').addEventListener('click',function(){
//     const cmntText = getStringFromInputById('i-6');
//     cmntText.classList.add('bold');

// })
// document.getElementById('i-7').addEventListener('click',function(){
//     const cmntText = getStringFromInputById('i-7');
//     cmntText.classList.add('bold');

// })
