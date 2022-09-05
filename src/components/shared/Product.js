import React from 'react';

import { Link } from "react-router-dom"

// Fucntoins
import { shorten , isInCart , quantityCounter } from '../../helper/fucntions';

// Redux
import { useSelector , useDispatch } from 'react-redux/es/exports';
import { removeItem , addItem , increase , decrease } from '../../redux/cart/cartActions';

// Styles
import styles from "./Product.module.css"

const Product = ({productData}) => {

    const cartState = useSelector(state => state.cartState)
    const dispatch = useDispatch()

    const { image , title , price } = productData

    return (
        <div className='col-12 col-md-6 col-lg-4 col-xl-3 mb-4 d-flex justify-content-center'>
            <div className={styles.container}>
                <img className={styles.image} src={image} alt='product'/>
                <div className='mt-4'>
                    <h3 className={styles.title}>{shorten(title)}</h3>
                    <p>{price}$</p>
                    <div className={styles.btnsContainer}>
                        <Link to={`/products/${productData.id}`}>Details</Link>
                        <div>
                            {quantityCounter(cartState, productData.id) === 1 && <button onClick={() => dispatch(removeItem(productData))}><i className="bi bi-trash"></i></button>} 
                            {quantityCounter(cartState, productData.id) > 1 && <button onClick={() => dispatch(decrease(productData))}><i className="bi bi-dash"></i></button>}
                            {quantityCounter(cartState, productData.id) && <span>{quantityCounter(cartState, productData.id)}</span>}
                            {
                                isInCart(cartState , productData.id) ? 
                                <button onClick={() => dispatch(increase(productData))}><i className="bi bi-plus"></i></button>:
                                <button onClick={() => dispatch(addItem(productData))}>add to cart</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;