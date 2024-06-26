import React, { useState, useEffect } from 'react';
import './ItemDetail.css'
import ItemDataBase from '../ItemList/ItemDataBase';
import SectionImg from './SectionImg';
import ItemDetailInfo from './ItemDetailInfo';
import { useParams } from 'react-router-dom';

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

export default function ItemDetail() {
    const { id } = useParams();
    
    const selectedItem = ItemDataBase.find(item => item.id === parseInt(id));
    
    const [mainImage, setMainImage] = useState(selectedItem.src[0]);

    const handleImageClick = (src) => {
        setMainImage(src);
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [totalprice,setTotalPrice] = useState(selectedItem.price);

    const [count, setCount] = useState(1);

    useEffect(() => {
        setTotalPrice(count * selectedItem.price);
    }, [count]);

    const minus = () => {
        if (count > 1){
            setCount(e => e - 1);
        } else {
            alert(`수량은 1개 이상 선택 가능합니다.`);
        }
    };
    
    const plus = () => {
        if (count >= 3){
            alert(`수량은 3개 까지 선택 가능합니다.`);
        } else {
            setCount(e => e + 1);
        }
    };

    const formatNumber = (number) => {
        return number.toLocaleString('en-US');
    };
    
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
                    
                    <SectionImg key={selectedItem.id} item={selectedItem} />
                    <ItemDetailInfo key={selectedItem.id} item={selectedItem} />
                    
                </div>

            </div>
            <div className='detail_right_box'>
                <div className='right_inner'>
                    <div className='detail_top'>
                        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
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
                        <p className='total_price'><span className='t_price'>{formatNumber(totalprice)}</span>원</p>  {/* 총금액 계산 안됨. */}
                    </div>
                    <div className='item_btn'>
                        <button className='submit_btn'>구매하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}