const { books, authors } = require('../data/static.js');
const Author = require('../models/Author.js');
const Book = require('../models/Book.js');

const resolver = {
  // Query
  Query: {
    books: (_parent, _args, { BookController }) => BookController.getBooks(),
    book: (_parent, args, { BookController }) => BookController.getBookById(args.id),
    authors: (_parent, _args, { AuthorController }) => AuthorController.getAuthors(),
    author: (_parent, args, { AuthorController }) => AuthorController.getAuthorById(args.id),
  },
  Book: {
    author: (parent, _args, { AuthorController }) => AuthorController.getAuthorById(parent.authorId),
  },
  Author: {
    books: (parent, _args, { BookController }) => BookController.getBooks(parent.id),
  },

  // Mutation
  Mutation: {
    createAuthor: async (_parent, args, { AuthorController }) => AuthorController.createAuthor(args),
    createBook: async (_parent, args, { BookController }) => BookController.createBook(args),
  },
};

module.exports = resolver;
