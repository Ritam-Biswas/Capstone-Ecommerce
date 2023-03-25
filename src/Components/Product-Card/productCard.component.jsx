import "./productCard.styles.scss";
import Button from "../Button/button.component";
import { useContext } from "react";
import { CartContext } from "../../Contexts/cart.context";

const ProductCard = ({category}) => {

    const { name, imageUrl, price} = category;
    const { addItemToCart } = useContext(CartContext);

    const addProducToCart = () => addItemToCart(category)

    return(
        <div className="product-card-container">
            <div className="product-image-container" style={{backgroundImage : `url(${imageUrl})`}}>
                <Button type="button" buttonType="inverted" onClick={addProducToCart}>Add To Cart</Button>
            </div>
            <div className="product-label">
                <p>{name}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default ProductCard;