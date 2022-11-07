import React, { useState, memo } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useMutation, useQuery } from '@apollo/client';

import { getAuthors, getBooks } from '../../graphql/queries';
import { createBook, createAuthor } from '../../graphql/mustates';

function Forms() {
  const [fieldBook, setFieldBook] = useState({ name: '', genre: '', authorId: 'other' });
  const [fieldAuthor, setFieldAuthor] = useState({ name: '', age: '' });
  const { loading, data = {} } = useQuery(getAuthors);
  const [onCreateBook, dataOnCreateBook = {}] = useMutation(createBook);
  const [onCreateAuthor, dataOnCreateAuthor = {}] = useMutation(createAuthor, { variables: fieldAuthor });
  const { authors = [] } = data;

  const { name, genre, authorId } = fieldBook;
  const { name: nameAuthor, age } = fieldAuthor;

  const handleOnChangeInputAddBook = (event) =>
    setFieldBook((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  const handleOnChangeInputAddAuthor = (event) =>
    setFieldAuthor((prev) => ({ ...prev, [event.target.name]: event.target.value }));

  const handleOnCreateBook = () => {
    onCreateBook({ variables: { name: nameAuthor, age: parseInt(age) }, refetchQueries: [{ query: getBooks }] });
  };

  const handleOnCreateAuthor = () => {
    onCreateAuthor({ variables: fieldAuthor, refetchQueries: [{ query: getAuthors }] });
  };

  return (
    <Row>
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
              {(loading && <option value="loading">Đang tải...</option>) || (
                <React.Fragment>
                  <option value="other">Chọn tác giả bạn muốn</option>
                  {authors.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </React.Fragment>
              )}
            </Form.Select>
          </InputGroup>
          <Button className="float-right" variant="info" type="submit" onClick={handleOnCreateBook}>
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
            <Form.Control
              type="text"
              aria-label="Tên tác giả"
              placeholder="Nhập tên tác giả"
              name="name"
              value={nameAuthor}
              onChange={handleOnChangeInputAddAuthor}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Tuổi</InputGroup.Text>
            <Form.Control
              type="number"
              aria-label="Tuổi"
              placeholder="Nhập tuổi"
              name="age"
              value={age}
              onChange={handleOnChangeInputAddAuthor}
            />
          </InputGroup>
          <Button className="float-right" variant="info" type="submit" onClick={handleOnCreateAuthor}>
            Thêm tác giả
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default memo(Forms);
