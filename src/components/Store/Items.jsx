import React, { useState } from 'react'
import StoreItem from './StoreItem';

const Items = ({ products, categoryProducts, loading }) => {
  const itemsElement = products.map((product) => {
    return  <StoreItem key={product.id} product={product} />
  })
  const categoryItemsElement = categoryProducts.map((categoryProduct) => {
    return  <StoreItem key={categoryProduct.id} product={categoryProduct} />
  })

  return (
    <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center'>
      { 
        categoryProducts.length > 0 ?
        categoryItemsElement:
        itemsElement
      }
      {/* { categoryItemsElement } */}
    </section>
  )
}

export default Items