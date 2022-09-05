import React from 'react';

// Functions
import { shorten } from '../../helper/fucntions';

// Styles
import styles from "./CartItem.module.css"

// Redux
import { useDispatch } from 'react-redux/es/exports';
import { removeItem , increase , decrease } from '../../redux/cart/cartActions';

const CartItem = ({itemData}) => {

    const dispatch = useDispatch()

    const { image , title , price , quantity} = itemData
    
    return (
        <div className={styles.container}>
            <div>
                <img src={image} alt="product"/>
            </div>
            <div>
                <div className={styles.title}>{shorten(title)}</div>
                <div className={styles.price}>{price}$</div>
            </div>
            <div>
                <div className={styles.quantity}>{quantity}</div>
            </div>
            <div className={styles.btnsContainer}>
                {
                    quantity === 1 ? 
                    <button onClick={() => dispatch(removeItem(itemData))}><i className="bi bi-trash"></i></button> :
                    <button onClick={() => dispatch(decrease(itemData))}><i className="bi bi-dash"></i></button>
                }
                <button onClick={() => dispatch(increase(itemData))}><i className="bi bi-plus"></i></button>
            </div>
        </div>
    );
};

export default CartItem;