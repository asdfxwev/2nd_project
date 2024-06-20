import React from 'react';
import './ItemCard.css';

const ItemCard = ({ Item }) => {
    return (
        <div>
            <div className="item-card">
                <img src={Item.image} alt={Item.name} />
            </div>
            <div>
                <p className='item_comment'>{Item.comment}</p>
                <h2>{Item.name}</h2>
                <p className='item_p'>{Item.price}</p>
                <p className='item_p'>{Item.detail}</p>
            </div>
        </div>
    );
};

export default ItemCard;
