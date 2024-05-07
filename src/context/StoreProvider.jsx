import { createContext, useContext, useEffect, useState } from "react";

// CREATE CONTEXT
export const StoreContext = createContext(undefined);

// PROVIDE CONTEXT
export const StoreProvider = ({ children }) => {
  const [ products, setProducts ] = useState([])
  const [ categoryProducts, setCategoryProducts ] = useState([])

  // FETCH STORE PRODUCTS
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products`);
        const jsonData = await response.json();
        setProducts(jsonData.products);
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    };
    fetchData()
  }, []);

  // FETCH CATEGORIZED PRODUCTS
  const fetchCategoryData = async (childData) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/category/${childData}`);
      const jsonData = await response.json();
      setCategoryProducts(jsonData.products);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    } 
  };

  const callback = (childData) => {
    fetchCategoryData(childData)
  }
 
  const value = {
    products,
    categoryProducts,
    callback,

  }

  return (
    <StoreContext.Provider value={ value }>
      {children}
    </StoreContext.Provider>
  )
}

// CUSTOM CONTEXT HOOK
export const useStoreContext = () => useContext(StoreContext);