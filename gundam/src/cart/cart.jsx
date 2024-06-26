import React, { useState, useEffect } from 'react';
import './Cart.css';
import axios from 'axios';

const CartItem = ({ item, onQuantityChange, onCheckboxChange, isChecked }) => {
    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1) {
            onQuantityChange(item.id, newQuantity);
        }
    };

    return (
        <div className="cart-item">
            <div><input type="checkbox" checked={isChecked} onChange={() => onCheckboxChange(item.id)} /></div>
            <div><img src={item.image} alt={item.name} /></div>
            <div> {item.name}</div>
            <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(item.quantity - 1)}>-</button>
                <input 
                    type="number" 
                    value={item.quantity} 
                    min="1" 
                    readOnly 
                />
                <button onClick={() => handleQuantityChange(item.quantity + 1)}>+</button>
            </div>
            <div>{item.price.toLocaleString()}원</div>
            <div>{(item.price * item.quantity).toLocaleString()}원</div>
        </div>
    );
};

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [checkedItems, setCheckedItems] = useState([]);

    const existingInquiries = JSON.parse(localStorage.getItem('loginInfo'));
    const userId = existingInquiries.id;


    // const userId = existingInquiries ? existingInquiries.id : null;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
                const userData = userResponse.data;

                setCartItems(userData.cart);
                setCheckedItems(userData.cart.map(item => item.id));
            } catch (error) {
                console.error('데이터를 가져오는 중 오류 발생:', error);
            }
        };
        fetchData();
    }, [userId]);

    const handleQuantityChange = (id, quantity) => {
        const updatedItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity } : item
        );
        setCartItems(updatedItems);
    };

    const handleCheckboxChange = (id) => {
        setCheckedItems(prevCheckedItems =>
            prevCheckedItems.includes(id)
                ? prevCheckedItems.filter(itemId => itemId !== id)
                : [...prevCheckedItems, id]
        );
    };

    const handleRemoveCheckedItems = async () => {
        try {
            const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
            const userData = userResponse.data;

            const updatedItems = userData.cart.filter(item => !checkedItems.includes(item.id));

            await axios.put(`http://localhost:3001/users/${userId}`, { ...userData, cart: updatedItems });

            setCartItems(updatedItems);
            setCheckedItems([]);
        } catch (error) {
            console.error('Error deleting items:', error.response ? error.response.data : error.message);
        }
    };

    const handleRemoveAllItems = async () => {
        try {
            const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
            const userData = userResponse.data;

            userData.cart = [];

            await axios.put(`http://localhost:3001/users/${userId}`, userData);

            setCartItems([]);
            setCheckedItems([]);
        } catch (error) {
            console.error('Error clearing cart:', error.response ? error.response.data : error.message);
        }
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
                {cartItems.map((item) => (
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