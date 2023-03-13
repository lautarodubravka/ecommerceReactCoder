import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart />
      <span className="badge badge-pill badge-danger">3</span>
    </div>
  );
};

export default CartWidget;
