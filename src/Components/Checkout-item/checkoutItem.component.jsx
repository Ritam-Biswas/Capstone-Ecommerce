import "./checkoutItem.style.scss";
import { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context.jsx" 

const CheckoutItem = ({cartItem}) => {

    const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
    const { imageUrl, name, quantity, price} = cartItem;

    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemFromCart(cartItem)
    const clearItemHandler = () => clearItemFromCart(cartItem)

    return(
        <div className="checkout-item">
            <div className="item-image" style={{backgroundImage : `url(${imageUrl})`}}/>
            <span className="item-name">{name}</span>
            <div className="item-quantity">
                <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
                <span className="quantity">{quantity}</span>
                <div className="arrow" onClick={addItemHandler}>&#10095;</div>
            </div>
            <span className="item-price">${price}</span>
            <span className="item-remove" onClick={clearItemHandler}>&#10005;</span>
        </div>
    )
}

export default CheckoutItem;