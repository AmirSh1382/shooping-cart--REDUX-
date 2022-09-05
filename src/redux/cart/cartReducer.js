// Functions
import { sumItems , setCartToLocalStorage , getCartFromLocalStorage } from '../../helper/fucntions';

const initialState = {
    selectedItems : [],
    itemsCounter : 0,
    total: 0,
    checkout: false
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_ITEM":
            if(!state.selectedItems.find(item => item.id === action.payload.productData.id)){
                state.selectedItems.push({
                    ...action.payload.productData,
                    quantity: 1
                })                
            }
            return {
                ...setCartToLocalStorage({               
                    ...state,
                    selectedItems: [...state.selectedItems],
                    ...sumItems(state.selectedItems),
                    checkout: false
                })
            }

        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.productData.id);
            return{
                ...setCartToLocalStorage({
                    ...state,
                    selectedItems: [...newSelectedItems],
                    ...sumItems(newSelectedItems)
                })
            }   

        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.productData.id)
            state.selectedItems[indexI].quantity++
            return{
                ...setCartToLocalStorage({
                    ...state,
                    ...sumItems(state.selectedItems)
                })
            }
        
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.productData.id)
            state.selectedItems[indexD].quantity--
            return{
                ...setCartToLocalStorage({
                    ...state,
                    ...sumItems(state.selectedItems)
                })
            }

        case "CHECKOUT":
            return{
                ...setCartToLocalStorage({
                    selectedItems : [],
                    itemsCounter : 0,
                    total: 0,
                    checkout: true
                })
            }

        case "CLEAR":
            return{
                ...setCartToLocalStorage({
                    selectedItems : [],
                    itemsCounter : 0,
                    total: 0,
                    checkout: false
                })
            }

        case "GET_LOCALSTORAGE":
            return{
                ...getCartFromLocalStorage()
            }

        default:
            return state
    }
}

export default cartReducer