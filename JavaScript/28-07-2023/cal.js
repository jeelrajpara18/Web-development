let inputBox = document.getElementById('input-box');
let buttons = document.querySelectorAll('.btn');

let str = '';
let arr = Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        if(e.target.innerHTML == '='){
            str = eval(str); 
            inputBox.value = str;
        }
        else if(e.target.innerHTML == 'AC'){
            str = '';
            inputBox.value = str;
        }
        else if(e.target.innerHTML == 'DE'){
            str = str.substring(0 , str.length -1);
            inputBox.value = str;
        }
        else{
            str += e.target.innerHTML;
            inputBox.value = str;
        }
        console.log(e.target);
    })
})

// let inputBox = document.getElementById('input-box');
// let buttons = document.querySelectorAll('.btn');