import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
function NavBar() {
  return (
    <div className='container'>
      <h1 className='site'><Link to='/'>Interview Task</Link></h1>
      <ul className='menu'>
        <li><Link to='/users'>Users</Link></li>
        <li><Link to='/addUser'>Add User</Link></li>
      </ul>
    </div>
  )
}

export default NavBar