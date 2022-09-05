import React from 'react';

import { Link } from 'react-router-dom';

// Selector
import { useSelector } from 'react-redux/es/exports';

// Styles
import styles from "./Navbar.module.css"

const Navbar = () => {

    const cartState = useSelector(state => state.cartState)

    return (
        <nav className={`${styles.navbar} shadow`}>
            <Link to="/products">Products</Link>

            <Link to="/cart" className={styles.cartIcon}>
                <i className="bi bi-cart3"></i>
                <span>{cartState.itemsCounter}</span>
            </Link>
        </nav>
    );
};

export default Navbar;