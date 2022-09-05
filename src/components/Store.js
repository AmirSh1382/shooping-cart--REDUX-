import React from 'react';

// Redux
import { useSelector } from 'react-redux/es/exports';

// Components
import Product from './shared/Product';

// Styles
import styles from "./Store.module.css"

const Store = () => {

    const products = useSelector(state => state.productsState.products)

    return (
        <div className={`${styles.container} container`}>
            <div className='row'>
                {
                    products.map(product => <Product key={product.id} productData={product} />)
                }
            </div>
        </div>
    );
};

export default Store;