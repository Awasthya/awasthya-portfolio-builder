import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './Navbar.css'
import logo from './Logo3.png';
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg nav" >
      <a class="navbar-brand " href="#">
        <img src= {logo} className="logo" alt="Logo"/>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ml-auto  " id="navbarSupportedContent">
        <ul class="navbar-nav leftContent">
          <li class="nav-item">
            <b><a class="nav-link active" aria-current="page" href="/">Home</a></b>
          </li>
          <li class="nav-item">
            <b><a class="nav-link link" href="/MyInfo">MyInfo</a></b>
          </li>
          <li class="nav-item">
            <b><a class="nav-link link" href="/about">About</a></b>
          </li>
          <li class="nav-item">
            <b><a class="nav-link link" href="/contact">Contact</a></b>
          </li>
          <li class="nav-item">
            <b><a class="nav-link link" href="/signin">Login</a></b>
          </li>
          <li class="nav-item">
            <b><a class="nav-link link" href="/signup">Register</a></b>
            
          </li>
         
        </ul>
   
      </div>
  </nav>
    
   
  )
}

export default Navbar
