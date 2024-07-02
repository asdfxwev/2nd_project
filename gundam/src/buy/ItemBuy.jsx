import React, { useState, useEffect } from 'react';
import '../ItemDetail/ItemDetail.css'
import ItemDataBase from '../ItemList/ItemDataBase';
import { Link, useParams, useNavigate } from 'react-router-dom';

const ItemBuy = () => {

    const { id, count } = useParams();
    console.log(`${id}, ${count}`);
    const buyitem = ItemDataBase.find(item => item.id === parseInt(id));

    const formatNumber = (number) => {
        return number.toLocaleString('ko-KR');
    };

    const [totalprice, setTotalPrice] = useState(buyitem.price);

    useEffect(() => {
        setTotalPrice(count * buyitem.price);
    }, []);

    const mainImage = buyitem.src[0];

    return (
        <>
            <div className="buy_main_box">
                <div className="buy_titlebar">
                    <h1>주문결제</h1>
                </div>
                <div className="item_detail_main">
                    <div className='detail_left_box'>
                        <div className="buy_left_subtitle">
                            <div className="subtitle_left"><h3>주문자 정보</h3></div>
                            <div className="subtitle_right"></div>
                        </div>
                        <div className='buy_left_content_box'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>

                    </div>

                    <div className='detail_right_box'>
                        <div className='right_inner'>
                            <div className='buy_right_subtitle'><h3>주문 상품 정보</h3></div>
                            {/* <div className='item_name'><h2>{buyitem.name}</h2></div> */}
                            {/* <div className='underline'><span className='item_price'>{formatNumber(buyitem.price)}</span>원</div> */}
                            <div className='item_info underline'>
                                <div className='info_left_box font_medium'>
                                    {/* <img className="item_detail_img" src={mainImage} alt="item_img" /> */}
                                    <img className="item_detail_img" alt="item_img" />
                                </div>
                                <div className='info_right_box'>
                                    {/* <p className='info_comment'>- {buyitem.comment}</p> */}
                                    {/* <p>{buyitem.detail}</p> */}
                                </div>
                            </div>
                            <div className='item_count underline'>
                                <div className='count_left_box font_medium'>구매수량</div>
                                <div className='count_right_box'>
                                    {/* <div className='count_num'>{count}</div> */}
                                </div>
                            </div>
                            <div className='item_total_price font_medium'>
                                <p className='total_price_title '>총금액</p>
                                {/* <p className='total_price'><span className='t_price'>{formatNumber(totalprice)}</span>원</p> */}
                            </div>
                            <div className='item_btn'>
                                {/* <button className='submit_btn' onClick={() => {navigate('/ItemBuy')}}>구매하기</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemBuy;