import React, { useState, useEffect } from 'react';
import './ItemDetail.css';
import ItemBuyCartList from './ItemBuyCartList';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const ItemBuy = () => {

    const userinfo = JSON.parse(localStorage.getItem('loginInfo')); // 사용자 정보
    console.log(userinfo);

    const location = useLocation();
    const { item, count } = location.state || {};
    const [total, setTotal] = useState(0); // 총 결제금액 상태 변수
    const [totalQuantity, setTotalQuantity] = useState(0); // 총 구매수량 상태 변수
    const [checkedTrueItems, setcheckedTrueItems] = useState([]); // 체크된 아이템 상태 변수

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
            const initialTotalQuantity = initialCartItems.reduce((sum, item) => sum + item.quantity, 0);
            setTotal(initialTotal);
            setTotalQuantity(initialTotalQuantity);
        }
    }, [item, count]);

    const gundam_buy = async () => {
        try {
            const userResponse = await axios.get(`http://localhost:3001/users/${userinfo.id}`);
            const userData = userResponse.data;

            // isChecked가 true인 데이터만 buy 배열에 추가
            const itemsToBuy = userData.cart.filter(item => checkedTrueItems.includes(item.id));
            userData.buy = userData.buy ? [...userData.buy, ...itemsToBuy] : itemsToBuy;

            // isChecked가 true인 데이터는 cart에서 제거
            userData.cart = userData.cart.filter(item => !checkedTrueItems.includes(item.id));

            await axios.put(`http://localhost:3001/users/${userinfo.id}`, userData);

            alert('결제가 완료되었습니다.');
        } catch (error) {
            console.error('결제 처리 중 오류 발생:', error);
        }
    };
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
                        <div>
                            <ItemBuyCartList 
                                setTotal={setTotal}
                                setTotalQuantity={setTotalQuantity}
                                setcheckedTrueItems={setcheckedTrueItems}
                                initialItem={item}
                                initialCount={count}
                            />
                        </div>
                        
                        {/* <div className="buy_left_subtitle">
                            <div className="subtitle_left"><h3>배송지 정보</h3></div>
                            <div className="subtitle_right"></div>
                        </div>
                        <div className='buy_left_address_box'>
                            <div></div>
                        </div> */}

                    </div>

                    <div className='detail_right_box'>
                        <div className='right_inner'>
                            <div className='buy_right_subtitle'><h3>주문자 정보</h3></div>
                            
                            <div className='item_info underline'>
                                <div className='userinfo'>
                                    <p>주문자</p>
                                    <p>{userinfo.name}</p>
                                    <p>연락처</p>
                                    <p>{userinfo.phoneNumber}</p>
                                    <p>e-Mail</p>
                                    <p>{userinfo.email}</p>
                                </div>
                            </div>
                            <div className='item_count underline'>
                                <div className='count_left_box font_medium'>구매수량</div>
                                <div className='count_right_box'>
                                    <div className='count_num'>{totalQuantity}</div>
                                </div>
                            </div>
                            <div className='item_total_price font_medium'>
                                <p className='total_price_title '>총 결제금액</p>
                                <p className='total_price'><span className='t_price'>{formatNumber(total)}</span> 원</p>
                                {/* <p className='total_price'><span className='t_price'>{formatNumber(totalprice)}</span> 원</p> */}
                            </div>
                            <div className='item_btn'>
                                <button className='submit_btn' onClick={gundam_buy} >결제하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemBuy;