import React, { useEffect, useState } from 'react'
import ItemCard from './ItemCard';

const Items = () => {
  const [ products, setProducts ] = useState([])

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

  return (
    <section className='w-full px-4 | grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center'>
      {products.map( (product) => (
        <ItemCard key={product.id} product={product} />
      )) }
    </section>
  )
}

export default Items