import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './componets/Product';
import Cart from './componets/Cart';

// 

const App: React.FC = () => {
  //Khởi tạo state cartItems với useState hook, mặc định là một mảng rỗng
  const [cartItems, setCartItems] = useState<{ id: number; name: string; price: number}[]>([])

  const addToCart = (id: number) => {
    //Lấy chi tiết sản phảm tư API dựa trên id và thêm vào giỏ hàng
    // Đây là một đoạn mã giả dành cho cuộc gọi API thực tế
    //Để đơn giản, chúng ta sẽ chỉ sử dụng dữ liệu cố định ở đây 
    const product = {id, name: `Product ${id}`, price: Math.floor(Math.random() * 100) + 1};
    setCartItems([...cartItems, product]); 

  };
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        {/* tạo 1 mảng Array có độ dài bằng 3, 
        _: ko quan tâm đến phần từ
        có chỉ số index là index 
        Hàm callback được gọi và trả về component Product sau mỗi lần gọi */}
        {Array.from({ length: 3}, (_, index) => (
          <Product key={index} id= {index} name = {`Product ${index}`} price= {Math.floor(Math.random()* 100) + 1} addToCart={addToCart} />
        ))}
      </div>
      <Cart cartItems = {cartItems} />
    </div>
  )
}

export default App;
