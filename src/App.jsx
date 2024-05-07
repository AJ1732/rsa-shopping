import './App.css'
import ErrorBoundary from './pages/Error/ErrorBoundary.jsx'
import ErrorPage from './pages/Error/ErrorPage.jsx'
import Header from './layout/Header'
import Main from './layout/Main'

function App() {
  // https://dummyjson.com/docs/products

  // How to test for dummy api
  // https://dummyjson.com/docs

  return (
    <div className='content-grid | font-josefinSans'>
      <ErrorBoundary fallback={<ErrorPage />}>
        <Header />
        <Main />
      </ErrorBoundary>
    </div>
  )
}

export default App
