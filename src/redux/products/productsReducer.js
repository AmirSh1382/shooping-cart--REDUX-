const initialState = {
    products: [],
    error: "",
    loading: false,
}

const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case "GET_PRODUCTS_START":
            return{
                ...state,
                loading: true
            }

        case "GET_PRODUCTS_SUCCESS":
            return{
                ...state,
                loading:false,
                products: action.payload.products
            }

        case "GET_RPODUCTS_FAILURE":
            return{
                loading:false,
                products: [],
                error: action.payload.error
            }

        default:
            return state
    }
}

export default productsReducer