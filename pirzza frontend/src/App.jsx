import './App.css'
import Home from './Pages/Home'
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import SignUp from './Pages/Auth/SignUp/'
import Login from './Pages/Auth/Login'
import NotFound from './Pages/pageNotFound'
import Denied from './Pages/Denied'
import AddProduct from './Pages/Admin/AddProduct'
function App() {

  return (
    < >
      <Routes>
<Route path='/auth/denied' element={<Denied/>}/>
<Route path='/' element={<Home/>}/>
<Route path='/auth/signup' element={<SignUp/>}/>
<Route path='/auth/login' element={<Login/>}/>
<Route path='/admin/addproduct' element={<AddProduct/>}/>
<Route path='*' element={<NotFound/>}/>

      </Routes>
    </>
  )
}

export default App
