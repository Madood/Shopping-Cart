import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../../redux/Actions/products';
import { addToCart } from '../../redux/Actions/products';
import './Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { image, title, price, description } = product;
  const { productId } = useParams();
  const navigate = useNavigate();

  // Quantity state
  const [quantity, setQuantity] = useState(1);

  // Selected items state
  const [selectedItems, setSelectedItems] = useState([]);

  // Fetch product details
  const fetchProductDetail = async (id) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      dispatch(selectedProduct(response.data));
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  // Handle add to cart
  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity };
    dispatch(addToCart(productWithQuantity));
    setSelectedItems([...selectedItems, product.id]);
  };

  // Handle next product
  const handleNextProduct = () => {
    const nextProductId = parseInt(productId, 10) + 1;
    navigate(`/product/${nextProductId}`);
  };

  // Handle previous product
  const handlePreviousProduct = () => {
    const previousProductId = parseInt(productId, 10) - 1;
    if (previousProductId > 0) {
      navigate(`/product/${previousProductId}`);
    }
  };

  // Fetch product details on component mount
  useEffect(() => {
    if (productId && productId !== '') {
      fetchProductDetail(productId);
    }
  }, [productId]);

  return (
    <section className="Details_container">
      <button className="toggle-button Left" onClick={handlePreviousProduct}>
        <FontAwesomeIcon icon={faCircleChevronLeft} />
      </button>
      <div className="container_left">
        <img alt="ecommerce" className="Details_image" src={image} />
      </div>
      <div className="container_right">
        <div className="Details_header">
          <h2 className="title-font">Fake Shop</h2>
          <h1 className="Details_title">
            <h2>{title}</h2>
          </h1>
          <span className="Details_price">${price}</span>
          <h2 className="Details_description">{description}</h2>
          <p>CHECK IN-STORE AVAILABILITY </p>
          <p> SHIPPING, EXCHANGES AND RETURNS</p>

          {/* Quantity Selector */}
          <div className="flex">
            <span className="mr-3">Quantity</span>
            <div className="quantity-selector">
              <button
                className="quantity-button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="quantity">{quantity}</span>
              <button
                className="quantity-button"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            {/* Add to Cart Button */}
            <div className="right">
              <button
                className="Details-button"
                onClick={handleAddToCart}
                disabled={selectedItems.includes(product.id)}
              >
                {selectedItems.includes(product.id) ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Next Product Button */}
      <button className="toggle-button right" onClick={handleNextProduct}>
        <FontAwesomeIcon icon={faCircleChevronRight} />
      </button>
    </section>
  );
};

export default ProductDetails;
