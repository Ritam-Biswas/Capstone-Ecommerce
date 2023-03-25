import "./checkout.style.scss";
import { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context";
import CheckoutItem from "../../Components/Checkout-item/checkoutItem.component";

const Checkout = () => {
    const { cartItems, totalPrice } = useContext(CartContext);

    return(
        <div className="checkout-container">
            <div className="checkout-headers">
                <h3>Product</h3>
                <h3>Description</h3>
                <h3>Quantity</h3>
                <h3>Price</h3>
                <h3>Remove</h3>
            </div>
            <hr />
            {
                cartItems.map((cartItem)=> <CheckoutItem cartItem={cartItem}/>)
            }
            <span>Total : {totalPrice}</span>
        </div>
    )
}

export default Checkout;