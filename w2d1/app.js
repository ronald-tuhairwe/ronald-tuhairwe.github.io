"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = {findTitles, findAuthors, findIds, addBook }; //add all of your function names here that you need for the node mocha tests


let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 *@returns {string} the string of tittles;
 */
function showTitles() {


    const titles = findTitles();

    titles.sort();
    const titleString = titles.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = titleString;
}


/**
 * Event handler to display library authors sorted alphabetically
 * @returns {string} the string of authors;
 */
 function showAuthors() {


    const authors = findAuthors();

    authors.sort();
    const authorsString = authors.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = authorsString;

    
}

/**
 * Event handler to display library ids sorted alphabetically
 * @returns {string} the string of ids;
 */
 function showIds() {


    const ids = findIds();

    ids.sort();
    const idsString = ids.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = idsString;
}



/**
 * 
 * @return {object} array holding all titles as elements
 */
function findTitles() {
    let titles = [];
   
    for( let elem of library){
        titles.push(elem.title);
    }
    return titles;
}

/**
 * @returns {undefined} no return
 * Event handler for Add book button.  Creates and adds book to the library
 */
function addBook(){
    const title = document.getElementById("title").value; //retrieves the book title from the title textbox
    const author = document.getElementById("author").value;
    const libraryID = document.getElementById("libids").value;
    //finish the implementation -- get the author, create a book object, and add to the library array

    let book = {title, author, libraryID };
    library.push( book);
    
    return library;
}


/**
 * 
 * @return {object} array holding all authors as elements
 */
function findAuthors() {
    let authors = [];
   
    for( let elem of library){
        authors.push(elem.author);
    }
    
    return authors;
}

/**
 * 
 * @return {object} array holding all ids as elements
 */
function findIds() {
    let ids = [];
   
    for( let elem of library){
        ids.push(elem.libraryID);
    }
    
    return ids;
}


/**
 * Event handler to display library authors sorted alphabetically
 * @returns {string} the sorted words;
 */
 function scramble() {


    const titles = findTitles();

    const titleString = titles.join(" ").toString().split(" ").sort((aaa,bbb) => (aaa.length > bbb.length)? 1 : -1).join("\n");

    let textArea = document.getElementById("displayArea"); 
    textArea.innerHTML = titleString;
}