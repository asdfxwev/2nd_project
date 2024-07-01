import React from "react";
import '../ItemDetail/ItemDetail.css'
import ItemDataBase from '../ItemList/ItemDataBase';

export default function ItemBuy() {

    // const { id } = useParams();
    
    // const selectedItem = ItemDataBase.find(item => item.id === parseInt(id));


    return (
        <>
            <div className="item_detail_main">
                <div className="buy_titlebar">
                    <h1>주문결제</h1>
                </div>
            
                <div className='detail_left_box'>
                    <div className="info_top_box">
                        <div className="info_top_left">주문자 정보</div>
                    </div>
                </div>

                <div className='detail_right_box'>
                    <div className='right_inner'>
                        
                    </div>
                </div>
            </div>
        </>
    );
}