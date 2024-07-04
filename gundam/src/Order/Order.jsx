import React, { useState, useEffect } from 'react';
import './Order.css';
import axios from 'axios';

const CartItem = ({ item, onQuantityChange, onCheckboxChange, isChecked }) => {
    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1) {
            onQuantityChange(item.id, newQuantity);
        }
    };

    return (
        <div className="cart-item">
            <div>{item.date}</div>
            <div><a href={`ItemList/ItemDetail/${item.id}`}>
                <img src={item.image} alt={item.name} /></a>
            </div>
            <div> {item.name}</div>
            <div className="quantity-controls">
                {item.quantity}
            </div>
            <div>{item.price}원</div>
            <div>{(item.price * item.quantity)}원</div>
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

                setCartItems(userData.buy);
                setCheckedItems(userData.buy.map(item => item.id));
                setIsAllChecked(true); 
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
            const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
            const userData = userResponse.data;

            const itemIndex = userData.buy.findIndex(item => item.id === id);
            if (itemIndex !== -1) {
                userData.buy[itemIndex].quantity = quantity;

                await axios.put(`http://localhost:3001/users/${userId}`, userData);
            }
        } catch (error) {
            console.error('Error updating quantity:', error.response ? error.response.data : error.message);
        }
    };

    const handleCheckboxChange = (id) => {
        const newCheckedItems = checkedItems.includes(id)
            ? checkedItems.filter(itemId => itemId !== id)
            : [...checkedItems, id];
        
        setCheckedItems(newCheckedItems);
        setIsAllChecked(newCheckedItems.length === cartItems.length);
    };

    return (
        <div>
            <h1 className='h1-name'>구매내역</h1>
            <div className="cart-container">
                <div className="cart-header">
                    <div>구매일</div>
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
            </div>
        </div>
    );
};

export default Cart;
