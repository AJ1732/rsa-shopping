import React, { useState, useEffect } from 'react'

import Categories from '../pages/Categories'
import Items from '../pages/Items'

const Main = () => {
  const [ products, setProducts ] = useState([])
  const [ categoryProducts, setCategoryProducts ] = useState([])

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

  useEffect(() => {
    fetchData()
  }, []);

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

  useEffect(() => {
    callback()
  }, []);

  return (
    <main>
      <Categories 
        handleCallback={callback} />
      <Items 
        products={products} 
        categoryProducts={categoryProducts} />
    </main>
  )
}

export default Main