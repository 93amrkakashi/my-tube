import React from 'react'
import { Link } from 'react-router-dom'
import { root } from '../../routes'

function Navbar() {
  return (
    <div className='navbar'>
      <Link to={root}><div className="logo">
      <i class="fa-brands fa-youtube"></i>
      <h3> MYTUBE </h3>
      </div></Link>
      
      <div className="search">
        <form >
          <input type="text" placeholder='Search here ....' />
          <button type='submit' >
          <i className="fa-solid fa-magnifying-glass"></i>          </button>
        </form>
      </div>
    </div>
  )
}

export default Navbar