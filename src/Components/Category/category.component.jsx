import './category.style.scss'

const Category = ({category}) => {

    const {id,item,imageUrl} = category
    
    return(
        <div className="category-container" id={`item${id}`}
            style={{
                backgroundImage : `url(${imageUrl})`
            }}
        >
            <div className="category-box">
                <h3>{item}</h3>
                <p>Shop Now</p>
            </div>
        </div>
    )   
}

export default Category