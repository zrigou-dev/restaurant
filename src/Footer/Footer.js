import React from 'react'
import './Footer.css'
import { FaFacebookSquare , FaInstagramSquare , FaLinkedin , FaYoutube} from "react-icons/fa";


const Footer = () => {
  return (
    <div className='Footer'>
        <div className="container">
          <ul className='Link'>
            <li><a href="#">Register</a></li>
            <li><a href="#">Forum</a></li>
            <li><a href="#">Affiliate</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
          <ul className='social'>
            <li><a href="#"><FaFacebookSquare/></a></li>
            <li><a href="#"><FaInstagramSquare/></a></li>
            <li><a href="#"><FaLinkedin/></a></li>
            <li><a href="#"><FaYoutube/></a></li>
          </ul>
        </div>

    </div>
  )
}

export default Footer
