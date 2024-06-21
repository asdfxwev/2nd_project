import React from 'react';
import './ItemDetail.css'
// import '../App.css';

export default function ItemDetail () {
    return (
        <div className="item_detail_main">
            <div className='detail_left_box'>
                <div className='detail_img'>
                    <img className="item_detail_img" src='./image/gundam08.jpg' />
                </div>
                <div className='detail_img_list'>
                    <img className='slide_img' src='./image/gundam08.jpg' />
                    <img className='slide_img' src='./image/gundam09.jpg' />
                    <img className='slide_img' src='./image/gundam10.jpg' />
                    <img className='slide_img' src='./image/gundam13.jpg' />
                </div>
            </div>
            <div className='detail_right_box'>
                <div className='right_inner'>
                    <div className='detail_top'>좋아요아이콘용</div>
                    <div className='item_name'>건담이름</div>
                    <div className='item_price'>금액</div>
                    <div className='item_info'>상품정보</div>
                    <div className='item_count'>구매수량</div>
                    <div className='item_totar_price'>총금액</div>
                    <div className='item_btn'>
                        <button className='submit_btn'>구매하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}