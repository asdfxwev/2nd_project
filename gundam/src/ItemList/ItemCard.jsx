import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ItemCard.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ItemCard = ({ item }) => {
    const existingInquiries = JSON.parse(localStorage.getItem('loginInfo'));
    const userId = existingInquiries.id;
    
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        const checkIfAdded = async () => {
            try {
                const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
                const userData = userResponse.data;

                if (userData.cart) {
                    const existingItemIndex = userData.cart.findIndex(cartItem => cartItem.id === item.id);
                    if (existingItemIndex >= 0) {
                        setIsAdded(true);
                    }
                }
            } catch (error) {
                console.error('Error:', error.response ? error.response.data : error.message);
            }
        };

        checkIfAdded();
    }, [userId, item.id]);

    const formatPrice = (price) => {
        return new Intl.NumberFormat('ko-KR').format(price);
    };

    const addToCart = async (item) => {
        try {
            const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
            const userData = userResponse.data;
    
            if (!userData.cart) {
                userData.cart = [];
            }
    
            const existingItemIndex = userData.cart.findIndex(cartItem => cartItem.id === item.id);
    
            if (existingItemIndex >= 0) {
                if (isAdded) {
                    // Remove the item if it is already added
                    userData.cart.splice(existingItemIndex, 1);
                } else {
                    // Increase the quantity if not already added
                    userData.cart[existingItemIndex].quantity += 1;
                }
            } else {
                // Add the item if it is not already in the cart
                userData.cart.push({ ...item, quantity: 1 });
            }
    
            await axios.put(`http://localhost:3001/users/${userId}`, userData);

            // Toggle the state for icon color and effect
            setIsAdded(!isAdded);
            
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className={`item-card ${isAdded ? 'added' : ''}`}>
            <Link to={`/ItemList/ItemDetail/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div>
                    <img src={item.image} alt={item.name} />
                </div>
                <div className="item-details">
                    <p className='item_p'>{item.comment}</p>
                    <h2 className='item_name'>{item.name}</h2>
                    <p className='item_p'>{formatPrice(item.price)} 원</p>
                    <p className='item_p'>{item.brand}</p>
                </div>
            </Link>
            <div className='sx'>
                <button className='button-shopping' onClick={() => addToCart(item)}>
                    <ShoppingCartIcon className="shopping-cart-icon" style={{ color: isAdded ? 'red' : 'inherit' }} />
                </button>
            </div>
        </div>
    );
};

export default ItemCard;
