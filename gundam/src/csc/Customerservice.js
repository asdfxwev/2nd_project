import CscData from "./CscData";
import Csc from './Csc'
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Customerservice.css';


export default function Customerservice() {

    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedItem, setPageNatedItem] = useState([]);
    const navigate = useNavigate();
    const [filterItem, setFilterItem] = useState({
        order: true,
        delivery: false,
        pay: false,
        exchange: false,
        coupon: false,
        afterService: false,
        product: false,
    })

    const itemsPerPage = 10;

    const totalNumberOfPages = Math.ceil(CscData.length / itemsPerPage);

    return (
        <section className="cscContainer">
            <div className="cscSection">
                <h2>고객센터</h2>
                <ul>
                    <li>자주묻는질문</li>
                    <li>고객센터</li>
                    <li>1:1 문의</li>
                    <li>건프라 가이드</li>
                    <li>완구 설명서</li>
                    <li>A/S안내</li>
                </ul>
            </div>
            <div className="cscMain">
                <h2 className="cscTitle"></h2>
                <div>
                    <form>
                        <input type="text" />
                        <button>검색</button>
                    </form>

                    <ul className="CscMenu">
                        <li>FAQ TOP 10</li>
                        &#124;
                        <li>주문관련</li>
                        &#124;
                        <li>결제/환불</li>
                        &#124;
                        <li>교환/반품</li>
                        &#124;
                        <li>쿠폰/포인트</li>
                        &#124;
                        <li>배송</li>
                        &#124;
                        <li>A/S</li>
                        &#124;
                        <li>상품관련</li>
                    </ul>
                    <div className="CscListTitle">
                        <div style={{width:'100px'}}>분류</div>
                        <div style={{width:'100px'}}>제목</div>
                    </div>
                    <div className="CscList">
                        {<Csc />}
                    </div>
                </div>
            </div>
        </section>
    )
}