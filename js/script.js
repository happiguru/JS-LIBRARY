// This is for JavaScript codes

const bookList = document.getElementById('book-display');
const form = document.getElementById('book-form');
const showFormBtn = document.querySelector('.show-form')
const button = document.querySelector('#submit');
const myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

const saveLocalStorage = () => {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

function addBookToLibrary() {
  const title = document.getElementById('booktitle').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const status = document.getElementById('status').value;

  const book = new Book(title, author, pages, readStatus);

  myLibrary.push(book);
  displayLibrary(myLibrary);
  saveLocalStorage();
  formData.reset();
};


button.addEventListener('click', (e) => {
    e.preventDefault();
    addBookToLibrary();
    form.style.display = 'none';
});


const displayLibrary = (array) => {
    while(bookList.firstChild) {
        bookList.removeChild(bookList.firstChild);
    }

    const createReadBtn = (book) => {
        const readBtn = document.createElement('button');
        readBtn.textContent = (book.read ? 'Unread' : 'Read');

        readBtn.addEventListener('click', () => {
            book.read = !book.read;
            readBtn.textContent = (book.read ? 'Unread' : 'Read');
            displayLibrary(myLibrary);
            saveLocalStorage();
        });
        return readBtn;
    }
}

for(let i=0; i<Array.length; i++){
    const bookSection = document.createElement('li');
    const title = document.createElement('h1');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('p');
    read.createList.add('status');

    title.textContent = array[i].title;
    author.textContent = array[i].author;
    pages.textContent = `${array[i].pages} pages`;
    read.textContent = changeReadStatus(array[i].read);

    bookSection.appendChild(title);
    bookSection.appendChild(author);
    bookSection.appendChild(pages);
    bookSection.appendChild(read);
    bookList.appendChild(bookSection);
}

displayLibrary(myLibrary);