import React, { useState, useEffect } from 'react';
import './ItemDetail.css';
import ItemDataBase from '../ItemList/ItemDataBase';
import SectionImg from './SectionImg';
import ItemReview from './ItemReview';
import ItemQna from './ItemQna';
import ItemService from './ItemService';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function ItemDetail() {
    const navigate = useNavigate();
    const [isAdded, setIsAdded] = useState(false);

    const { id } = useParams();

    const selectedItem = ItemDataBase.find(item => item.id === parseInt(id));

    const [mainImage, setMainImage] = useState(selectedItem.src[0]);

    const handleImageClick = (src) => {
        setMainImage(src);
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [totalprice, setTotalPrice] = useState(selectedItem.price);

    const [count, setCount] = useState(1);

    useEffect(() => {
        setTotalPrice(count * selectedItem.price);
    }, [count]);

    const minus = () => {
        if (count > 1) {
            setCount(e => e - 1);
        } else {
            alert(`수량은 1개 이상 선택 가능합니다.`);
        }
    };

    const plus = () => {
        if (count >= 3) {
            alert(`수량은 3개 까지 선택 가능합니다.`);
        } else {
            setCount(e => e + 1);
        }
    };

    const formatNumber = (number) => {
        return number.toLocaleString('ko-KR');
    };

    const existingInquiries = JSON.parse(localStorage.getItem('loginInfo'));
    const toCart = async (e) => {
        e.preventDefault();

        if (existingInquiries) {
            const userId = existingInquiries.id; // Assuming the user ID is stored here
            try {
                const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
                const userData = userResponse.data;


                if (userData.cart.some(e => e.id === selectedItem.id)) {
                    alert('이미장바구니에 담겨있지요')
                    setIsAdded(true)
                } else {

                    const cart = { ...selectedItem, quantity: count };

                    console.log(isAdded);

                    userData.cart = userData.cart ? [...userData.cart, cart] : [cart];

                    await axios.put(`http://localhost:3001/users/${userId}`, userData);
                    setIsAdded(true);

                    if (window.confirm('장바구니로 갈래?')) {
                        navigate('/Cart');
                    }
                }
            } catch (error) {
                console.error('Error:', error.response ? error.response.data : error.message);
            }
        }
        else {
            navigate('/Login')
        }
    }


    return (
        <div className="item_detail_main">
            <div className='detail_left_box'>
                <div className='detail_img'>
                    <img className="item_detail_img" src={mainImage} alt="main_img" />
                </div>
                <div className='detail_img_list'>
                    {selectedItem.src.map((src, id) => (
                        <img
                            key={id}
                            id={id}
                            className='detail_slide_img'
                            src={src}
                            alt={`slide_${id + 1}`}
                            onClick={() => handleImageClick(src)}
                        />
                    ))}
                </div>

                {/* tab */}
                <h2 id="DETAIL">상품 상세</h2>

                <div className="tab">
                    <div className="tab_inner">
                        <a href="#DETAIL" >상세보기</a>
                        <a href="#REVIEW_TAB" >상품리뷰(<span >0</span>)</a>
                        <a href="#QNA" >Q&amp;A</a>
                        <a href="#SERVICE" >배송/교환/반품</a>
                    </div>
                </div>
                {/* // tab */}

                <div className="section_img">
                    <div className='detail_item_name'>MG WING GUNDAM<br />ZERO EW Ver.Ka</div>
                    <div className='detail_item_subname'>MG 윙 건담 제로 (EW) Ver.Ka</div>

                    <SectionImg key={selectedItem.id} item={selectedItem} /> {/* 상세보기 tap */}
                    <ItemReview key={selectedItem.id} item={selectedItem.id} /> {/* 리뷰 tap */}
                    <ItemQna key={selectedItem.id} item={selectedItem.id} /> {/* Q&A tap */}
                    <ItemService /> {/* 배송/교환/반품 tap */}

                </div>

            </div>
            <div className='detail_right_box'>
                <div className='right_inner'>
                    <div className='detail_top'>
                        {/* <FontAwesomeIcon icon={faCartShopping} className='detail_cart' onClick={() => {navigate('../cart/Cart')}} /> */}
                        {/* <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /> 추후 찜 기능 추가 시 아이콘 사용할것 */}
                        <FontAwesomeIcon icon={faCartShopping} onClick={toCart} className='detail_cart' style={{ color: isAdded ? 'red' : 'inherit' }} />
                    </div>
                    <div className='item_name'><h2>{selectedItem.name}</h2></div>
                    <div className='underline'><span className='item_price'>{formatNumber(selectedItem.price)}</span>원</div>
                    <div className='item_info underline'>
                        <div className='info_left_box font_medium'>상품정보</div>
                        <div className='info_right_box'>
                            <p className='info_comment'>- {selectedItem.comment}</p>
                            <p>{selectedItem.detail}</p>
                        </div>
                    </div>
                    <div className='item_count underline'>
                        <div className='count_left_box font_medium'>구매수량</div>
                        <div className='count_right_box'>
                            <button onClick={minus}>-</button>
                            <div className='count_num'>{count}</div>
                            <button onClick={plus}>+</button>
                        </div>
                    </div>
                    <div className='item_total_price font_medium'>
                        <p className='total_price_title '>총금액</p>
                        <p className='total_price'><span className='t_price'>{formatNumber(totalprice)}</span>원</p>
                    </div>
                    <div className='item_btn'>
                        <button className='submit_btn' onClick={() => { navigate('/ItemBuy') }}>구매하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}