import { Container } from 'react-bootstrap';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import BookList from './components/BookList';
import Forms from './components/Forms';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Container className="py-3 mt-3" style={{ backgroundColor: 'lightcyan' }}>
        <h1 className="text-center text-info mb-3">Quản lý sách của bạn</h1>
        <hr />
        <hr />
        <Forms />
        <hr />
        <hr />
        <BookList />
      </Container>
    </ApolloProvider>
  );
}

export default App;
