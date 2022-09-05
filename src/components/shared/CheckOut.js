import React from 'react';
import { useNavigate } from "react-router-dom"

// Redux
import { useDispatch } from 'react-redux/es/exports';
import { clear } from '../../redux/cart/cartActions';

// styles
import styles from "./CheckOut.module.css"

const CheckOut = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const clickHandler = () => {
        dispatch(clear())
        navigate("/products")
    }

    return (
        <div className={styles.container}>
            <div>Checked out successfully</div>
            <button onClick={clickHandler}>buy more</button>
        </div>
    );
};

export default CheckOut;