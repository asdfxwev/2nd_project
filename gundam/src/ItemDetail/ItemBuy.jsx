import React, { useState, useEffect } from 'react';
import './ItemDetail.css';
import ItemBuyCartList from './ItemBuyCartList';
import { useLocation } from 'react-router-dom';

const ItemBuy = () => {

    const userinfo = JSON.parse(localStorage.getItem('loginInfo')); // 사용자 정보

    const location = useLocation();
    const { item, count } = location.state || {};
    const [total, setTotal] = useState(0); // 총 결제금액 상태 변수

    const formatNumber = (number) => {
        return number.toLocaleString('ko-KR');
    };

    const [totalprice, setTotalPrice] = useState(item ? item.price : 0);

    useEffect(() => {
        if (item && count) {
            setTotalPrice(count * item.price);
        }
    }, [item, count]);

    // ItemBuyCartList 컴포넌트가 첫 번째로 처리되도록 useEffect를 사용하여 설정
    useEffect(() => {
        if (item && count) {
            const initialCartItems = [{ ...item, quantity: count }];
            const initialTotal = initialCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
            setTotal(initialTotal);
        }
    }, [item, count]);
    // =====================================================================


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
                            <ItemBuyCartList setTotal={setTotal} initialItem={item} initialCount={count} />
                        </div>

                        <div className='test'></div>

                    </div>

                    <div className='detail_right_box'>
                        <div className='right_inner'>
                            <div className='buy_right_subtitle'><h3>주문자 정보</h3></div>
                            
                            <div className='item_info underline'>
                                <div className='userinfo'>
                                    {/* 사용자정보 보여줄곳 */}
                                </div>
                            </div>
                            <div className='item_count underline'>
                                <div className='count_left_box font_medium'>구매수량</div>
                                <div className='count_right_box'>
                                    <div className='count_num'>{count}</div>
                                </div>
                            </div>
                            <div className='item_total_price font_medium'>
                                <p className='total_price_title '>총 결제금액</p>
                                <p className='total_price'><span className='t_price'>{formatNumber(total)}</span> 원</p>
                                {/* <p className='total_price'><span className='t_price'>{formatNumber(totalprice)}</span> 원</p> */}
                            </div>
                            <div className='item_btn'>
                                <button className='submit_btn' >결제하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemBuy;