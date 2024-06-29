import React, { useState } from 'react';
import './Cart.css';

const CartItem = ({ item, onQuantityChange }) => {
    const handleChange = (event) => {
        onQuantityChange(item.id, parseInt(event.target.value));
    };

    return (
        <div className="cart-item">
            <div><img src={item.image} alt={item.name} /></div>
            <div>{item.name}</div>
            <div><input type="number" value={item.quantity} min="1" onChange={handleChange} /></div>
            <div>{item.price.toLocaleString()}원</div>
            <div>{(item.price * item.quantity).toLocaleString()}원</div>
        </div>
    );
};

const Cart = () => {
    const [items, setItems] = useState([
        { id: 1, name: '상품 1', image: 'product1.jpg', price: 10000, quantity: 1 },
        { id: 2, name: '상품 2', image: 'product2.jpg', price: 15000, quantity: 2 },
    ]);

    const handleQuantityChange = (id, quantity) => {
        setItems(items.map(item => item.id === id ? { ...item, quantity } : item));
    };

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <div className="cart-header">
                <div>상품 이미지</div>
                <div>상품 이름</div>
                <div>수량</div>
                <div>가격</div>
                <div>총 가격</div>
            </div>
            {items.map(item => (
                <CartItem key={item.id} item={item} onQuantityChange={handleQuantityChange} />
            ))}
            <div className="cart-total">
                총 합계: {total.toLocaleString()}원
            </div>
            <div className="cart-actions">
                <button>계속 쇼핑하기</button>
                <button>결제하기</button>
            </div>
        </div>
    );
};

export default Cart;
