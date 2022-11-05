import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { useMutation, useQuery } from '@apollo/client';

import { getAuthors } from '../../graphql/queries';

function Forms() {
  const { loading, error, data } = useQuery(getAuthors);
  console.log(data);

  const { authors = [] } = data;

  return (
    <Row>
      <Col xs={12} sm={6}>
        <Form>
          <InputGroup className="mb-3">
            <InputGroup.Text>Tên sách</InputGroup.Text>
            <Form.Control type="text" aria-label="Tên sách" placeholder="Nhập tên sách" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text>Thể loại</InputGroup.Text>
            <Form.Control type="text" aria-label="Tên sách" placeholder="Nhập tên thể loại" />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Tác giả</InputGroup.Text>
            <Form.Select aria-label="Chọn tác giả">
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
