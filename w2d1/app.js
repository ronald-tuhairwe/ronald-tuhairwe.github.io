"use strict";
/* eslint-disable*/
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = {findTitles }; //add all of your function names here that you need for the node mocha tests


let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];

/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
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
 * @returns {undefined}
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
 * @returns {undefined}
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
    const id = document.getElementById("libids").value;
    //finish the implementation -- get the author, create a book object, and add to the library array

    let book = {title, author, id };
    library.push( book);
    
    return library;
}



function findAuthors() {
    let authors = [];
   
    for( let elem of library){
        authors.push(elem.author);
    }
    
    return authors;
}


function findIds() {
    let ids = [];
   
    for( let elem of library){
        ids.push(elem.libraryID);
    }
    
    return ids;
}


/**
 * Event handler to display library authors sorted alphabetically
 * @returns {undefined}
 */
 function scramble() {


    const titles = findTitles();

    titles.join(",").split(" ").sort();
    const authorsString = authors.join("\n");

    let textArea = document.getElementById("displayArea");
    textArea.innerHTML = authorsString;
}