import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  return (
    <>
      <div className='nav-back'>
        <div className='Admin'>
          <ol>
            <li>Home</li>
            <Link to='/'> <li>Log out</li></Link>
          </ol>
        </div>
      </div>


    


    </>
  )
}
