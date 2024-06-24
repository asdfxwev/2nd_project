import React from 'react';
import { Link } from 'react-router-dom';
import './ItemCard.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const ItemCard = ({ item }) => {

    const formatPrice = (price) => {
        return new Intl.NumberFormat('ko-KR').format(price);
    };

    return (
        <div className="item-card">
            <Link to={`/ItemDetail/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div>
                    <img src={item.image} alt={item.name} />
                    <div className='sx'>
                        <ShoppingCartIcon className="shopping-cart-icon" />
                    </div>
                </div>
                <div className="item-details">
                    <p className='item_p'>{item.comment}</p>
                    <h2 className='item_name'>{item.name}</h2>
                    <p className='item_p'>{formatPrice(item.price)} 원</p>
                    <p className='item_p'>{item.detail}</p>
                </div>
            </Link>
        </div>
    );
};

export default ItemCard;
