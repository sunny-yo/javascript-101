'use struct';

const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');
const nextButton = document.querySelector('.next-button');

dropdownToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
})

dropdownToggle.addEventListener('blur', () => {
    dropdownMenu.classList.toggle('show');
})

dropdownMenu.addEventListener('click', (e) => {
    dropdownToggle.classList.add('selected');
    dropdownToggle.innerText = e.target.innerText;
    dropdownMenu.classList.remove('show');
    nextButton.removeAttribute('disabled');
})