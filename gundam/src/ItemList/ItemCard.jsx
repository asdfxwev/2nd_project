import React from 'react';
import './ItemCard.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ItemCard = ({ item }) => {
    return (
        <div className="item-card">
            <img src={item.image} alt={item.name} />
            <div className='sx'>
                <FavoriteIcon className="favorite-icon" />
                <ShoppingCartIcon className="shopping-cart-icon" />
            </div>
            <div>
                <p className='item_comment'>{item.comment}</p>
                <h2>{item.name}</h2>
                <p className='item_p'>{item.price}</p>
                <p className='item_p'>{item.detail}</p>
            </div>
        </div>
    );
};

export default ItemCard;
