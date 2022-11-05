import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useMutation, useQuery } from '@apollo/client';
import Spinner from 'react-bootstrap/Spinner';

import { getAuthors } from '../../graphql/queries';
import { createBook } from '../../graphql/mustates';

function Forms() {
  const [fieldBook, setFieldBook] = useState({ name: '', genre: '', authorId: null });
  const { loading, data = {} } = useQuery(getAuthors);
  const { authors = [] } = data;

  const { name, genre, authorId } = fieldBook;

  const handleOnChangeInputAddBook = (event) =>
    setFieldBook((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  return (
    <Row>
      {loading && (
        <div
          style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgb(0,0,0,.5)', zIndex: 1 }}
        >
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
            <Spinner animation="border" variant="info" />
          </div>
        </div>
      )}
      <Col xs={12} sm={6}>
        <Form>
          <InputGroup className="mb-3">
            <InputGroup.Text>Tên sách</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Nhập tên sách"
              name="name"
              value={name}
              onChange={handleOnChangeInputAddBook}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Thể loại</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Nhập tên thể loại"
              name="genre"
              value={genre}
              onChange={handleOnChangeInputAddBook}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Tác giả</InputGroup.Text>
            <Form.Select name="authorId" value={authorId} onChange={handleOnChangeInputAddBook}>
              <option>Chọn tác giả bạn muốn</option>
              {authors.map((item, index) => {
                return (
                  <option key={index} value={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </Form.Select>
          </InputGroup>
          <Button className="float-right" variant="info" type="submit">
            Thêm sách
          </Button>
        </Form>
      </Col>
      <Col xs={12} sm={6}>
        <Form>
          <InputGroup className="mb-3 invisible">
            <InputGroup.Text>Tên tác giả</InputGroup.Text>
            <Form.Control aria-label="Tên tác giả" />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Tên tác giả</InputGroup.Text>
            <Form.Control type="text" aria-label="Tên tác giả" placeholder="Nhập tên tác giả" />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Tuổi</InputGroup.Text>
            <Form.Control type="number" aria-label="Tuổi" placeholder="Nhập tuổi" />
          </InputGroup>
          <Button className="float-right" variant="info" type="submit">
            Thêm tác giả
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default Forms;
