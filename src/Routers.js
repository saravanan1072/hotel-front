import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Admin from './Pages/Admin/Admin'
import Owner from './Pages/Owner/Owner'
import User from './Pages/User/User'
import Alogin from './Pages/Admin/Alogin'
import Register from './Pages/Owner/Register'
import Login from './Pages/Owner/Login'
import Request from './Pages/Admin/Request'
import Adowner from './Pages/Admin/Adowner'
import Ulogin from './Pages/User/Ulogin'
import Uregister from './Pages/User/Uregister'
import Book from './Pages/User/Book'

export default function Routers() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/owner' element={<Owner/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/Alogin' element={<Alogin/>}/>
        <Route path='/admin/owner' element={<Adowner/>}/>
        <Route path='/Oregister' element={<Register/>}/>
        <Route path='/Ologin' element={<Login/>}/>
        <Route path='/admin/request' element={<Request/>}/>

        <Route path='/Ulogin' element={<Ulogin/>}/>

        <Route path='/Uregister' element={<Uregister/>}/>
        <Route path='/user/book' element={<Book/>}/>







        


  

    </Routes>
    </BrowserRouter>
    </>
  )
}
