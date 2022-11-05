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

export { createBook };
