import React, { useState, useEffect } from 'react'

const Categories = () => {
  const [ categories, setCategories ] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/categories`);
      const jsonData = await response.json();
      setCategories(jsonData);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  console.log(categories);

  return (
    <div>
      
    </div>
  )
}

export default Categories