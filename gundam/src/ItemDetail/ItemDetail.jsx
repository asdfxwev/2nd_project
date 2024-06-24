import React, { useState } from 'react';
import './ItemDetail.css'
import ItemDataBase from '../ItemList/ItemDataBase';

export default function ItemDetail() {

    const selectedItem = ItemDataBase.find(item => item.id === 2);
    // 2 대신 ItemList 화면에서 클릭한 데이터타겟의 id값을 가지고 와야함.

    const [mainImage, setMainImage] = useState(selectedItem.src[0]);

    const handleImageClick = (src) => {
        setMainImage(src);
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
            </div>
            <div className='detail_right_box'>
                <div className='right_inner'>
                    <div className='detail_top'>좋아요아이콘용</div>
                    <div className='item_name'>{selectedItem.name}</div>
                    <div className='item_price'>{selectedItem.price}</div>
                    <div className='item_info'>{selectedItem.comment}</div>
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