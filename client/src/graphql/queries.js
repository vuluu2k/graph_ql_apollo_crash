import { gql } from '@apollo/client';

const getBooks = gql`
  query getBooks {
    books {
      id
      name
      genre
      author {
        id
        name
        age
      }
    }
  }
`;

const getBook = gql`
  query getBook($bookId: ID!) {
    book(id: $bookId) {
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`;

const getAuthors = gql`
  query getAuthors {
    authors {
      id
      name
      age
    }
  }
`;

export { getBooks, getBook, getAuthors };
