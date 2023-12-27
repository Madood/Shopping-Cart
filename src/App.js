
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import ProductListing from './Components/ProductListing';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Banner from "./Components/Banner/banner";
import Footer from "./Components/Footer/footer";
import Checkout from './Components/Checkout/Checkout';
import ProductDetails from './Components/Detail/ProductDetails';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Header />
          <Banner />
          
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductDetails />} /> {/* Ensure this line is correct */}
            <Route path="/product/checkout" element={<Checkout />} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
