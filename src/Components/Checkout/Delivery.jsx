import React, { useState } from 'react'

function Delivery() {
        const [country, setCountry] = useState('');
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [address, setAddress] = useState('');
        const [apartment, setApartment] = useState('');
        const [city, setCity] = useState('');
        const [postalCode, setPostalCode] = useState('');
        const [phone, setPhone] = useState('');

        const handleSubmit = (e) => {
                e.preventDefault();
                // Add your logic to handle form submission
                console.log('Form submitted:', {
                        country,
                        firstName,
                        lastName,
                        address,
                        apartment,
                        city,
                        postalCode,
                        phone,
                });
        };
  return (
          <div className="delivery-section">
                  <h2>Delivery</h2>
                  <form onSubmit={handleSubmit}>
                          <input
                                  placeholder='Country'
                                  type="text"
                                  id="country"
                                  name="country"
                                  value={country}
                                  onChange={(e) => setCountry(e.target.value)}
                                  required
                                  className="input-with-padding"
                          />

                          <div className="name-container">
                                  <div className="half-width">
                                         
                                          <input
                                                  placeholder='First Name'
                                                  type="text"
                                                  id="firstName"
                                                  name="firstName"
                                                  value={firstName}
                                                  onChange={(e) => setFirstName(e.target.value)}
                                                  required
                                                  className="input-with-padding"
                                          />
                                  </div>
                                  <div className="half-width">
                                          <input
                                                  placeholder='Last Name'
                                                  type="text"
                                                  id="lastName"
                                                  name="lastName"
                                                  value={lastName}
                                                  onChange={(e) => setLastName(e.target.value)}
                                                  required
                                                  className="input-with-padding"
                                          />
                                  </div>
                          </div>
                          <input
                                  placeholder='Address'
                                  type="text"
                                  id="address"
                                  name="address"
                                  value={address}
                                  onChange={(e) => setAddress(e.target.value)}
                                  required
                                  className="input-with-padding"
                          />

                          
                          <input
                                  placeholder='Apartment, suite, etc.'
                                  type="text"
                                  id="apartment"
                                  name="apartment"
                                  value={apartment}
                                  onChange={(e) => setApartment(e.target.value)}
                                  className="input-with-padding"
                          />

                          <div className="name-container">
                                  <div className="half-width">
                                          <input
                                                  placeholder='City'
                                                  type="text"
                                                  id="city"
                                                  name="city"
                                                  value={city}
                                                  onChange={(e) => setCity(e.target.value)}
                                                  required
                                                  className="input-with-padding"
                                          />
                                  </div>
                                  <div className="half-width">
                                         
                                          <input
                                                  placeholder='Postal code'
                                                  type="text"
                                                  id="postalCode"
                                                  name="postalCode"
                                                  value={postalCode}
                                                  onChange={(e) => setPostalCode(e.target.value)}
                                                  required
                                                  className="input-with-padding"
                                          />
                                  </div>
                          </div>

                          <input
                                  placeholder='Phone'
                                  type="tel"
                                  id="phone"
                                  name="phone"
                                  value={phone}
                                  onChange={(e) => setPhone(e.target.value)}
                                  required
                                  className="input-with-padding"
                          />

                         
                  </form>
          </div>
  )
}

export default Delivery