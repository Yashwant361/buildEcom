import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminProducts from './components/Admin/AdminProducts'
import Products from './components/Products'
import Orders from './components/Admin/Orders'
import Dashboard from './components/Admin/Dashboard'
import Payments from './components/Admin/Payments'
import Settings from './components/Admin/Settings'
import Customers from './components/Admin/Customers'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Category from './components/Category'
import Contact from './components/Contact'
import Login from './components/Login'
import Signup from './components/SignupTemp'

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/category' element={<Category />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/admin" >
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<Orders />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="payments" element={<Payments />} />
            <Route path="customers" element={<Customers />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
