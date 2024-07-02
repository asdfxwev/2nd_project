import React, { useState, useEffect } from 'react';
import './ItemDetail.css'
// import ItemDataBase from '../ItemList/ItemDataBase';
import { useLocation } from 'react-router-dom';

const ItemBuy = () => {

    const userinfo = JSON.parse(localStorage.getItem('loginInfo'));
    console.log({userinfo});

    const location = useLocation();
    const { item, count } = location.state || {};


    const formatNumber = (number) => {
        return number.toLocaleString('ko-KR');
    };

    const [totalprice, setTotalPrice] = useState(item.price);

    useEffect(() => {
        setTotalPrice(count * item.price);
    }, []);




    return (
        <>
            <div className="buy_main_box">
                <div className="buy_titlebar">
                    <h1>주문결제</h1>
                </div>
                <div className="item_detail_main">
                    <div className='detail_left_box'>
                        <div className="buy_left_subtitle">
                            <div className="subtitle_left"><h3>상품 정보</h3></div>
                            <div className="subtitle_right"></div>
                        </div>
                        <div className='buy_left_content_box'>
                            
                        </div>

                    </div>

                    <div className='detail_right_box'>
                        <div className='right_inner'>
                            <div className='buy_right_subtitle'><h3>주문자 정보</h3></div>
                            
                            <div className='item_info underline'>
                                <div className='userinfo'>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                </div>
                                {/* <div className='buy_left_box font_medium'>
                                    <img className="buy_item_img" src={item.src[0]} alt={item.name} />
                                </div>
                                <div className='buy_right_box'>
                                    <p>{item.comment}</p>
                                    <p className='buy_item_name'>{item.name}</p>
                                    <p>수량 : {count}</p>
                                    <p>{formatNumber(item.price)} 원</p>
                                </div> */}
                            </div>
                            <div className='item_count underline'>
                                <div className='count_left_box font_medium'>구매수량</div>
                                <div className='count_right_box'>
                                    <div className='count_num'>{count}</div>
                                </div>
                            </div>
                            <div className='item_total_price font_medium'>
                                <p className='total_price_title '>총 결제금액</p>
                                <p className='total_price'><span className='t_price'>{formatNumber(totalprice)}</span>원</p>
                            </div>
                            <div className='item_btn'>
                                <button className='submit_btn' >구매하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemBuy;