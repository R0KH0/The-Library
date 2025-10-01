const books = require("./books.json");

function priceOfBook(bookName) {
  
  // write your code here
}

function affordableBooks(budget) {
  // write your code here
}
  // My New Line done By m_H
function findBookByGenre(genre) {
    return books.filter(({ genres }) => genres.some(g => g === genre));
}

function groupByGenre() {
  // write your code here
}

function sortBooksByPrice() {
  let booksLen = books.length;

  for (let i = 0; i < booksLen - 1; i++){
    for(let j = 0 ; j < booksLen - i - 1; j++){
      if(books[j].price > books[j +1].price){
        let swap = books[j];
        books[j] = books[j + 1];
        books[j + 1] = swap;
      }
    }
  }
  return books;
}
const sortedBooks = sortBooksByPrice();
for (let i = 0; i <sortedBooks.length; i++){
  console.log(sortedBooks[i].title + " " + sortedBooks[i].price + "$");
  
  // My New Line done By m_H
  for (let i = 0; i < sortedBooks.length; i++){
    console.log(
      sortedBooks[i].title + " " + sortedBooks[i].price + "$" + " | Genres: " + sortedBooks[i].genres.join(", ")
    );
  }
  
}


(function main() {
  try {
    if (priceOfBook("The Alchemist") !== 9.49) {
      throw new Error("priceOfBook is not working properly.");
    }
    if (affordableBooks(10).length !== 6) {
      throw new Error("affordableBooks is not working properly.");
    }
    if (findBookByGenre("Fiction").length !== 7) {
      throw new Error("findBookByGenre is not working properly.");
    }
    if (Object.keys(groupByGenre()).length !== 30) {
      throw new Error("groupByGenre is not working properly.");
    }
    if (sortBooksByPrice()[0].price !== 5.99) {
      throw new Error("sortBooksByPrice is not working properly.");
    }
    console.log("All tests passed successfully.");
  } catch (error) {
    console.log(error);
  }
})();



