import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ItemCard.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ItemCard = ({ item }) => {
    const existingInquiries = JSON.parse(localStorage.getItem('loginInfo'));
    const userId = existingInquiries.id; // Assuming the user ID is stored here
    
    const navigate = useNavigate();
    console.log(item);
    const formatPrice = (price) => {
        return new Intl.NumberFormat('ko-KR').format(price);
    };

    const addToCart = async () => {
        // event.preventDefault();
        // const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        // const existingItem = storedItems.find(cartItem => cartItem.id === item.id);
        // if (existingItem) {
        //     const updatedItems = storedItems.map(cartItem =>
        //         cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        //     );
        //     localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        // } else {
        //     localStorage.setItem('cartItems', JSON.stringify([...storedItems, { ...item, quantity: 1 }]));
        // }
        try {
            const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
            const userData = userResponse.data;
            // const id = userData.inquiryCounter || 1;

            const cart = item;

            // Add the new inquiry to the user's inquiries list
            userData.cart = userData.cart ? [...userData.inquries, cart] : [cart];
            // userData.inquiryCounter = id + 1;

            await axios.put(`http://localhost:3001/users/${userId}`, userData);

            navigate('/Cart');
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="item-card">
            <Link to={`/ItemList/ItemDetail/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div>
                    <img src={item.image} alt={item.name} />
                    <div className='sx'>
                        <ShoppingCartIcon className="shopping-cart-icon" onClick={() => {
                            // e.preventDefault(); 
                            addToCart(item);
                        }} />
                    </div>
                </div>
                <div className="item-details">
                    <p className='item_p'>{item.comment}</p>
                    <h2 className='item_name'>{item.name}</h2>
                    <p className='item_p'>{formatPrice(item.price)} 원</p>
                    <p className='item_p'>{item.brand}</p>
                </div>
            </Link>
        </div>
    );
};

export default ItemCard;
