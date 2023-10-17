import React from 'react'

const Header = () => {
  return (
    <header className='relative px-4 flex flex-col justify-between'>
      <h1 className='font-poppins text-4xl font-extrabold m-auto py-10'>Rsa Stores</h1>

      <nav className='bg-white-grey'>
        Navlist
      </nav>

      <div className='fixed right-0 top-10 | w-10 h-10 | bg-ft-grey text-white text-center rounded-l-sm | '>
        Cart
      </div>
    </header>
  )
}

export default Header