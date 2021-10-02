import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const cardStyle = {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '15px',
  alignItems: 'center',
  padding: '10px 20px',
};

const BookItem = ({ title, category, removeBook }) => (
  <>
    <div className="book">
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
          <Card.Title className="book-title">{title}</Card.Title>
          <Card.Text>Josh Reys</Card.Text>
          <button type="button" className="book-btn comments">Comments</button>
          <button type="button" className="book-btn" onClick={removeBook}>Remove</button>
          <button type="button" className="book-btn">Edit</button>
        </Card.Body>
        <Card.Body>
          <Card.Img variant="top" src="https://i.stack.imgur.com/7wcxc.png" className="image" />
          <Card.Title>24%</Card.Title>
          <Card.Text>Completed</Card.Text>
        </Card.Body>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">Current chapter</Card.Subtitle>
          <Card.Title>Chapter 17</Card.Title>
          <Button variant="primary">Update progress</Button>
        </Card.Body>
      </Card>
    </div>
  </>
);

export default BookItem;

BookItem.propTypes = {
  removeBook: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
