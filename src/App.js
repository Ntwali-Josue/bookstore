import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import BookList from './components/BookList';
import Categories from './components/Categories';
import Navbar from './components/NavBar';
import './App.css';

const App = () => (
  <>
    <Router>
      <Navbar />
      <div className="app">
        <div className="app-container">
          <Switch>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route exact path="/">
              <BookList />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  </>
);

export default App;
