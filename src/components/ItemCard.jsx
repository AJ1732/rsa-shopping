import React from 'react'

const ItemCard = ({ product }) => {
  const { title, price, thumbnail } = product

  return (
    <div className='bg-white-grey max-w-xs h-full p-7 rounded-sm | flex flex-col '>      
      <img 
        className='w-64 h-72 object-cover'
        src={thumbnail} 
        alt="item image" 
      />

      <h2>{title}</h2>

      <p>
        $ <span>{price}</span>
      </p>

      <button className='w-full text-center bg-grey p-3 text-white self-end'>Add to Cart</button>
    </div>
  )
}

export default ItemCard