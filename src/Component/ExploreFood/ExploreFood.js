import React from 'react'
import './ExploreFood.css'
import food1 from '../../Assets/01.jpg'
import food2 from '../../Assets/02.jpg'
import food3 from '../../Assets/03.jpg'
import Product from '../Product/Product'


const products =[
    {
        img: food1,
        title:'Rainbow Vegetable Sandwich',
        time:'15 - 20',
        price:'10.50 ',
        disc:'11.70',
    },
    {
        img: food2,
        title:'Vegetarian Burger',
        time:'30 - 45',
        price:'9.20 ',
        disc:'10.50',
    },
    {
        img: food3,
        title:'Raspberry Stuffed French Toast',
        time:'10 - 15',
        price:'12.50 ',
        disc:'13.20',
    }
]

const ExploreFood = () => {
  return (
    <>
      <div className="content-explore" id='explor'>
        <div className="container">
           <h2>Explore Our Foods</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
        </div>
      </div>
      <div className="product container">
        <div className="row">
        {products.map((el)=>{
            return <Product food={el}/>
        })}
        </div>
      </div>
    </>
  )
}

export default ExploreFood
