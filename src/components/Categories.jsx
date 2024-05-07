import React, { useState, useEffect } from 'react'

const Categories = ({ handleCallback }) => {
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

  const toCapitalize = (word) => {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`
  }

  const categoriesElement = categories.map((category) => {
    const index = categories.indexOf(category)
    return  <button 
              key={index} 
              onClick={() => handleCallback(category)}
              className='bg-white-grey py-2 px-4 rounded-3xl | text-xs | cursor-pointer border border-white-grey hover:border-black'
            >
              {toCapitalize(category)}
            </button>
  })

  return (
    <div className='p-3 | flex flex-wrap justify-center items-center gap-4'>
      {categoriesElement}
    </div>
  )
}

export default Categories