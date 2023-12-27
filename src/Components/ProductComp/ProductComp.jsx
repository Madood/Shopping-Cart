import React from 'react';
import './ProductComp.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/Actions/products';

const ProductCard = () => {
  const products = useSelector((state) => state.allProducts.products);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    const isInCart = cart.some((item) => item.id === product.id);

    if (isInCart) {
      // If already in the cart, remove it
      dispatch(removeFromCart(product.id));
    } else {
      // If not in the cart, add it
      dispatch(addToCart(product));
    }
  };

  return (
    <div className="card-container">
      {products.map((product) => (
        <div className="Product_card" key={product.id}>
          {/* Card Header */}
          <div className="card-header">
            <img
              src={product.image}
              alt={`Product: ${product.title}`}
              className="card-image"
            />
            {/* Add to Cart Button */}
            <button
              className="card-button"
              onClick={() => handleAddToCart(product)}
            >
              {cart.some((item) => item.id === product.id) ? '✔️' : '➕'}
            </button>
          </div>
          {/* Card Body */}
          <Link to={`product/${product.id}`} className="card-link">
            <div className="card-body">
              <div className="card-info">
                <span className="card-title">{product.title}</span>
                <span className="card-price">${product.price}</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
