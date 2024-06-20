import React from 'react';
import './ItemDetail.css'
import '../App.css';

export default function ItemDetail () {
    return (
        <div className="item_detail_main">
            <div className='detail_img_box'>
                <img className="item_detail_img" src='./image/tabImage14.jpg' />
            </div>
            <div className='detail_right_box'>
                <div className='detail_top'>좋아요아이콘용</div>
                <div className='item_name'>건담이름</div>
                <div className='item_price'>금액</div>
                <div className='item_info'>상품정보</div>
                <div className='item_count'>구매수량</div>
                <div className='item_totar_price'>총금액</div>
                <div></div>
            </div>
        </div>
    )
}