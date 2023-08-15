// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { BsFillCartFill } from "react-icons/bs";
import './CartWidget.css'

export const CartWidget = () => {
    // eslint-disable-next-line no-unused-vars
    const [cartCount, setCartCount] = useState(0)
    return (
        <div className='CardWidget-container'>
            <BsFillCartFill className='justify-content-end' style={{ color: 'orange' }} size={30} />
            <span className='cartCount-value'>{cartCount}</span>
        </div>
    );
}
