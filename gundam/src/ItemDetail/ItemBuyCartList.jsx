import React, { useState, useEffect } from 'react';
import './ItemDetail.css';
import axios from 'axios';

const CartItem = ({ item, onQuantityChange, onCheckboxChange, isChecked }) => {
    const handleQuantityChange = (newQuantity) => {
        if (newQuantity >= 1) {
            onQuantityChange(item.id, newQuantity);
        }
    };

    return (
        <div className="buy_item_box">
            <div>
                <input type="checkbox" checked={isChecked} onChange={() => onCheckboxChange(item.id)} />
            </div>
            <div>
                <a href={`ItemList/ItemDetail/${item.id}`}>
                    <img src={item.image} alt={item.name} />
                </a>
            </div>
            <div> {item.name} </div>
            <div className="buy_count_box">
                <button onClick={() => handleQuantityChange(item.quantity - 1)}>-</button>
                {item.quantity}
                <button onClick={() => handleQuantityChange(item.quantity + 1)}>+</button>
            </div>
            <div> {item.price.toLocaleString()} 원 </div>
            <div> {(item.price * item.quantity).toLocaleString()} 원 </div>
        </div>
    );
};

const ItemBuyCartList = ({ setTotal, initialItem, initialCount }) => {
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

                let combinedItems = userData.cart;

                if (initialItem && initialCount) {
                    const initialCartItem = { ...initialItem, quantity: initialCount };
                    combinedItems = [initialCartItem, ...userData.cart];
                }

                setCartItems(combinedItems);
                setCheckedItems(combinedItems.map(item => item.id));
                setIsAllChecked(true); // Initially set all items as checked
            } catch (error) {
                console.error('데이터를 가져오는 중 오류 발생:', error);
            }
        };
        fetchData();
    }, [userId, initialItem, initialCount]);

    useEffect(() => {
        if (cartItems.length > 0) {
            const totalAmount = cartItems
                .filter(item => checkedItems.includes(item.id))
                .reduce((sum, item) => sum + item.price * item.quantity, 0);
            setTotal(totalAmount);
        }
    }, [cartItems, checkedItems, setTotal]);

    // const total = cartItems
    //     .filter(item => checkedItems.includes(item.id))
    //     .reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleQuantityChange = (id, quantity) => {
        const updatedItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity } : item
        );
        setCartItems(updatedItems);
    };

    const handleCheckboxChange = (id) => {
        const newCheckedItems = checkedItems.includes(id)
            ? checkedItems.filter(itemId => itemId !== id)
            : [...checkedItems, id];
        
        setCheckedItems(newCheckedItems);
        setIsAllChecked(newCheckedItems.length === cartItems.length);
    };

    const handleAllCheckboxChange = () => {
        if (isAllChecked) {
            setCheckedItems([]);
        } else {
            setCheckedItems(cartItems.map(item => item.id));
        }
        setIsAllChecked(!isAllChecked);
    };

    const handleRemoveCheckedItems = async () => {
        try {
            const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
            const userData = userResponse.data;

            const updatedItems = userData.cart.filter(item => !checkedItems.includes(item.id));

            await axios.put(`http://localhost:3001/users/${userId}`, { ...userData, cart: updatedItems });

            setCartItems(updatedItems);
            setCheckedItems([]);
            setIsAllChecked(false);
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
            setIsAllChecked(false);
        } catch (error) {
            console.error('Error clearing cart:', error.response ? error.response.data : error.message);
        }
    };

    

    return (
        <div>
            <div className="item_list_container">
                <div className="item_list_header">
                    <div>
                        <input 
                            type="checkbox" 
                            checked={isAllChecked} 
                            onChange={handleAllCheckboxChange} 
                        />
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
                        isChecked={checkedItems.includes(item.id)}
                    />
                ))}
                <button className='button-size' onClick={handleRemoveCheckedItems}>선택한 상품 삭제</button>
                <button className='button-size' onClick={handleRemoveAllItems}>전체 상품 삭제</button>
            </div>
        </div>
    );
}

export default ItemBuyCartList;