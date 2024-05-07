import React, { useState, useEffect } from 'react'
import { useStoreContext } from '../context/StoreProvider';

const Categories = () => {
  const [ categories, setCategories ] = useState([])
  const { callback } = useStoreContext();

  const fetchCategories = async () => {
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
    fetchCategories()
  }, []);

  return (
    <div className='p-3 | flex flex-wrap justify-center items-center gap-4'>
      {categories.map(category => (
        <button key={category} onClick={() => callback(category)} 
          className='bg-white-grey py-2 px-4 rounded-3xl | text-xs capitalize | cursor-pointer border border-white-grey hover:border-black'>
          {category}
        </button>
      ))}
    </div>
  )
}

export default Categories