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
    

}




//function that display each book in myLibrary in the body of the webpage
function displayBooks(){
    
    for(const book of myLibrary){        
        
        let existingCard = document.querySelector(`[data-id="${book['id']}"]`);
        
        if (existingCard){
            continue;
        }
        const libraryCard = createCard(); 

        let deleteButton = document.createElement('button');
        let deletePlaceholder = document.querySelector('.card-delete');
        deleteButton.className = 'deleteButton';
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () =>{
            let id = book['id'];
            myLibrary = myLibrary.filter(book => book['id'] !== id);
            libraryCard.remove();
            });
        deletePlaceholder.appendChild(deleteButton);

        for (const key in book){
            if (key === 'read'){
                let toggleButton = document.createElement('button');
                buttonPlaceHolder = libraryCard.querySelector('.card-read')
                toggleButton.setAttribute('id', 'toggleButton');
                toggleButtonReadStatus(book.read, toggleButton); 
                
                toggleButton.addEventListener('click', ()=>{
                    changeBookReadStatus(book.id, toggleButton);
                });
                buttonPlaceHolder.appendChild(toggleButton);               
                
            }


            switch(key){
                case 'title':
                    const titleDiv = libraryCard.querySelector('.card-title');
                    titleDiv.textContent = book[key];                   
                    break;

                case 'author':
                    const authorDiv = libraryCard.querySelector('.card-author')
                    authorDiv.textContent = `By: ${book[key]}`;                
                    break;

                case 'pages':
                    const pagesDiv = libraryCard.querySelector('.card-pages')
                    pagesDiv.textContent = `Number of pages ${book[key]}`;
                    break;

                case 'id':
                    libraryCard.setAttribute('data-id', book[key]);
                    break;
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
    cardRead.className = 'card-read';
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

//changes toggleButton status

function toggleButtonReadStatus(isRead, buttonElement){
    if (isRead === true){
        buttonElement.className = 'read';
        buttonElement.textContent = 'Read';
    }else {
        buttonElement.className = 'unread';
        buttonElement.textContent = 'Unread';
    }    

}


function changeBookReadStatus(bookId, buttonElement) {
    // 1. Find the book object in the library array using the ID
    const bookToUpdate = myLibrary.find(book => book.id === bookId);

    if (bookToUpdate) {
        // 2. Toggle the read status property on the object
        // Use the logical NOT operator (!) to flip the boolean value
        bookToUpdate.read = !bookToUpdate.read;

        // 3. Update the button's appearance immediately
        // Pass the updated status and the specific button element
        toggleButtonReadStatus(bookToUpdate.read, buttonElement);
    } else {
        console.error(`Book with ID ${bookId} not found.`);
    }
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




