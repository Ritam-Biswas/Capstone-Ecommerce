import ProductCard from '../Product-Card/productCard.component';
import './categoryPreview.style.scss';


const CategoryPreview = ({category,title}) => {

    return(
        <div className='category-preview-container'>
            <h2>
                <span>{title.toUpperCase()}</span>
            </h2>
            <div className="preview">
                {
                    category
                    .filter((_,idx) => idx < 4)
                    .map((item)=>(
                        <ProductCard key={item.id} category={item}/>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryPreview;