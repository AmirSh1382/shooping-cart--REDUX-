import React from 'react';

// Styles
import styles from "./Cart.module.css"

// Redux
import { useSelector } from 'react-redux/es/exports';

// Components
import CartItem from './shared/CartItem'; 
import Total from './shared/Total';
import CheckOut from './shared/CheckOut';
import EmptyBasket from './shared/EmptyBasket';

const Cart = () => {

    const cartState = useSelector(state => state.cartState)

    return (
        <div className={`${styles.container} container-fliod`}>
          <div className='row d-flex justify-content-center'>
            <div className='col-12 col-md-8 col-lg-7'>
              {
                cartState.selectedItems.map(item => <CartItem key={item.id} itemData={item} />)
              }
            </div>
            <div className='col-12 col-md-4 col-lg-3 text-center'>
              {cartState.itemsCounter > 0 && <Total />}
              {cartState.itemsCounter === 0 && cartState.checkout && <CheckOut />}
              {cartState.itemsCounter === 0 && !cartState.checkout && <EmptyBasket />}
            </div>
          </div>
        </div>
    );
};

export default Cart;