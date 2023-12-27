import React from 'react';
import { useSelector } from 'react-redux';
import "./checkout.css";
import Contact from "./contact";
import Delivery from "./Delivery";
import Payment from './payment';

const Checkout = () => {
        const cart = useSelector((state) => state.cart);

        // Calculate the total quantity and subtotal for all items in the cart
        const { totalQuantity, subtotal } = cart.reduce(
                (accumulator, item) => {
                        const quantity = item.quantity || 1; // If quantity is not provided, default to 1
                        accumulator.totalQuantity += quantity;
                        accumulator.subtotal += quantity * item.price;
                        return accumulator;
                },
                { totalQuantity: 0, subtotal: 0 }
        );


        return (
                <div className="checkout-container">
                       
                        <div className="reciept">
                                <div className="checkout-products">
                                        {/* Display cart items */}
                                        {cart.map((item) => (
                                                <div key={item.id} className="checkout-item">
                                                        <img
                                                                src={item.image}
                                                                alt={item.title}
                                                                className="item-image"
                                                        />
                                                        <div className="item-details">
                                                                <p className="item-title">{item.title}</p>
                                                                <p className="item-price">${item.price}</p>
                                                                <p className="item-quantity">Quantity: {item.quantity}</p>
                                                        </div>
                                                </div>
                                        ))}
                                </div>
                                <div className="checkout-summary">

                                        <h3>Order Summary</h3>
                                        <p>Total Items: <span className='summary-right'>{totalQuantity}</span></p>
                                        <p>Subtotal:<span className='summary-right'> ${subtotal.toFixed(2)}</span></p>
                                        <p>Delivery Charges: <span className='summary-right'>$20</span></p>
                                        <p>
                                                <b>Total:<span className='summary-right'> ${(subtotal + 20).toFixed(2)}</span></b>
                                        </p>

                                </div>
                        </div>
                        <div className='contact-form'>
                                <Contact />
                                <Delivery />
                                <Payment />
                                <hr />
                                <div className="button-div">
                                        <button class="complete-order" type="button">Complete Order</button>
                                </div>
                        </div>
                       
                </div>
        );
};

export default Checkout;
