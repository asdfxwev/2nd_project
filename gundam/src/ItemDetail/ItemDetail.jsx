import React, { useState, useParams } from 'react';
import './ItemDetail.css'
import ItemDataBase from '../ItemList/ItemDataBase';

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

export default function ItemDetail() {
    // const { id } = useParams();

    const selectedItem = ItemDataBase.find(item => item.id === parseInt(id));
    // const selectedItem = ItemDataBase.find(item => item.id === 2);
    // 2 대신 ItemList 화면에서 클릭한 데이터타겟의 id값을 가지고 와야함.

    const [mainImage, setMainImage] = useState(selectedItem.src[0]);

    const handleImageClick = (src) => {
        setMainImage(src);
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [count, setCount] = useState(0);

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
            </div>
            <div className='detail_right_box'>
                <div className='right_inner'>
                    <div className='detail_top'>
                        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    </div>
                    <div className='item_name'><h2>{selectedItem.name}</h2></div>
                    <div className='item_price'><h3>{selectedItem.price}</h3></div>
                    <div className='item_info'>
                        <div className='info_left_box'>상품정보</div>
                        <div className='info_right_box'>{selectedItem.comment}</div>
                    </div>
                    <div className='item_count'>
                        <div className='left_box'>구매수량</div>
                        <div className='right_box'>
                            <button onClick={() => setCount(c => c - 1)}>-</button>
                            <div className='count_num'>{count}</div>
                            <button onClick={() => setCount(c => c + 1)}>+</button>
                        </div>
                    </div>
                    <div className='item_totar_price'>총금액</div>
                    <div className='item_btn'>
                        <button className='submit_btn'>구매하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
