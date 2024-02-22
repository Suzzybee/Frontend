import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='d-flex align-items-center justify-content-between'>
      <h1>LOGO</h1>
      <div className='d-flex align-items-center justify-content-between'>
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p>Service</p>
      </div>
      <div>
      <Link to='/sign up'>
        <button className='btn btn-primary'>Sign up</button>
        </Link>
        <Link to='/sign up'>
        <button className='btn btn-secondary'>Login</button>
        </Link>
       
      </div>
    </div>
  )
}

export default Navbar