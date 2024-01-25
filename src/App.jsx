
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero'
import Slides from './components/slides/Slides';
import Virtual from './components/virtual/Virtual'
import Products from './components/products/Products';
import Clientes from  './components/clientes/Clientes'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Slides />
      <Virtual />
      <Products />
      <Clientes />
      <Footer />
    </div>
  )
}

export default App
