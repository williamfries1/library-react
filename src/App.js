import React, { useState } from 'react';
import "./App.css";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home";
import Footer from "./components/Footer.jsx";
import Books from "./pages/Books.jsx";
import BookInfo from "./pages/BookInfo.jsx";

import { books } from "./data";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./pages/Cart.jsx";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart () {
    console.log('add to cart');
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" exact render={() => <Books books={books}/>} />
        <Route path="/books/:id" render={() => <BookInfo books={books}/>} addToCart={addToCart}/>
        <Route path="/cart"  render={() => <Cart books={books}/>}  />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
