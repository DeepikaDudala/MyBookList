//Book Class: Represents a Book
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
//UI class : Handles UI tasks
class UI {
  static displayBooks() {
    const StoredBooks = [
      {
        title: "Book One",
        author: "Sahithi",
        isbn: "3465768",
      },
      {
        title: "Bool Two",
        author: "Deepika",
        isbn: "0985234",
      },
    ];
    const books = StoredBooks;
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.getElementById("book-list");

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td ><button class="btn btn-outline-danger btn-sm py-0 px-1/">&times;</button></td>`;

    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains("btn")) {
      el.parentNode.parentNode.remove();
    }
  }

  static showAlert(message, className) {
    if (className == "danger") {
      let div = document.querySelector(".alert-danger");
      div.style.display = "block";
      div.innerHTML = `${message}`;
       setTimeout(() => {
         div.style.display = "none";
       }, 2000);
    } else {
      let div = document.querySelector(".alert-success");
      div.style.display = "block";
      div.innerHTML = `${message}`;
      setTimeout(() => {
        div.style.display = "none";
      }, 2000);
    }

   
  }

  static clearFields() {
    document.getElementById("bookName").value = "";
    document.getElementById("authorName").value = "";
    document.getElementById("isbn").value = "";
  }
}


//Event: Display Book
document.addEventListener("DOMContentLoaded", UI.displayBooks);

//Event : Add a Book
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  //Get form values
  const title = document.getElementById("bookName").value;
  const author = document.getElementById("authorName").value;
  const isbn = document.getElementById("isbn").value;

  //Validate book
  if (title == "" || author == "" || isbn == "") {
    UI.showAlert("Please fill in all fields", "danger");
  } else {
    //Instantiate book
    const book = new Book(title, author, isbn);

    //Add Book to UI
    UI.addBookToList(book);

    //Clear Fields
    UI.clearFields();

     UI.showAlert("Successfully added Book", "success");
  }
});
//Event: To Remove a Book
document.querySelector("#book-list").addEventListener("click", (e) => {
  console.log(e.target);
  UI.deleteBook(e.target);
});
