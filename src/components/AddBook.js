/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from 'react';
import {
  Row, Form, Button, Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

const formStyle = [
  {
    width: '10.875rem',
    height: '1.5rem',
    margin: '1.813rem 32.75rem 1.188rem 0',
    fontSize: '1.25rem',
    fontWeight: 'Bold',
    letterSpacing: '-0.18px',
    color: '#888',
  },
];

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
      <h2 style={formStyle[0]}>Add New Book</h2>
      <Form>
        <Row className="mb-4">
          <Col xs={5} controlId="formGridCity">
            <Form.Control
              placeholder="Book title"
              ref={(el) => {
                inputRef.current[0] = el;
              }}
            />
          </Col>
          <Col xs={2} controlId="formGridCity">
            <Form.Control
              placeholder="Author"
              ref={(el) => {
                inputRef.current[1] = el;
              }}
            />
          </Col>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Select defaultValue="Category">
              <option>Category</option>
              <option>Action</option>
              <option>Economy</option>
              <option>Science Fiction</option>
            </Form.Select>
          </Form.Group>
          <Button as={Col} variant="primary" type="submit" onClick={addBook}>
            ADD BOOK
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default AddBook;

AddBook.prototype = {
  submitBook: PropTypes.func.isRequired,
};
