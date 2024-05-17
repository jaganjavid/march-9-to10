

// Book Construtor

function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() {
    UI.prototype.addBookToList = function (book) {

        const list = document.querySelector("#book-list");

        // Create a tr element

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td class="delete">
            <a href="#" class="btn btn-danger">X</a>
            </td>
        `;

        list.appendChild(row);

    }
}


// Event Listen for submit

document.querySelector("#book-form").addEventListener("submit", function (e) {

    e.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;


    // All Instance

    const book = new Book(title, author, isbn);
    const ui = new UI();



    // Validate

    if (title === "" || author === "" || isbn === "") {
        alert("Please fill all the field");
    } else {

        ui.addBookToList(book);

    }

})

