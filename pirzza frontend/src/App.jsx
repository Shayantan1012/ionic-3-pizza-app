import './App.css'
import Layout from './Layout/layout'
import Home from './Pages/Home'
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import SignUp from './Pages/Auth/SignUP'
import Login from './Pages/Auth/Login'
import NotFound from './Pages/pageNotFound'
function App() {

  return (
    < >
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/auth/signup' element={<SignUp/>}/>
<Route path='/auth/login' element={<Login/>}/>
<Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
