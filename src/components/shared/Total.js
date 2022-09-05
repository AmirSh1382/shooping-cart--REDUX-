import React from 'react';

// Redux
import { useSelector , useDispatch } from 'react-redux';
import { checkOut , clear } from '../../redux/cart/cartActions';

// Styles
import styles from "./Total.module.css"

const Total = () => {

    const dispatch = useDispatch()
    const cartState = useSelector(state => state.cartState)

    return (
        <div className={styles.container}>
            <div><span>Total Items:</span> {cartState.itemsCounter}</div>
            <div><span>Total Payments:</span> {cartState.total}$</div>
            <div className='d-flex align-items-center justify-content-between mt-5 mb-2'>
                <button className={styles.clearBtn} onClick={() => dispatch(clear())}>Clear</button>
                <button className={styles.checkOutBtn} onClick={() => dispatch(checkOut())}>Checkout</button>
            </div>
        </div>
    );
};

export default Total;