import { ReactComponent as ShoppinBag } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context";
import "./cartIcon.style.scss";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toggleCart = () => setIsCartOpen(!isCartOpen)

    return(
        <div className="cart-icon-container" onClick={toggleCart}>
            <ShoppinBag className="cart-icon"/>
            <span className="item-count">{cartCount}</span>
        </div>
    )
}

export default CartIcon;