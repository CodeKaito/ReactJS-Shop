import React from 'react'
import './FeaturedProducts.scss';
import Card from '../Card/Card';

const FeaturedProducts = ({type}) => {
    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve graphic T-Shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve graphic T-Shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve graphic T-Shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ]
  return (
    <div className="featuredProducts">
        <div className="top">
            <h1>{type} products</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci eos distinctio perspiciatis, neque maxime tempore vero pariatur dolor vitae commodi dolore soluta velit aliquid debitis nisi. Facilis error debitis reiciendis.
            </p>
        </div>
        <div className="bottom">
            {data.map(item=>(
                <Card item={item} key={item.id} />
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts