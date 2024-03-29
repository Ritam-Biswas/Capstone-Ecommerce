import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../Categories-preview/categoriesPreview";
import Category from "../Category/category.component";

const Shop = () => {

    return(
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    )
}

export default Shop;