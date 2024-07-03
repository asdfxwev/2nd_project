import React, { useState, useEffect } from 'react';
import './Cart.css';
import axios from 'axios';
import MyPageleft from '../MyPage/MyPageleft';

const CartItem = ({ item, onQuantityChange, onCheckboxChange }) => {
    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1) {
            onQuantityChange(item.id, newQuantity);
        }
    };

    const handleCheckboxChange = () => {
        onCheckboxChange(item.id);
    };

    return (
        <div className="cart-item">
            <div>
                <input type="checkbox" checked={item.isChecked} onChange={handleCheckboxChange} />
            </div>
            <div>
                <a href={`ItemList/ItemDetail/${item.id}`}>
                    <img src={item.image} alt={item.name} />
                </a>
            </div>
            <div>{item.name}</div>
            <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(item.quantity - 1)}>-</button>
                {item.quantity}
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
    const [isAllChecked, setIsAllChecked] = useState(false);

    const existingInquiries = JSON.parse(localStorage.getItem('loginInfo'));
    const userId = existingInquiries.id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
                const userData = userResponse.data;

                setCartItems(userData.cart);
                setCheckedItems(userData.cart.filter(item => item.isChecked));
                setIsAllChecked(userData.cart.every(item => item.isChecked));
            } catch (error) {
                console.error('데이터를 가져오는 중 오류 발생:', error);
            }
        };
        fetchData();
    }, [userId]);

    const handleQuantityChange = async (id, quantity) => {
        const updatedItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity } : item
        );
        setCartItems(updatedItems);

        try {
            const userData = { ...existingInquiries, cart: updatedItems };
            await axios.put(`http://localhost:3001/users/${userId}`, userData);
        } catch (error) {
            console.error('수량을 업데이트하는 중 오류 발생:', error);
        }
    };

    const handleCheckboxChange = async (id) => {
        const updatedItems = cartItems.map(item =>
            item.id === id ? { ...item, isChecked: !item.isChecked } : item
        );
        setCartItems(updatedItems);

        try {
            const userData = { ...existingInquiries, cart: updatedItems };
            await axios.put(`http://localhost:3001/users/${userId}`, userData);

            setCheckedItems(updatedItems.filter(item => item.isChecked));
            setIsAllChecked(updatedItems.every(item => item.isChecked));
        } catch (error) {
            console.error('체크박스 상태를 업데이트하는 중 오류 발생:', error);
        }
    };

    const handleAllCheckboxChange = async () => {
        const updatedItems = cartItems.map(item => ({ ...item, isChecked: !isAllChecked }));
        setCartItems(updatedItems);

        try {
            const userData = { ...existingInquiries, cart: updatedItems };
            await axios.put(`http://localhost:3001/users/${userId}`, userData);

            setCheckedItems(updatedItems.filter(item => item.isChecked));
            setIsAllChecked(!isAllChecked);
        } catch (error) {
            console.error('전체 체크박스 상태를 업데이트하는 중 오류 발생:', error);
        }
    };

    const handleRemoveCheckedItems = async () => {
        const updatedItems = cartItems.filter(item => !item.isChecked);
        setCartItems(updatedItems);

        try {
            const userData = { ...existingInquiries, cart: updatedItems };
            await axios.put(`http://localhost:3001/users/${userId}`, userData);

            setCheckedItems([]);
            setIsAllChecked(false);
        } catch (error) {
            console.error('선택된 상품을 삭제하는 중 오류 발생:', error);
        }
    };

    const handleRemoveAllItems = async () => {
        const updatedItems = [];
        setCartItems(updatedItems);

        try {
            const userData = { ...existingInquiries, cart: updatedItems };
            await axios.put(`http://localhost:3001/users/${userId}`, userData);

            setCheckedItems([]);
            setIsAllChecked(false);
        } catch (error) {
            console.error('모든 상품을 삭제하는 중 오류 발생:', error);
        }
    };

    const total = cartItems
        .filter(item => item.isChecked)
        .reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            alert('장바구니에 상품이 없습니다!');
        } else {
            window.location.href = '/Itembuy';
        }
    };
    
    
    return (
        <div>
            <h1 className='h1-name'>장바구니</h1>
            <div className="cart-container">
                <div className="cart-header">
                    <div>
                        <input
                            type="checkbox"
                            checked={isAllChecked}
                            onChange={handleAllCheckboxChange}
                        />
                        전체선택
                    </div>
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
                    />
                ))}
                <button className='button-size' onClick={handleRemoveCheckedItems}>선택한 상품 삭제</button>
                <button className='button-size' onClick={handleRemoveAllItems}>전체 상품 삭제</button>
                <div className="cart-total">
                    총 합계: {total.toLocaleString()}원
                </div>
                <div className="cart-actions">
                    <button onClick={handleCheckout}>결제하기</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
