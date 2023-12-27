// Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import Cart from './Cart/Cart';


function Header() {
        const [isCartOpen, setCartOpen] = useState(false);

        const handleCartClick = () => {
                setCartOpen(!isCartOpen);
        };

        const handleCloseCart = () => {
                setCartOpen(false);
        };

        const cartItems = useSelector((state) => state.cart);

        const totalProductsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

        return (
                <>
                        <Menu fixed="top" inverted>
                                <Menu.Item as={Link} to="/" header>
                                        Fake Shop
                                </Menu.Item>

                                <Menu.Menu position="right">
                                        <Menu.Item onClick={handleCartClick}>
                                                {isCartOpen ? <Icon name="close" /> : <Icon name="cart" />}
                                                {isCartOpen ? "Close" : `Basket (${totalProductsInCart})`}
                                        </Menu.Item>
                                </Menu.Menu>
                        </Menu>

                        {isCartOpen && <Cart onClose={handleCloseCart} onCheckout={handleCloseCart} />}

                       
                </>
        );
}

export default Header;
