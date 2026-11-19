import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { books } from "../data";
import Rating from "../components/ui/Rating.jsx";
import Price from "../components/ui/Price.jsx";
import { useParams } from "react-router-dom";

const BookInfo = ({ books }) => {
  const { id } = useParams();
  const book = books.find((book) => book.id == parseInt(id));
  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} alt="" className="book__selected--img" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book__selected--price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
                <div className="book__summary">
                  <div className="book__summary--title">Summary</div>
                  <p className="book__summary--para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa dolores, soluta pariatur veritatis placeat quae nulla
                    voluptates porro. Illo corrupti odit enim fugit totam rerum
                    numquam minima, quam eum eaque?
                  </p>
                  <p className="book__summary--para">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa dolores, soluta pariatur veritatis placeat quae nulla
                    voluptates porro. Illo corrupti odit enim fugit totam rerum
                    numquam minima, quam eum eaque?
                  </p>
                </div>
                <button className="btn">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
