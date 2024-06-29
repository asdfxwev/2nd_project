import React, { useState, useEffect } from 'react';
import './Cart.css';

const CartItem = ({ item, onQuantityChange, onCheckboxChange, isChecked }) => {
    const handleChange = (event) => {
        onQuantityChange(item.id, parseInt(event.target.value));
    };

    return (
        <div className="cart-item">
            <div><input type="checkbox" checked={isChecked} onChange={() => onCheckboxChange(item.id)} /></div>
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
    const [checkedItems, setCheckedItems] = useState([]);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedItems);
        setCheckedItems(storedItems.map(item => item.id));
    }, []);

    const handleQuantityChange = (id, quantity) => {
        const updatedItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity } : item
        );
        setCartItems(updatedItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };

    const handleCheckboxChange = (id) => {
        setCheckedItems(prevCheckedItems =>
            prevCheckedItems.includes(id)
                ? prevCheckedItems.filter(itemId => itemId !== id)
                : [...prevCheckedItems, id]
        );
    };

    const handleRemoveCheckedItems = () => {
        const updatedItems = cartItems.filter(item => !checkedItems.includes(item.id));
        setCartItems(updatedItems);
        setCheckedItems([]);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };

    const handleRemoveAllItems = () => {
        setCartItems([]);
        setCheckedItems([]);
        localStorage.removeItem('cartItems');
    };

    const total = cartItems
        .filter(item => checkedItems.includes(item.id))
        .reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h1 className='h1-name'>장바구니</h1>
            <div className="cart-container">
                <div className="cart-header">
                    <div>선택</div>
                    <div>상품 이미지</div>
                    <div>상품 이름</div>
                    <div>수량</div>
                    <div>가격</div>
                    <div>총 가격</div>
                </div>
                {cartItems.map(item => (
                    <CartItem 
                        key={item.id} 
                        item={item} 
                        onQuantityChange={handleQuantityChange} 
                        onCheckboxChange={handleCheckboxChange} 
                        isChecked={checkedItems.includes(item.id)} 
                    />
                ))}
                    <button className='button-size' onClick={handleRemoveCheckedItems}>선택한 상품 삭제</button>
                    <button className='button-size' onClick={handleRemoveAllItems}>전체 상품 삭제</button>
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
