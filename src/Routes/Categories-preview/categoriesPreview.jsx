import { useContext } from "react";
import CategoryPreview from "../../Components/Category-preview/categoryPreview.component";
import { CategoriesContext } from "../../Contexts/categories.context";

import "./categoriesPreview.styles.scss"

const CategoriesPreview = () => {

    const  categories  = useContext(CategoriesContext);

    return(
        <>
            {
                Object.keys(categories).map((title)=>{
                    const products = categories[title]
                    return <>
                            {
                                <CategoryPreview key={title} title={title} category={products}/>
                            }
                    </>
                })
            }
        </>
    )
}

export default CategoriesPreview;