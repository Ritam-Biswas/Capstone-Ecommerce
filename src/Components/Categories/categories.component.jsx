import Category from "../Category/category.component"
import './categories.style.scss'

const Categories = ({categories}) => {
    return(
        <div className="categories">
            {
                categories.map((category)=>{
                    return <Category key={category.id} category={category}/>
                })
            }
        </div>
    )
}

export default Categories