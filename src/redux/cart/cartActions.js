const addItem = productData => {
    return {
        type: "ADD_ITEM",
        payload: { productData }
    }
}

const removeItem = productData => {
    return {
        type: "REMOVE_ITEM",
        payload: { productData }
    }
}

const increase = productData => {
    return {
        type: "INCREASE",
        payload: { productData }
    }
}

const decrease = productData => {
    return {
        type: "DECREASE",
        payload: { productData }
    }
}

const checkOut = () => {
    return {
        type: "CHECKOUT"
    }
}

const clear = () => {
    return {
        type: "CLEAR"
    }
}

const getLocalStorage = () => {
    return {type: "GET_LOCALSTORAGE"}
}

export { addItem , removeItem }
export { increase , decrease } 
export { checkOut , clear }
export { getLocalStorage }