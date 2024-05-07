import { useState } from "react";
import { TbShoppingCart } from "react-icons/tb";

const CartButton = () => {
  const [ isOpen , setIsOpen] = useState(false);
  console.log(isOpen);

  return (
    <button 
      onClick={ () => setIsOpen(!isOpen) } 
      className='fixed right-0 top-9 | bg-ft-grey size-12 | text-white text-2xl rounded-l-sm'
    >
      <TbShoppingCart className='mx-auto' />
    </button>
  )
}

export default CartButton