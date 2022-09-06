class Book {
    constructor(title, author, year, gender) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.gender = gender;
    }

    toString() {
        return `título: ${this.title}  Autor: ${this.author} Fecha de Publicación: ${this.year}  Genero: ${this.gender} \n`;
    }
}
const books = [];
let isInvalid;
for (let i = 0; i < 3; i++) {
    const title = prompt("Ingrese el nombre del libro " + (i + 1));
    const author = prompt('Ingrese el nombre del autor del libro ' + (i + 1));
    const year = Number(prompt("Ingrese el año en que fue escrito el libro " + (i + 1)));
    const gender = prompt("Ingrese el género en que se clasifica el libro " + (i + 1));

    if ((title.length != 0) && (author.length != 0) && !isNaN(year) && length == 4
        && (gender == 'aventuras' || gender == 'fantasia' || gender == 'terror')) {
        books.push(new Book(title, author, year, gender));
    }

}
showBooks(books);
console.log(showAuthors());

function showAuthors() {
    let authors = [];
    books.forEach(book => {
        authors.push(book.author);
    });
    authors.sort();
    return authors.toString();
}

function showBooks(books) {
    for (let i = 0; i < books.length; i++) {
        console.log(books[i].toString());
    }
}
