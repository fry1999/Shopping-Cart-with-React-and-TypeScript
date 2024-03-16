//Component cho sản phẩm
//Componet cho giỏ hàng

import React from 'react'

interface ProductProps {
    id: number;
    name: string;
    price: number;
    addToCart: (id: number) => void; // Một hàm callback để thêm sản phẩm vào giỏ hàng nhập vào ID của sản phẩm
}

const Product: React.FC<ProductProps> = ({ id, name, price, addToCart }) => {
    return (
        <div>
            <h3>{ name} </h3>
            <p>Price: ${price}</p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
        </div>
    )
}

export default Product;