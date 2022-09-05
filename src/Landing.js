import React , { useEffect } from 'react';

// For Routes
import { Routes , Route , Navigate } from 'react-router-dom';

// Redux
import { getLocalStorage } from './redux/cart/cartActions';
import { getProducts } from './redux/products/productsActions';
import { useDispatch } from 'react-redux';

// Components
import Navbar from './components/shared/Navbar';
import Cart from './components/Cart';
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';

const Landing = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts())
        dispatch(getLocalStorage())
    } , [dispatch])

    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/cart' element={<Cart /> } />
                <Route path='/products' element={<Store /> } />
                <Route path='/products/:id' element={<ProductDetails />} />
                <Route path='/' element={<Navigate to="/products" />} />
            </Routes>
        </>
    );
};

export default Landing;