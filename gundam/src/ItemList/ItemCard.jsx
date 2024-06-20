import React from 'react';
import './ItemCard.css';

const ItemCard = ({ product }) => {
    return (
        <div className="item-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
        </div>
    );
};

export default ItemCard;
