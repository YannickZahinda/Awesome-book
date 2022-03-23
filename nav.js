const mainContainer = document.querySelector('.container');
const addBookForm = document.querySelector('#form');
const contactInfo = document.querySelector('.contact-info-container');

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
