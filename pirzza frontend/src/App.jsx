import './App.css'
import Home from './Pages/Home'
import React, { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import SignUp from './Pages/Auth/SignUp'
import Login from './Pages/Auth/Login'
import NotFound from './Pages/pageNotFound'
import Denied from './Pages/Denied'
import AddProduct from './Pages/Admin/AddProduct'
import ProductDetails from './Pages/Products/productDetails'
import CartDetails from './Pages/Cart/cartDeteails'
import Order from './Pages/Order/Order'
import OrderSuccess from './Pages/Order/OrderSuccess'
import RequireAuth from './Components/Auth/RequireAuth'
import { useSelector } from 'react-redux'
import AllProductDetails from './Pages/AllProducts'
function App() {
const requireRole=useSelector(state=>state.auth)
  return (
    < >
      <Routes>
<Route path='/auth/denied' element={<Denied/>}/>
<Route path='/' element={<Home/>}/>
<Route path='/auth/signup' element={<SignUp/>}/>
<Route path='/auth/login' element={<Login/>}/>
<Route element={<RequireAuth />}>
          <Route path='/order' element={<Order />} />
          <Route path='/order/success' element={<OrderSuccess />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
          <Route path='/cart' element={<CartDetails />} />
          {(requireRole.role === 'ADMIN' )? 
            <Route path='/admin/addproduct' element={<AddProduct />} /> :null
}
        </Route>
        <Route path='/product/allProduct' element={<AllProductDetails/>}/>
        <Route path='*' element={<NotFound/>}/>

      </Routes>
    </>
  )
}

export default App
