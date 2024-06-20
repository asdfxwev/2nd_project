import React from 'react';
import ItemCard from './ItemCard'; 
import './ItemList.css';
import ItemDataBase from './ItemDataBase';

const ItemList = () => { 

    return (
        <div className="item-list">
            {ItemDataBase.map(item => (
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;