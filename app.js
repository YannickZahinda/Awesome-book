/* eslint-disable max-classes-per-file */

const titleEl = document.getElementById('title');
const authorEl = document.getElementById('author');
const cardContainer = document.getElementById('books');

class Book {constructor(title, author) { this.title = title; this.author = author; }}

// utility methods
class BooksStoreUtilities {
    static getBooks =() => JSON.parse(localStorage.getItem('books') || '[]')

    static removeByTitle =(title) => {
      const books = this.getBooks();
      const filteredBooks = books.filter((item) => item.title !== title);
      localStorage.setItem('books', JSON.stringify(filteredBooks));
    }

    static addBook = (books) => {
      books.push(new Book(titleEl.value, authorEl.value));
      localStorage.setItem('books', JSON.stringify(books));
    }
}

// main render methods
class MainUI {
    static displayBooks = () => {
      const storedBooks = BooksStoreUtilities.getBooks();
      cardContainer.innerHTML = '';
      let cardElement = '';

      for (let i = 0; i < storedBooks.length; i += 1) {
        cardElement += `<div class="card">
                  <h2 class="content">${storedBooks[i].title}, </h2>
                  <button class='remove' value="${storedBooks[i].title}" type="button"> Remove</button>
              </div> <hr>`;
      }
      cardContainer.innerHTML = cardElement;
    }
}

// add book
document.getElementById('addbtn').addEventListener('click', () => {
  const oldBooks = BooksStoreUtilities.getBooks();
  BooksStoreUtilities.addBook(oldBooks);
  MainUI.displayBooks();
});

// remove a book
document.getElementById('books').addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) return;
  BooksStoreUtilities.removeByTitle(event.target.value);
  MainUI.displayBooks();
});

//  get all books
window.addEventListener('load', () => {
  MainUI.displayBooks();
});
