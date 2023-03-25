import { useNavigate } from 'react-router-dom'
import './category.style.scss'

const Category = ({category}) => {

    const {id, item, imageUrl, route} = category;
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate(route);
    }
    
    return(
        <div className="category-container" id={`item${id}`}
            style={{
                backgroundImage : `url(${imageUrl})`
            }}
            onClick={navigateHandler}
        >
            <div className="category-box">
                <h3>{item}</h3>
                <p>Shop Now</p>
            </div>
        </div>
    )   
}

export default Category