import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <div className='nav-back'>
         <div className='Admin'>

      <ol>
 <Link to='/admin'> <li>Home</li></Link>
  <Link to={'/admin/owner'}><li>Owner Deatail</li></Link>
 <Link to='/admin/request'> <li>Request</li></Link>
 <Link to={'/'}> <li>Log out</li></Link>
</ol>
</div>
    </div>
  )
}
