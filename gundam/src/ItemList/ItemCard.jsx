import React from 'react';
import { Link } from 'react-router-dom';
import './ItemCard.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ItemCard = ({ item }) => {

    const formatPrice = (price) => {
        return new Intl.NumberFormat('ko-KR').format(price);
    };

    const addToCart = (item) => {
        console.log(item);
        const storedItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingItem = storedItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            const updatedItems = storedItems.map(cartItem =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            );
            localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        } else {
            localStorage.setItem('cartItems', JSON.stringify([...storedItems, { ...item, quantity: 1 }]));
        }
    };

    return (
        <div className="item-card">
            <Link to={`/ItemList/ItemDetail/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div>
                    <img src={item.image} alt={item.name} />
                    <div className='sx'>
                        <ShoppingCartIcon className="shopping-cart-icon" onClick={(e) => { 
                            e.preventDefault(); 
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
