//Componet cho giỏ hàng

import React from 'react'

interface CartProps {
    cartItems: {id: number; name: string; price: number}[];
}

const Cart: React.FC<CartProps> = ({ cartItems }) => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <li key = {item.id}>{item.name} - ${item.price}</li>
                ))}
            </ul>
        </div>
    )
}

export default Cart;