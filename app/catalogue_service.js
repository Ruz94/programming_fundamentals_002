// eslint-disable-next-line no-unused-vars
const catalogue = [
  "The Catcher in the Rye by J.D. Salinger",
  "Dracula by Bram Stoker",
  "Between the Assassinations by Aravind Adiga",
  "Wolf Hall by Hilary Mantel",
  "Bring Up The Bodies by Hilary Mantel",
  "A Place of Greater Safety by Hilary Mantel",
  "Giving Up the Ghost by Hilary Mantel",
  "The Assassination of Margaret Thatcher by Hilary Mantel",
  "The Yellow Wallpaper by Charlotte Perkins Gilman",
  "Conversations With Friends by Sally Rooney",
  "Normal People by Sally Rooney",
  "Everything I Never Told You by Celeste Ng",
  "2666 by Robert Bolaño",
  "By Night In Chile by Robert Bolaño",
  "A Tale of Two Cities by Charles Dickens",
  "Oliver Twist by Charles Dickens",
  "Great Expectations by Charles Dickens",
  "The Blind Assassin by Margaret Atwood",
  "Why Be Happy When You Could Be Normal? by Jeanette Winterson",
  "The Origin of Species by Charles Darwin"
];

function countBooks() {
    return catalogue.length;
}

function checkBook(book) {
    return catalogue.includes(book);
}

function countBooksByFirstLetter(letter) {
  let total = 0;
  catalogue.forEach(book => {
    const firstChar = book.charAt(0).toUpperCase();
    if (firstChar === letter.toUpperCase()) {
      total++;
    }
  });
  return total;
}

function countBooksByKeyword(keyword) {
  if (typeof keyword !== "string") {
    return 0;
  }
  let total = 0;
  catalogue.forEach(book => {
    if (book.toUpperCase().search(keyword.toUpperCase()) >= 0) {
      total++;
    }
  });
  return total;
}

function getBooksByAuthor(author) {
  if (typeof author !== "string") {
    return [];
  }
  let total = [];
  catalogue.forEach(book => {
    if (book.toUpperCase().search(author.toUpperCase()) >= 0) {
      total = [...total, book];
    }
  });
  return total;
}

module.exports = {
  countBooks,
  checkBook,
  countBooksByFirstLetter,
  countBooksByKeyword,
  getBooksByAuthor
};
