import React from 'react';
import './ItemCard.css';
import ItemDataBase from './ItemDataBase'

const ItemCard = ({ item }) => { 
    return (
        <div>
            <div className="item-card">
                <img src={item.image} alt={item.name} />
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