import "./cartItems.style.scss";

const CartItem = ({cartItem}) => {
    const { id, name, quantity, imageUrl, price } = cartItem;

    return(
        <div className="cart-item-container" id={id}>
            <div className="cart-image-container" style={{backgroundImage : `url(${imageUrl})`}}>
            </div>
            <div className="cart-item-label">
                <h4>{name}</h4>
                <span>{quantity} &#215; {`$${price}`}</span>
            </div>
        </div>
    )
}

export default CartItem;