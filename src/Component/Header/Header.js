import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header id='home'>
    <div className='container'>
       <div className="row">
        <div className="col-md-6">

        </div>
        <div className="col-md-6">
            <h2>Good food choices are good investments.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
            <div className="btn">
               <button className='button'>Order Now</button>
               <button className='learn-more'>Learn more</button> 
            </div>
            
        </div>
       </div>
    </div>
    </header>
  )
}

export default Header
