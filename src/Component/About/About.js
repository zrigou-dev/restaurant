import React from 'react'
import './About.css'
import about from '../../Assets/about.png'
import about2 from '../../Assets/about2.png'
import { MdDone , MdPlayArrow} from "react-icons/md";


const About = () => {
  return (
    <>
    
    <div className='container about' id='about'>
      <div className="row">
        <div className="col-md-6">
            <img src={about} alt="about image" />
        </div>
        <div className="col-md-6">
            <h2>We pride ourselves on making real food from the best ingredients.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
            <button className='button'>Learn More</button>
        </div>
      </div>
    </div>
    <div className="container about about2">
      <div className="row">
        <div className="col-md-6">
            <h2>We make everything by hand with the best possible ingredients.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <ul>
                <li><MdDone className="icon-done"/>  Etiam sed dolor ac diam volutpat.</li>
                <li><MdDone className="icon-done"/>  Erat volutpat aliquet imperdiet.</li>
                <li><MdDone className="icon-done"/>  purus a odio finibus bibendum.</li>
            </ul>
            <button className='button'>Learn Morn</button>
        </div>
        <div className="col-md-6">
            <img src={about2} alt="" />
        </div>
        </div>
    </div>
    <div className="watch-story">
      <div className="container">
        <h2>When a man's stomach is full it makes no difference whether he is rich or poor.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
        <a href="https://www.youtube.com/watch?v=tGFp1wJrjuI"><MdPlayArrow className='icon-play'/> Watch Our Story</a>
      </div>
    </div>
    </>
  )
}

export default About
