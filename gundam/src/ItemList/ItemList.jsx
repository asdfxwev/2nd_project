import React from 'react';
import ItemCard from './ItemCard';
import './ItemList.css';

const ItemList = ({ items }) => {
    return (
        <div className="item-list">
            {items.map(item => (
                <ItemCard key={item.id} product={item} />
            ))}
        </div>
    );
};

export default ItemList;
