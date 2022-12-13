'use strict';

let modal = document.querySelector('.modal');
let overlay = document.querySelector('.overaly');
let btnCloseModal = document.querySelector('.close-modal');
let btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);


const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
