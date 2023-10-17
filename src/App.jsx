import './App.css'
import Header from './components/Header'
import Items from './components/Items'

function App() {
  // https://dummyjson.com/docs/products

  // How to test for dummy api
  // https://dummyjson.com/docs

  return (
    <div className='font-josefinSans flex flex-col gap-4'>
      <Header />
      <Items />
    </div>
  )
}

export default App
