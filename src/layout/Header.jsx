import CartButton from '../components/Cart/CartButton'

const Header = () => {
  return (
    <header className='relative'>
      <h1 className='font-extrabold font-poppins text-4xl text-center py-10'>Rsa Stores</h1>

      <CartButton />
    </header>
  )
}

export default Header