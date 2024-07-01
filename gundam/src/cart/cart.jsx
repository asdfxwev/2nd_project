import React, { useState, useEffect } from 'react';
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
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('cartItems')) || []; // 기본 값 설정
        setCartItems(storedItems);
    }, []);

    const handleQuantityChange = (id, quantity) => {
        const updatedItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity } : item
        );
        setCartItems(updatedItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h1 className='h1-name'>장바구니</h1>
            <div className="cart-container">
                <div className="cart-header">
                    <div>상품 이미지</div>
                    <div>상품 이름</div>
                    <div>수량</div>
                    <div>가격</div>
                    <div>총 가격</div>
                </div>
                {cartItems.map(item => (
                    <CartItem key={item.id} item={item} onQuantityChange={handleQuantityChange} />
                ))}
                <div className="cart-total">
                    총 합계: {total.toLocaleString()}원
                </div>
                <div className="cart-actions">
                    <button>결제하기</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
