import { useContext , useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "../../Components/Product-Card/productCard.component"
import { CategoriesContext } from "../../Contexts/categories.context"
import './category.style.scss';


const Category = () => {
    const {category} = useParams()
    
    const  categories  = useContext(CategoriesContext)
    const [products, setProducts ] = useState(categories[category])

    useEffect(()=>{
        setProducts(categories[category])
    },[category,categories])

    return(
        <div className="category-page-container">
            <h2>{category}</h2>
            <div className="products-container">
                {
                    products && products.map((product)=>{
                        return <ProductCard category={product} key={product.id}/>
                    })
                }
            </div>       
        </div>
    )
    
}

export default Category