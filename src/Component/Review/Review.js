import React from 'react'
import './Review.css'
import Carousel from 'react-bootstrap/Carousel';
import item1 from '../../Assets/item1.jpg'
import item2 from '../../Assets/item2.jpg'
import item3 from '../../Assets/item3.jpg'


const Review = () => {
  return (
    <div className="Review" id='review'>
        <h2>Testimonials</h2>
        <div className="container">
    <Carousel>
      <Carousel.Item>
        <img
          src={item1}
        />
        <Carousel.Caption>
          <p>"This restaurant offers a wide selection of international cuisine, including sushi, seafood, and grilled meat. The service is excellent and the decor is modern and stylish."</p>
          <h3>Simab Dave</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={item2}
        />

        <Carousel.Caption>
          <p>"Known for its unique fusion of flavors, this restaurant serves dishes that combine traditional and contemporary cooking techniques. The presentation of the food is beautiful and the service is attentive and friendly."</p>
          <h3>Johnthan Doe</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         src={item3}
        />

        <Carousel.Caption>
          <p>
          "This restaurant is a hidden gem that offers delicious and authentic dishes made with fresh, local ingredients. The atmosphere is cozy and intimate, and the staff is knowledgeable and passionate about the cuisine they serve."
          </p>
          <h3>Sara</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  )
}

export default Review
