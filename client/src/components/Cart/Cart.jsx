import React from 'react'
import './Cart.scss'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

const Cart = () => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve graphic T-Shirt",
            desc: "Hello",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Hello",
            title: "Long Sleeve graphic T-Shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,
        }
    ]
  return (
    <div className="cart">
        <h1>Products in cart</h1>
        {data?.map((item)=>(
            <div className="item" key={item.id}>
                <img src={item.img} alt="" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className="price">1 x €{item.price}</div>
                </div>
                <DeleteOutlinedIcon className="delete" />
            </div>
        ))}
        <div className="total">
            <span>Subtotal</span>
            <span>€123</span>
        </div>
        <div className='buttons'>
            <button className='checkout'>PROCEED TO CHECKOUT</button>
            <button className='reset'>RESET</button>
        </div>
        
    </div>
  )
}

export default Cart