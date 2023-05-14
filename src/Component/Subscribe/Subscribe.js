import React from 'react'
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div className='Subscribe'>
       <h2>Hurry up! Subscribe our newsletter and get 25% Off</h2>
       <p>Limited time offer for this month. No credit card required.</p>
       <div className="container">
        <form type='submit'>
            <div className="row">
                <div className="col-md-6"><input type="email" placeholder="Email Address here" /></div>
                <div className="col-md-6"><button className='button' type='submit'>Subscribe </button></div>
            </div>  
        </form>
       </div>
    </div>
  )
}

export default Subscribe
