import React from 'react';
import "./footer.css";


const Footer = () => {
        return (
                <div className="shopping-cart-footer">
                        <div className="contact-info">
                                <div className="sales-support">
                                        <p>Sales Support:</p>
                                        <p>Email: <a href="mailto:sahibzada301@gmail.com">sahibzada301@gmail.com</a></p>
                                        <p>Phone: (48) - 729 - 624828</p>
                                </div>
                                <div className="customer-care">
                                        <p>Customer Care:</p>
                                        <p>Email: <a href="mailto:madood301@hotmail.com">madood301@hotmail.com</a></p>
                                        <p>Phone: (92) - 315 - 6988919</p>
                                </div>
                        </div>
                        <div className="useful-links">
                                <ul>
                                       
                                        <li><a href="#">Store Locator</a></li>
                                        <li><a href="#">FAQ's</a></li>
                                        <li><a href="#">Size Guide</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Terms Conditions</a></li>
                                        <li><a href="#">Charcoal Sewing</a></li>
                                        <li><a href="#">All Products</a></li>
                                        <li><a href="#">Fabric Care</a></li>
                                         <li><a href="#">Return Exchange Policy</a></li>
                                </ul>
                        </div>
                        <div className="copyright">
                                <p>© 2023, Ruchul097. Powered by React Redux</p>
                        </div>
                </div>
        );
};

export default Footer;
