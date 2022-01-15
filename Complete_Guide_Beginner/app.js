// let name = 'Max';
// if (name === 'Max') {
//     let hobbies = ['Sports', 'Cooking'];
//    console.log(hobbies);
// }
// function greet() {
//     var age = 30;
//     var name = 'Manuel';
//     console.log(name, age, hobbies);
// }
// console.log(name, hobbies);
// greet();



// 'use strict';

// const userName = 'Max';
// var undefined = 5;

// console.log(userName);







// function getName() {
//     return prompt('Your name: ', '');
// }

// function greet() {
//     const userName = getName();
//     console.log('Hello ' + userName);
// }

// greet();





const addListenerBtn = document.getElementById('add-listener-btn');
const clickableBtn = document.getElementById('clickable-btn');
const messageInput = document.getElementById('click-message-input');

let person = { name: 'Max' };

person = null;

function printMessage() {
    const value = messageInput.value;
    console.log(value || 'Clicked me!');
}

function addListener() {
    clickableBtn.addEventListener('click', function() {
        const value = messageInput.value;
        console.log(value || 'Clicked me!');
    });
}

addListenerBtn.addEventListener('click', addListener);