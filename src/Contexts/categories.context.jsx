import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase.utils";


export const CategoriesContext = createContext();

export const CategoriesProvider = ({children}) => {


    useEffect(() => {
        const getCategoryMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategories(categoryMap)
        }
    
        getCategoryMap();
        
    },[])

    const [ categories, setCategories ] = useState({});

    return <CategoriesContext.Provider value={categories}>{children}</CategoriesContext.Provider>

}