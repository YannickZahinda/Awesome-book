/* eslint-disable no-unused-vars */
/* eslint-disable global-require */
const mainContainer = document.querySelector('.container');
const addBookForm = document.querySelector('#form');
const contactInfo = document.querySelector('.contact-info-container');
const time = document.querySelector('.time');

document.getElementById('add-book').addEventListener('click', () => {
  addBookForm.style.display = 'block';
  mainContainer.style.display = 'none';
  contactInfo.style.display = 'none';
});

document.getElementById('booklist').addEventListener('click', () => {
  addBookForm.style.display = 'none';
  mainContainer.style.display = 'block';
  contactInfo.style.display = 'none';
});

document.getElementById('contactlink').addEventListener('click', () => {
  addBookForm.style.display = 'none';
  mainContainer.style.display = 'none';
  contactInfo.style.display = 'block';
});

const dateTable = ['janvier', 'fevrier', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December'];

function getTime() {
  const globalDate = new Date();
  const year = globalDate.getFullYear();
  const hours = globalDate.getHours();
  const minutes = globalDate.getMinutes();
  const seconds = globalDate.getSeconds();
  const day = globalDate.getDate();
  let month = globalDate.getMonth();
  month = dateTable[month];

  time.innerHTML = `${month} ${day}th ${year}, ${hours}:${minutes}:${seconds}`;
}

window.addEventListener('load', () => {
  setInterval(getTime, 1000);
});