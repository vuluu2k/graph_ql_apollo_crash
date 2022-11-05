import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Forms() {
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
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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
