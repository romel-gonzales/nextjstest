import {createContext, useReducer} from 'react'
import Cookies from 'js-cookie'

export const Store = createContext()

const initialState = {
    cart: {
        cartItems: Cookies.get('cartItems') ? JSON.parse(Cookies.get('cartItems')) : []
    }
}

function reducer(state, action){
    switch(action.type){
        case 'CART_ADD_ITEM': {
            const product = action.payload
            const cartItems = [...state.cart.cartItems, product]
            Cookies.set('cartItems', JSON.stringify(cartItems))
            return {
                ...state, cart: {...state.cart, cartItems}
            }
        }
        default:
            return state
    }
}

export function StoreProvider(props){
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = {state, dispatch}
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}
