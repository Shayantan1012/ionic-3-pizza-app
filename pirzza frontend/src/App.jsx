import './App.css'
import Layout from './Layout/layout'
import Home from './Pages/Home'
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import SignUp from './Pages/Auth/SignUP'
function App() {

  return (
    < >
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/auth/signup' element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default App
