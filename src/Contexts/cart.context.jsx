import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
    const cartItemExists = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if(cartItemExists){
        return cartItems.map((cartItem)=>
            cartItem.id === productToAdd.id ? 
            {...cartItem, quantity : cartItem.quantity + 1}
            : 
            cartItem
        )
    }

    return [...cartItems, {...productToAdd, quantity : 1}]
}

const removeCartItem = (cartItems, productToRemove) => {
    const itemToRemove = cartItems.find((cartItem) => cartItem.id === productToRemove.id)

    if(itemToRemove.quantity===1)
        return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id )

    return cartItems.map((cartItem)=>
        cartItem.id === itemToRemove.id ?
        { ...cartItem, quantity : cartItem.quantity - 1} 
        : cartItem
    )
}

const clearCartItem = (cartItems, productToClear) => {
    return cartItems.filter((cartItem)=>cartItem.id!==productToClear.id);
}

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [ isCartOpen, setIsCartOpen ] = useState(false);
    const [ cartItems, setCartItems ] = useState([]);
    const [ cartCount, setCartCount ] = useState(0);
    const [ totalPrice, setTotalPrice] = useState(0);

    useEffect(()=>{
        const cartItemCount = cartItems.reduce((total, cartItem)=>{
            return total = total + cartItem.quantity;
        },0)
        setCartCount(cartItemCount);
    },[cartItems])

    useEffect(()=>{
        const totalAmount = cartItems.reduce((total,cartItem)=>
            total = total + cartItem.price * cartItem.quantity
        ,0)
        setTotalPrice(totalAmount)
    },[cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems,productToClear))
    }

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount, removeItemFromCart, clearItemFromCart, totalPrice};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}


