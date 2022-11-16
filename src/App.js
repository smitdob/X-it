import React from 'react'
import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import About from './Component/About'
import Carts from './Component/Carts'
import Contact from './Component/Contact'
import Errorpage from './Component/Errorpage'
import Home from './Component/Home'
import Header from './Component/MainComponent/Header'
import Products from './Component/Products'
import SingeProduct from './Component/SingeProduct'
const App = () => {
  return (
      <>
      <BrowserRouter>
        <Header/>
        <Routes>
          {/* <Route exact path='/' element={<Navigate to='/home'/>}/>  */}
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/products' element={<Products/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/singleproduct/:id' element={<SingeProduct/>}/>
          <Route path='/cart' element={<Carts/>}/>
          <Route exact path='*' element={<Errorpage/>}/>
        </Routes>
      </BrowserRouter>
      </>
    )
  }

export default App