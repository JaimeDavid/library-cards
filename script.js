//empty libray
let myLibray = [];

//Constructor for books that will fill myLibrary array
function Book(title, author, pages, read){
    if (!new.target){
        throw Error("You must use the 'new' operator to call the constructor")
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}
//adds book to Library
function addBookToLibrary(title, author, pages, read){

    myLibray.push(new Book(title, author, pages, read));

}


//books for test

addBookToLibrary('My bioggraphy', 'Jaime David', 999999, false);
addBookToLibrary('Lord of the rings', 'JR Tolkien', 700, true);
addBookToLibrary('El poder de la mente subconsciente', 'Joseph Murphy', 274, true);
addBookToLibrary('La voragine', 'ni idea', 400, false);

//function that display each book in myLibrary in the body of the webpage
function displayBooks(){
    for(const book of myLibray){

    }

}
//creates the card that will go in the library with 
function createCard(){
    let body = document.querySelector('.body-library');
    let card = document.createElement('div');  
    card.className = 'library-card';
    body.appendChild(card);

}

//DOM manipulation
    //DOM variable
let addBookButton = document.querySelector('.add');
let closeButton = document.querySelector('.close');
let submitButton = document.querySelector('.submit');
let dialogBox = document.querySelector('dialog');
let dialogTitle = document.querySelector('.title');
let dialogAuthor = document.querySelector('.author');
let dialogPages = document.querySelector('.pages');
let dialogRead = document.querySelector('.read');



    //DOM eventlisteners
    //opens dialogbox
addBookButton.addEventListener('click', ()=>{
    dialogBox.showModal()
});

closeButton.addEventListener('click', ()=>{
    dialogBox.close();
})




