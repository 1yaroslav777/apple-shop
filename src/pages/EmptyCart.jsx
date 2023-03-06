import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Cart is empty! <span>😕</span>
      </h2>
      <p>
        Looks like you didnt add items :(
        <br />
        Dont waste your time and go back)
      </p>

      <Link to="/" className="button button--black">
        <span>Go back</span>
      </Link>
    </div>
  );
};

export default EmptyCart;
