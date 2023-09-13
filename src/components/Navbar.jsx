import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/contact'>Contact</a></li>
            <li><a href='/product'>Product</a></li>
        </ul>
    </div>
  )
}

export default Navbar