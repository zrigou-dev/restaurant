import React from 'react'
import './Product.css'

const Product = ({food}) => {
  return (
    <div className='col-md-4 one-food'>
       <img src={food.img} alt={food.title} />
       <h3>{food.title}</h3>
       <p>Time: {food.time} Minutes | Serves: 1 </p>
       <h2>${food.price} <span>{food.disc}</span></h2>
       <button className='button'>Order Now</button>
    </div>
  )
}

export default Product
