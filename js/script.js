// This is for JavaScript codes

const bookList = document.getElementById('book-display');
const form = document.getElementById('book-form');
const showFormBtn = document.querySelector('.show-form')
const submit = document.querySelector('#submit');
const myLibrary = JSON.parse(localStorage.getItem('myLibrary')) || [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const saveLocalStorage = () => {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
};

const changeReadStatus = (status) => {
    const result = status ? 'You have already read this book!' : "You haven't read this book yet!";
    return result;
};

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
    };

    const createDeleteBtn = (book) => {
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';

        deleteBtn.addEventListener('click', () => {
            const index = myLibrary.findIndex(item.title === book.title);
            myLibrary.splice(index, 1);
            displayLibrary(myLibrary);
            saveLocalStorage();
        });
        return deleteBtn;
    };

    for(let i =0; i< array.length; i++){
        const bookSection = document.createElement('li');
        const title = document.createElement('h3');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const read = document.createElement('p');
        read.classList.add('read-status');

        title.textContent = array[i].title;
        author.textContent = array[i].author;
        pages.textContent = `${array[i].pages} pages`;
        read.textContent = changeReadStatus(array[i].read);
        bookSection.appendChild(title);
        bookSection.appendChild(author);
        bookSection.appendChild(pages);
        bookSection.appendChild(read);
        bookList.appendChild(bookSection);

        const readBtn = createReadBtn(array[i]);
        const deleteBtn = createDeleteBtn(array[i]);

        readBtn.classList.add('btn', 'btn-primary', 'btn-style');
        deleteBtn.classList.add('btn', 'btn-primary', 'btn-style');

        bookSection.appendChild(readBtn);
        bookSection.appendChild(deleteBtn);
    }
};

const addBookToLibrary = () =>  {
    const title = document.getElementById('booktitle').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('status').checked;
  
    const book = new Book(title, author, pages, read);
  
    myLibrary.push(book);
    displayLibrary(myLibrary);
    saveLocalStorage();
    form.reset();
  };
  
  
  submit.addEventListener('click', (e) => {
      e.preventDefault();
      addBookToLibrary();
      form.style.display = 'none';
  });

const defaultBooks = () => {
    const book1 = new Book('When Rain Cloud Gathers', 'Charles Dickens', 129, true);
};

  const showForm = () => {
      if(form.style.display === 'block') form.style.display = 'none';
      else form.style.display = 'block';
  };

  if(localStorage.getItem('myLibrary') === null){
      defaultBooks();
  }

  displayLibrary(myLibrary);

  showFormBtn.onclick = () => showForm();
  