import React from 'react'

function UserNavbar() {
  return (
    <div>
        <div className='navbar'>
        <div className='navbar-left'>
            <h1>Selling</h1><h1 className='navbar-left-h1'><strong>.</strong></h1>
        </div>
        <div className='navbar-right'>
            <li><a href="">Home</a></li>
            <li><a href="">Products</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Special</a></li>
            <li><a href="">Testimonials</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Contact</a></li>
        </div>
        </div>
        
    </div>
  )
}

export default UserNavbar