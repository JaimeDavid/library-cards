//empty libray
let myLibrary = [];

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

    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    //myLibrary.push(new Book(title, author, pages, read));

}


//books for test

//addBookToLibrary('My bioggraphy', 'Jaime David', 999999, false);
//addBookToLibrary('Lord of the rings', 'JR Tolkien', 700, true);
//addBookToLibrary('El poder de la mente subconsciente', 'Joseph Murphy', 274, true);
//addBookToLibrary('La voragine', 'ni idea', 400, false);

//function that display each book in myLibrary in the body of the webpage
function displayBooks(){
    
    for(const book of myLibrary){        
        
        let existingCard = document.querySelector(`[data-id="${book['id']}"]`);
        
        if (existingCard){
            continue;
        }
        const libraryCard = createCard(); 
        for (const key in book){

            switch(key){
                case 'title':
                    const titleDiv = libraryCard.querySelector('.card-title');
                    titleDiv.textContent = book[key];                   
                    continue;

                case 'author':
                    const authorDiv = libraryCard.querySelector('.card-author')
                    authorDiv.textContent = `By: ${book[key]}`;                
                    continue;

                case 'pages':
                    const pagesDiv = libraryCard.querySelector('.card-pages')
                    pagesDiv.textContent = `Number of pages ${book[key]}`;
                    continue;

                case 'id':
                    libraryCard.setAttribute('data-id', book[key]);
            }
            
        }


    }

}


//creates the card that will go in the library with  each required field.
function createCard(){
    let body = document.querySelector('.body-library');
    let card = document.createElement('div');
    card.className = 'library-card';    
    let cardTitle = document.createElement('div');    
    cardTitle.className ='card-title';
    let cardAuthor = document.createElement('div');  
    cardAuthor.className = 'card-author';
    let cardPages = document.createElement('div');
    cardPages.className = 'card-pages'; 
    let cardButtons = document.createElement('div');
    cardButtons.className = 'card-buttons'; 
    let cardRead = document.createElement('div');
    let cardDelete =  document.createElement('div');
    cardRead.clasName = 'card-read';
    cardDelete.className = 'card-delete';


    
    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(cardButtons);
    cardButtons.appendChild(cardRead);
    cardButtons.appendChild(cardDelete);
    body.appendChild(card);
    return card;

}
//resets dialog box inputs data
function resetDialogBoxData(){
    dialogTitle.value = '';
    dialogAuthor.value = '';
    dialogPages.value = '';
    dialogRead.checked = false;
    
}

//DOM manipulation
    //DOM variables
const addBookButton = document.querySelector('.add');
const closeButton = document.querySelector('.close');
const submitButton = document.querySelector('.submit');
const dialogBox = document.querySelector('dialog');
const dialogTitle = document.querySelector('#title');
const dialogAuthor = document.querySelector('#author');
const dialogPages = document.querySelector('#pages');
const dialogRead = document.querySelector('#read');



    //DOM eventlisteners

addBookButton.addEventListener('click', ()=>{
    dialogBox.showModal()
});

closeButton.addEventListener('click', ()=>{
    dialogBox.close();
});

submitButton.addEventListener('click', (event)=>{
    event.preventDefault();
    addBookToLibrary(dialogTitle.value, dialogAuthor.value, dialogPages.value, dialogRead.checked);
    displayBooks();
    resetDialogBoxData();
    dialogBox.close();
});




