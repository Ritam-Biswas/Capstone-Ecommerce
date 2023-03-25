import { useNavigate } from "react-router-dom";
import Button from "../Button/button.component";
import CartItem from "../Cart-items/cartItem.component";
import { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context";
import "./cartDropdown.style.scss";


const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const checkoutHandler = () => {
        navigate("/checkout");
    }

    return(
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {
                    cartItems.map((cartItem) => <CartItem cartItem={cartItem} key={cartItem.id}/>)
                }                
            </div>
            <div className="button-container">
                <Button buttonType="inverted" onClick={checkoutHandler}>GO TO CHECKOUT</Button>
            </div>
        </div>
    )
}

export default CartDropdown;