import './App.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  // https://dummyjson.com/docs/products

  // How to test for dummy api
  // https://dummyjson.com/docs

  return (
    <div className='font-josefinSans flex flex-col gap-4'>
      <Header />
      <Main />
    </div>
  )
}

export default App
