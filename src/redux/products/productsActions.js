import axios from "axios"

const getProductsStart = () => {
    return {type: "GET_PRODUCTS_START"}
}

const getProductsSuccess = products => {
    return {
        type: "GET_PRODUCTS_SUCCESS",
        payload: { products }
    }
}

const getProductsFailure = error => {
    return {
        type: "GET_RPODUCTS_FAILURE",
        payload: { error }
    }
}

const getProducts = () => {
    return async (dispatch) => {
        try{
            dispatch(getProductsStart())

            const response = await axios.get("https://fakestoreapi.com/products")
            const products = response.data

            dispatch(getProductsSuccess(products))
        }
        catch(error){
            dispatch(getProductsFailure(error.message))
        }
    }
}

export { getProducts , getProductsStart , getProductsSuccess, getProductsFailure }