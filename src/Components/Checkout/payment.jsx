import React, { useState } from 'react';

function Payment() {
        // State for form data
        const [formData, setFormData] = useState({
                paymentMethod: '',
        });

        // Function to handle changes in the payment method
        const handlePaymentChange = (e) => {
                setFormData({
                        ...formData,
                        paymentMethod: e.target.value,
                });
        };

        return (
                <div className="payment-section">
                        <h2>Payment</h2>
                        <p>All transactions are secure and encrypted.</p>

                        <select
                                id="paymentMethod"
                                name="paymentMethod"
                                value={formData.paymentMethod}
                                onChange={handlePaymentChange}
                                required
                                className='payment-select'
                        >
                                <option value="">Select Payment Method</option>
                                <option value="cod">Cash on Delivery (COD)</option>
                                <option value="bankDeposit">Bank Deposit</option>
                        </select>
                        
                        {formData.paymentMethod === 'cod' && (
                                        <p className='Payment-method'>COD is only available for Pakistan & all over the Middle East.</p>
                        )}

                        {formData.paymentMethod === 'bankDeposit' && (
                                        <p className='Payment-method'>
                                        Please deposit the total amount to the provided bank account details.
                                </p>
                                )}
                       
                </div>
        );
}

export default Payment;
