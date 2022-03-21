// books = [

// ]

// const add = () => {
//     ob = {
//         a: 'jena',
//         b: 'jeb',
//     }

//    books.push(ob);

//    od = {
//     a: 'jena',
//     b: 'jeb',
//    }
//    books.push( od);
//    oc = {
//     a: 'jena',
//     b: 'jeb',
//    }
//     books.push( oc);
// }
   
    

// // on button click event
// add();

// localStorage.setItem("books", JSON.stringify(books));

// // on window load clist all bools created


// var storedNames = JSON.parse(localStorage.getItem("books"));


// // console. log(books)

// window.addEventListener('load', () => {
 
//     storedNames.map(obj => {
//         console.log(obj)
//     })
// })

const titleEl = document.getElementById('title');
const authorEl = document.getElementById('author');
let books = []

document.getElementById('addbtn').addEventListener('click', () => {

     class bookList {
        constructor(title, author) {
            this.title = title;
            this.author = author;
        }
    }

    let book = new bookList(titleEl.value, authorEl.value);

    books.push(book);

})





