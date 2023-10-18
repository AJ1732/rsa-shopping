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
    <section className='px-4 py-10 | grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center'>
      {products.map( (product) => (
        <ItemCard key={product.id} product={product} />
      )) }
    </section>
  )
}

export default Items