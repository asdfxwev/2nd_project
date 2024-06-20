import React from 'react';
import ItemCard from './ItemCard'; 
import './ItemList.css';
import ItemDataBase from './ItemDataBase';

const ItemList = () => { 

    return (
        <div className="item-list">
            <div className='item-choose'>
                <div>필터 숨기기 </div>
                <div>선택된 필터: <button>초기화</button></div>
                <span>상품정보</span>
                <span>가격대별</span>
                <span>브랜드별</span>
                <span>작품별</span>
            </div>
            {ItemDataBase.map(item => (
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;