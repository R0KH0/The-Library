const books = require("./books.json");
const readline = require("readline");

function priceOfBook(bookName) {
  
  // write your code here
}

function findBookByGenre(genre) {
  // write your code here
}

function groupByGenre() {
  // write your code here
}

function affordableBooks(budget) {
  let affordable = [];

  for (let i = 0; i < books.length; i++){
    if(books[i].price <= budget){
      affordable.push(books[i]);
    }
  }
  return affordable;
}

// Read input from the user (budget)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Enter your Budget:", (answer) => {
    const budget = parseFloat(answer);
    if (isNaN(budget)){
      console.log("please Enter a valid Number!!")
    }else{
      const affordableBooksList = affordableBooks(budget);
    

    if (affordableBooksList.length > 0) {
      console.log(`\nBooks within your budget: ${budget}$`);
      for (let i = 0; i < affordableBooksList.length; i++) {
        console.log(`${affordableBooksList[i].title} - ${affordableBooksList[i].price}$`);
      }
    }else{
      console.log("There are no books available with your budget!! :(");
    }
  }
  });

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
}


/*(function main() {
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
})();*/



