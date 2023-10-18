import React from 'react'
import { FiShoppingCart } from 'react-icons/fi';
import Categories from '../pages/Categories';

const Header = () => {
  return (
    <header className='relative px-4 flex flex-col justify-between'>
      <h1 className='font-poppins text-4xl font-extrabold m-auto py-10'>Rsa Stores</h1>

      <div className='fixed right-0 top-9 | bg-ft-grey w-12 h-12 | flex justify-center items-center | text-white text-center text-2xl font-extrabold rounded-l-sm | '>
        <FiShoppingCart />
      </div>
    </header>
  )
}

export default Header