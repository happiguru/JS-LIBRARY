// This is for JavaScript codes

let myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary() {
  const title = document.getElementById('booktitle').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const status = document.getElementById('status').value;

  let book = new Book(title, author, pages, readStatus);

  myLibrary.push(book);
}


const button = document.querySelector('btn');

button.addEventListener('click', addBookToLibrary);


