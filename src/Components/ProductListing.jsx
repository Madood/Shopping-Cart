import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/Actions/products';
import ProductComponent from './ProductComp/ProductComp';

function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProduct = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      // 'https://api.escuelajs.co/api/v1/products'
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  console.group("Products:", products);
 
  return (
    <div className='ui grid container' style={{ marginTop: '55px' }}>
      <ProductComponent />
    </div>
  );

}

export default ProductListing;

