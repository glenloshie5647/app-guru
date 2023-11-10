/**
 * filename: sophisticatedCode.js
 * description: This code demonstrates a sophisticated, elaborate, and complex implementation of a library management system.
 */


// Class representing a library
class Library {
  constructor(name, location) {
    this.name = name; // Name of the library
    this.location = location; // Location of the library
    this.books = []; // Array of books in the library
    this.readers = {}; // Object containing readers' information
  }

  // Method to add a book to the library
  addBook(isbn, title, author, category) {
    const book = new Book(isbn, title, author, category);
    this.books.push(book);
  }

  // Method to remove a book from the library
  removeBook(isbn) {
    this.books = this.books.filter(book => book.isbn !== isbn);
  }

  // Method to add a reader to the library
  addReader(id, name) {
    this.readers[id] = new Reader(id, name);
  }

  // Method to remove a reader from the library
  removeReader(id) {
    delete this.readers[id];
  }

  // Method to lend a book to a reader
  lendBook(isbn, readerId) {
    const book = this.books.find(book => book.isbn === isbn);
    const reader = this.readers[readerId];
    
    if (book && reader) {
      if (reader.canBorrow()) {
        reader.borrowBook(book);
        book.markAsBorrowed();
        console.log(`Book with ISBN ${isbn} has been successfully borrowed by reader ${readerId}`);
      } else {
        console.log(`Reader ${readerId} has reached the maximum number of borrowed books`);
      }
    } else {
      console.log(`Book with ISBN ${isbn} or reader ${readerId} does not exist`);
    }
  }

  // Method to return a book to the library
  returnBook(isbn, readerId) {
    const book = this.books.find(book => book.isbn === isbn);
    const reader = this.readers[readerId];
    
    if (book && reader) {
      reader.returnBook(book);
      book.markAsReturned();
      console.log(`Book with ISBN ${isbn} has been successfully returned by reader ${readerId}`);
    } else {
      console.log(`Book with ISBN ${isbn} or reader ${readerId} does not exist`);
    }
  }
}

// Class representing a book
class Book {
  constructor(isbn, title, author, category) {
    this.isbn = isbn; // ISBN of the book
    this.title = title; // Title of the book
    this.author = author; // Author of the book
    this.category = category; // Category of the book
    this.borrowed = false; // Flag indicating if the book is borrowed or not
  }

  // Method to mark the book as borrowed
  markAsBorrowed() {
    this.borrowed = true;
  }

  // Method to mark the book as returned
  markAsReturned() {
    this.borrowed = false;
  }
}

// Class representing a reader
class Reader {
  constructor(id, name) {
    this.id = id; // ID of the reader
    this.name = name; // Name of the reader
    this.borrowedBooks = []; // Array of borrowed books by the reader
  }

  // Method to check if the reader can borrow more books
  canBorrow() {
    return this.borrowedBooks.length < 3; // Maximum number of borrowed books is 3
  }

  // Method to borrow a book
  borrowBook(book) {
    this.borrowedBooks.push(book);
  }

  // Method to return a book
  returnBook(book) {
    this.borrowedBooks = this.borrowedBooks.filter(b => b.isbn !== book.isbn);
  }
}

// Example usage

// Create a new library
const library = new Library("Central Library", "New York");

// Add books to the library
library.addBook("9783161484100", "JavaScript: The Good Parts", "Douglas Crockford", "Programming");
library.addBook("9781449331818", "Eloquent JavaScript", "Marijn Haverbeke", "Programming");
library.addBook("9781617290541", "Functional JavaScript", "Michael Fogus", "Programming");

// Add readers to the library
library.addReader(1, "John");
library.addReader(2, "Jane");

// Lend books to readers
library.lendBook("9783161484100", 1); // John borrows "JavaScript: The Good Parts"
library.lendBook("9781449331818", 2); // Jane borrows "Eloquent JavaScript"

// Try to lend more books to readers
library.lendBook("9781617290541", 1); // John has reached the maximum number of borrowed books
library.lendBook("9781617290541", 2); // Jane borrows "Functional JavaScript"

// Return books to the library
library.returnBook("9783161484100", 1); // John returns "JavaScript: The Good Parts"
library.returnBook("9781449331818", 2); // Jane returns "Eloquent JavaScript"

// Remove a book from the library
library.removeBook("9781617290541");

// Remove a reader from the library
library.removeReader(1);