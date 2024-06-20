import React from 'react';
import { Link } from 'react-router-dom';
import './ItemList.css'

const ItemList = ({ items }) => {
    return (
        <div>
            <h2>Item List</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <Link to={`/ItemDetail/${item.id}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
