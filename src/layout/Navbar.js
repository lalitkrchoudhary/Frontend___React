import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

<nav className="navbar navbar-expand-lg bg-blue bg-body-tertiary">
  <div className="container-fluid">
    <Link className='navbar-brand' to="/">FullStack Application</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link to="/add">Add User</Link>
   
  </div>
</nav>

    </div>
  )
}

export default Navbar