import { gql } from '@apollo/client';

const createBook = gql`
  mutation ($name: String, $genre: String, $authorId: String) {
    createBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      genre
      author {
        name
        age
      }
    }
  }
`;

const createAuthor = gql`
  mutation ($name: String, $age: Int) {
    createAuthor(name: $name, age: $age) {
      id
      name
      age
    }
  }
`;

export { createBook, createAuthor };
