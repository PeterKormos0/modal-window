'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overaly');
let btnCloseModal = document.querySelector('.close-modal');
let btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++) {
    (btnsOpenModal[i].addEventListener('click', function () {
        console.log("BUTTON CLICKED");
    }));
}
