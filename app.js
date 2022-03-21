
let books = []

class Book{
    constructor(title, author){
        this.title = title;
        this.author = author
    }
}

// helper function to get information
function getBooks(){
    const storedNames = JSON.parse(localStorage.getItem("books"));
    const cardContainer = document.getElementById('books');
    cardContainer.innerHTML = '';
    let cardElement = '';

    for(let i = 0; i < storedNames.length; i +=1 ) {
        console.log(storedNames[i])
        cardElement += `<div class="card">
            <h2 class="content">${storedNames[i].title}, </h2>
            <button class='remove' value="${i}" type="button"> Remove</button>
        </div> <hr>`;
    }
   cardContainer.innerHTML = cardElement;
}


document.getElementById('addbtn').addEventListener('click', () => {  
const titleEl = document.getElementById('title');
const authorEl = document.getElementById('author');
books.push(Book(titleEl,value, authorEl.value))
localStorage.setItem('books', JSON.stringify(books));
getBooks()

});

console.log(books)

window.addEventListener('load',  () => {

    getBooks()

})

document.getElementById('books').addEventListener('click', (event) => {

    const isButton = event.target.nodeName === 'BUTTON';
  
    if (!isButton) {
      return;
    }
    remove(event.target.value , event)
  });

  function remove(index , e){
     books.splice(index,1);
     console.log(books)
      localStorage.setItem('books', JSON.stringify(books));
      window.location.reload();
   }




