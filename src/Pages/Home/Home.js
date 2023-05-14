import React from 'react'
import './Home.css'
import Header from '../../Component/Header/Header'
import About from '../../Component/About/About'
import ExploreFood from '../../Component/ExploreFood/ExploreFood'
import Review from '../../Component/Review/Review'
import Faq from '../../Component/Faq/Faq'
import Section from '../../Component/Section/Section'
import Subscribe from '../../Component/Subscribe/Subscribe'
import Footer from '../../Footer/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <section>
      <div className="row">
        <div className="col-md-3">
            <h2>1287+</h2>
            <h4>SAVINGS</h4>
        </div>
        <div className="col-md-3">
           <h2>5786+</h2>
           <h4>PHOTOS</h4>
        </div>
        <div className="col-md-3">
           <h2>1440+</h2>
           <h4>ROCKETS</h4>
        </div>
        <div className="col-md-3">
           <h2>7110+</h2>
           <h4>GLOBES</h4>
        </div>
      </div>
      </section>
      <About/>
      <ExploreFood/>
      <Review/>
      <Faq/>
      <Section/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default Home
