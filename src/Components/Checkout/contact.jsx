import React, { useState } from 'react';

function Contact() {
        const [formData, setFormData] = useState({
                email: '',
                subscribe: false,
        });

        const handleChange = (e) => {
                const { name, value, type, checked } = e.target;
                const newValue = type === 'checkbox' ? checked : value;

                setFormData((prevData) => ({
                        ...prevData,
                        [name]: newValue,
                }));
        };

        return (
                <div className="contact-section">
                        <h2>Contact</h2>
                        <form>
                                
                                <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter your email"
                                        required
                                />

                                <p style={{ display: 'flex', alignItems: 'left' , padding: "10px"}}>
                                        <input 
                                                style={{ flex: '0 0 5%' }}
                                                type="checkbox"
                                                id="subscribeCheckbox"
                                                checked={formData.subscribe}
                                                onChange={handleChange}
                                                name="subscribe"
                                        />
                                        {' '}
                                        Email me with news and offers
                                </p>
                        </form>
                </div>
        );
}

export default Contact;
