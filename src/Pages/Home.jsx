import React from 'react'
import logo from '../Images/t.jpg'
import {Link} from 'react-router-dom'
export default function Home() {
  return (
   <div className='header'>
   <div id='header'>
   
    <div>
        <img className='logo' src={logo} alt="logo"/>
    </div>

    <div>
    <ol className='ol'>
        <Link to='/Alogin'><li>Admin</li></Link>
       <Link to='/Oregister'> <li> Owner</li></Link>
       <Link to='/Uregister'> <li>User</li></Link>
    </ol>
    </div>
   
   </div>
   <div className='flexx'>
    <h1 >Welcome to our portal</h1><br/>
   


   </div>
   
   </div>
  )
}
