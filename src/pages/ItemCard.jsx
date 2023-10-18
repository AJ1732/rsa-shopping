import React from 'react'

const ItemCard = ({ product }) => {
  const { title, price, thumbnail } = product

  return (
    <div className='w-full'>
      <div className='bg-white-grey w-full rounded-sm | flex flex-col justify-start items-center'>      
        <img 
          className='w-full h-64 object-cover'
          src={thumbnail} 
          alt="item image" 
        />

        <div className='w-full h-28 p-4 max-w-xs | flex flex-col justify-between items-center | text-center'>
          <h2>{title}</h2>

          <p className='text-xs text-ft-black'>
            $ <span className='font-bold text-ft-black text-2xl'>{price}</span>
          </p>
        </div>

      </div>

      <button className='w-full bg-grey p-2.5 text-white text-center justify-self-end'>Add to Cart</button>
    </div>
  )
}

export default ItemCard