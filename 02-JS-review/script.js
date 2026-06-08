const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: false,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//===== Destructuring with objects
/*
const book = getBook(3);

// const title = book.title;
// const author = book.author;

const { title, author, publicationDate, genres, pages, hasMovieAdaptation } =
  book;
// console.log(title, author);

//===== Destructuring with arrays
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// const [primaryGenre, secondaryGenre] = genres;
// console.log(primaryGenre, secondaryGenre);

//===== Rest/Spread Operator
// Rest operator --- Placed at the end
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
// console.log(primaryGenre, secondaryGenre, otherGenres);

// Spread operator
const newArray = [...genres, "epic fantansy"];
// console.log(newArray);

const updatedBook = {
  ...book,
  // Adding a new property
  moviePublication: "21-03-1990",
  // Overriding existing property
  pages: 1201,
};
// console.log(updatedBook);

//===== Template Literals
const summary = `${title} is a book`;
// console.log(summary);

//==== Ternaries Instead of if/else Statements
const pagesRange =
  pages > 1000 ? "More than a thousand" : "Less than a thousand";
// console.log(pages);
// console.log(updatedBook);
// console.log(pagesRange);

//==== Arrow Functions
// function getYear(str) {
//   return str.split("-")[0];
// }

const getYear = (str) => str.split("-")[0];

// console.log(getYear(publicationDate));

//==== Short-Circuiting And Logical Operators: &&, ||, ??
// Some conditions will return the first value and not look at the second value
// && operator short circuits when the first value is false and will immediately return that first value
// When the first value is true, it will immediately return the second value
console.log(true && "Hello"); //Here no short-circuiting
console.log(false && "Hello"); //Short-circuiting
console.log(hasMovieAdaptation && "This book has a movie"); //Short-circuiting

// falsy value: 0, "", null, undefined
console.log("Jonas" && "Some string");
console.log(0 && "Some string");

// || operator short circuits when the first value is true and will immediately return that first value
// When the first value is false, it will immediately return the second value
console.log(true || "Some String");
console.log(false || "Some String");

// We can use short-circuiting to set default values
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
console.log(spanishTranslation);
// That also has a problem because it works for all falsy values such as 0 as well which might have some consequencies

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "No Data";
// console.log(countWrong);

// Nullish Coalescing operator, ??
// It works very similary to the || operator but it only returns the second value when the
// first value is Null or Undefined but not when it 0 or ""
// const count = book.reviews.librarything.reviewsCount ?? "No Data";
// console.log(count);

//==== Optional Chaining
// Optional chaining means continue if the before part is not undefined
// console.log(book.reviews.librarything?.reviewsCount);
const getTotalBookReview = (book) => {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
};

console.log(getTotalBookReview(book));
*/

//==== 3 Functional array methods; The Array map Method, The Array filter Method and The Array reduce Method
// These methods donot mutate the original array but return a new array based on the original one
/*
// 1. The map Method
// map array will loop over an array and return a new array with the same length with some operations applied to each
// of the elements of the original array
// It accepts a callback function which is a function applied to each of the elements of the array.

const newArray = [1, 2, 3, 4].map((el) => el * 2);
// console.log(newArray);

const books = getBooks();
const book = getBooks(2);

const getTotalBookReview = (book) => {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
};

const titles = books.map((book) => book.title);
// console.log(titles);

// const essentialData = books.map((book) => {
//   return {
//     title: book.title,
//     author: book.author,
//   };
// });
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviews: getTotalBookReview(book),
}));

// console.log(essentialData);

// 2. The filter Method
// We can use the filter method inorder to filter out some elements based on a condition
// It returns a condition. If it is true, it will then go into the filtered array, it is false it will be filtered out

// E.g creating an array of only books with more than 500 pages
const longBooks = books.filter((book) => book.pages > 500);
// console.log(longBooks);

// You can also chain methods
const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);

// console.log(longBooksWithMovie);

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => ({ title: book.title, genres: book.genres }));

// console.log(adventureBooks);

// 3. Reduce Method.
// This is the most vasertile and most powerful of all array methods in JS
// It reduce the entire array to one value, boils down the entire array to one value
// It takes the call back function anda starter value
// The callback function also takes an accumulator of the current starter value

// E.g adding all pages for the books
// const allBookPages = books.reduce((acc, book) => acc + book.pages, 0);
const allBookPages = books.reduce((sum, book) => sum + book.pages, 0);
// console.log(allBookPages);

//==== Sort Method
// We can use this method to sort an Array.
const x = [3, 5, 2, 8, 4, 9, 4, 3];
const sorted = x.sort((a, b) => a - b); //Sort in ascending way
// a and b are the current value and next value
// returing negative number - ascending e.g 3-5
// b-a -> descending
// sort method changes the original array
// Always first take a copy of the original array with the slice() method inorder not to muted the original array
const sortedAsc = x.slice().sort((a, b) => a - b);
const sortedDesc = x.slice().sort((b, a) => a - b);

// console.log(sortedAsc);
// console.log(sortedDesc);

// More practical example
const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages); //Sorted books by pages in descending order
// console.log(sortedByPages);

//==== Working With Immutable Arrays
// Understanding how to add elements, how to delete elements and how to update elements of an array
// without changing the original one

// 1. Add book object to an array
const newBook = {
  id: 6,
  title: "Harry Porter and the chamber of secrets",
  author: "J.k. Rollins",
};

const booksAfterAdd = [...books, newBook];
// console.log(booksAfterAdd);

// 2. Delete a book from an array. E.g. Delete book number 3
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
// console.log(booksAfterDelete);

// 3. Updating a book in an array. E.g. Updating a book of id number 1
const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, pages: 1 } : book,
);
console.log(booksAfterUpdate);
*/

//==== Asynchronous JavaScript
// Fetching data / loading data from an external web API

// 1. Asynchronous JavaScript: Promises
/*
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));
*/

// 2. Asynchronous JavaScript: Async/Await
// This is a much cleaner method
async function getToDos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
}

getToDos();
