import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useQuery } from '@apollo/client';
import Spinner from 'react-bootstrap/Spinner';

import { getBooks, getBook } from '../../graphql/queries';

function BookList() {
  const [bookId, setBookId] = useState(null);
  const { loading, error, data = {} } = useQuery(getBooks);
  const {
    loading: loadingBook,
    error: errorBook,
    data: dataBook = {},
  } = useQuery(getBook, { variables: { bookId: bookId }, skip: bookId === null });

  const { books = [] } = data;
  const { book } = dataBook;

  if (error || (bookId && errorBook)) return <p>Tải dữ liệu thất bại</p>;

  return (
    <div className="book-list" style={{ position: 'relative' }}>
      {(loading || loadingBook) && (
        <div
          style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgb(0,0,0,.5)', zIndex: 1 }}
        >
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
            <Spinner animation="border" variant="info" />
          </div>
        </div>
      )}

      <Row>
        <Col xs={12} md={8}>
          <h3 className="text-center text-info">Các tác phẩm</h3>
          <Row>
            {books.map((item, index) => {
              return (
                <Col
                  key={index}
                  xs={12}
                  sm={6}
                  md={5}
                  lg={4}
                  xl={3}
                  onClick={() => setBookId(item.id)}
                  className="mb-2"
                >
                  <Card border="info" text="dark" bg="info" className="text-center shadow" style={{ width: '100%' }}>
                    <Card.Body>
                      <Card.Title>{item?.name}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col xs={12} md={4}>
          <h3 className="text-center text-info">Khung xem chi tiết</h3>
          <Card border="info" text="dark" bg="info" className=" shadow" style={{ width: '100%' }}>
            <Card.Body>
              <Card.Title>{book?.name}</Card.Title>
              <Card.Subtitle>{book?.genre}</Card.Subtitle>
              <div>
                <strong>Tên Tác giả: </strong> <span>{book?.author?.name}</span>
              </div>
              <div>
                <strong>Tuổi: </strong> <span>{book?.author?.age}</span>
              </div>
              <div>
                <strong>Các tác phẩm khác: </strong>
              </div>
              <div>
                <ul>
                  {book?.author?.books?.map((item, index) => (
                    <li key={index}>{item?.name}</li>
                  ))}
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default BookList;
