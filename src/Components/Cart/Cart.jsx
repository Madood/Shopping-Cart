import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, decreaseQuantity } from '../../redux/Actions/products';

const ShoppingCart = ({ onClose, onCheckout }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
        };



const handleDecreaseQuantity = (productId) => {
  // Find the item in the cart
  const item = cart.find((item) => item.id === productId);

  // If the item is found and the quantity is greater than 1, dispatch the decreaseQuantity action
  if (item && item.quantity > 1) {
    dispatch(decreaseQuantity(productId));
  } else {
    // If the quantity is 1 or the item is not found, you may want to remove the item from the cart
    dispatch(removeFromCart(item));
  }
};


  // const handleRemoveFromCart = (product) => {
  //   dispatch(removeFromCart(product));
  // };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <div className="bg-backdrop"></div>
      <div className="slide-over-panel">
        <div className="absolute">
          <div className="pointer-events-none">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="slide-over-content">
                <div className="cart-header">
                  <h2 className="slide-over-title" id="slide-over-title">
                    Shopping cart
                  </h2>
                  <div className="subtotal-Products">
                    {/* Display cart items */}
                    {cart.map((item) => (
                      <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.title} className="item-image" />
                        <p className="item-title">{item.title}</p>
                        <div className="item-quantity">
                           <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                          <span>{item.quantity || 1}</span>
                          <button onClick={() => handleAddToCart(item)}>+</button>
                          
                        </div>
                        <p className="item-price">${item.price}</p>
                        <p className="item-total">Total: ${(item.quantity || 1) * item.price.toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="subtotal-checkout">
                  <p>
                    <span>Subtotal ({cart.reduce((total, item) => total + (item.quantity || 1), 0)} items)</span>
                    <span>${getTotalPrice()}</span>
                  </p>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  <button className="cart-button" onClick={() => { onCheckout(); onClose(); }}>
                    <Link to="/product/checkout">Checkout</Link>
                  </button>
                  <div className="mt-6 continue-shopping">
                    <span>or</span>
                    <button className="continue-button" onClick={onClose}>
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
