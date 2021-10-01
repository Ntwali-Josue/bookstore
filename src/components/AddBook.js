/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from 'react';
import {
  Row, Form, Button, Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const AddBook = ({ submitBook }) => {
  const inputRef = useRef([]);

  const inputs = ['title', 'author'];

  useEffect(() => {
    if (inputs.length !== 0) {
      inputRef.current[0].focus();
    }
  }, [inputs]);

  const addBook = (e) => {
    e.preventDefault();
    if (inputRef.current[0].value && inputRef.current[1].value) {
      const newBook = {
        title: inputRef.current[0].value,
        author: inputRef.current[1].value,
      };
      submitBook(newBook);
      inputRef.current[0].value = '';
      inputRef.current[1].value = '';
    }
  };

  return (
    <div className="form">
      <h2 className="mx-4">Add New Book</h2>
      <Form>
        <Row className="m-4">
          <Col xs="auto" controlId="formGridCity">
            <Form.Control
              placeholder="Book title"
              ref={(el) => {
                inputRef.current[0] = el;
              }}
            />
          </Col>
          <Col xs="auto" controlId="formGridCity">
            <Form.Control
              placeholder="Author"
              ref={(el) => {
                inputRef.current[1] = el;
              }}
            />
          </Col>
          <Col xs="auto">
            <Form.Group controlId="formGridState">
              <Form.Select defaultValue="Category">
                <option>Category</option>
                <option>Action</option>
                <option>Economy</option>
                <option>Science Fiction</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Button as={Col} variant="primary" type="submit" onClick={addBook}>
              ADD BOOK
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default AddBook;

AddBook.prototype = {
  submitBook: PropTypes.func.isRequired,
};
