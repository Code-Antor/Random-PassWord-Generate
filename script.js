let input = document.querySelector('#text');
let btn = document.querySelector('.second');
let copy = document.querySelector('.copyBtn');
let eyeClose = document.querySelector('.eyeClose');
let sText = document.querySelector('.sstxt');

let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWZXYZ'
let lowerCase = 'abcdefghijklmnopqrstuvwxyz'
let numbers = '0123456789'
let symbol = '~!@#$%^&*()_+{}"|<>.,'

let allChar = upperCase + lowerCase + numbers + symbol;

function genratePass(length){
    let passWord = '';
    passWord += upperCase[Math.floor(Math.random() * upperCase.length)]
    passWord += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    passWord += numbers[Math.floor(Math.random() * numbers.length)]
    passWord += symbol[Math.floor(Math.random() * symbol.length)]

    while(length > passWord.length){
        passWord += allChar[Math.floor(Math.random() * allChar.length)]
    }

    input.value = passWord;
    
}

btn.addEventListener('click',function(){
    genratePass(12);
    if(input.value.length > 0){
        sText.style.display = 'block';
    }
})
copy.addEventListener('click',function(){
    input.select();
    document.execCommand('copy');
    alert(input.value + ' [COPIED]')
})
//included the password hide and show option here(later)
eyeClose.addEventListener('click',function(){
    if(input.type == 'text' ){
        input.type = 'password'
        eyeClose.src = 'images/eye-open.png'
    }
    else {
      input.type = 'text'
      eyeClose.src = 'images/eye-close.png'

    }
})
