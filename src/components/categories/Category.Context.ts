import { createContext } from 'react';

const Category = {
    Categories : [],
    setCategories:(Categories:any) => [],
}

const CategoryContext = createContext(Category);

export default CategoryContext;