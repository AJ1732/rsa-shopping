import React, { useState } from 'react'
import { TbShoppingCart } from "react-icons/tb";

const Header = () => {
  const [ isOpen , setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <header className='relative px-4 flex flex-col justify-between'>
      <h1 className='font-poppins text-4xl font-extrabold m-auto py-10'>Rsa Stores</h1>

      <button 
        onClick={ () => setIsOpen(!isOpen) } 
        className='fixed right-0 top-9 | bg-ft-grey w-12 h-12 | flex justify-center items-center | text-white text-center text-2xl font-extrabold rounded-l-sm | '
      >
        <TbShoppingCart />
      </button>
    </header>
  )
}

export default Header