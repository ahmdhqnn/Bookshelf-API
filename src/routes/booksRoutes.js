const handlers = require("../handlers/booksHandler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: handlers.addBook,
  },
  {
    method: "GET",
    path: "/books",
    handler: handlers.getAllBooks,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: handlers.getBookById,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: handlers.updateBookById,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: handlers.deleteBookById,
  },
];

module.exports = routes;
