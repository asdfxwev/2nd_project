import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CscData from "./CscData";
import InquiryList from './InquiryList';
import Csc from './Csc';
import CscMenu from './CscMenu';
import './Customerservice.css';

export default function Customerservice() {
    const [item, setItem] = useState(CscData);
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedItems, setPaginatedItems] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('ALL');
    const navigate = useNavigate();
    const location = useLocation();

    const itemsPerPage = 10;

    

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const page = parseInt(query.get('page')) || 1;
        const category = query.get('category') || 'ALL';
        setCurrentPage(page);
        setCurrentCategory(category);
        
        const filteredData = category === 'ALL' ? CscData : CscData.filter(item => item.classification === category);
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);
        setPaginatedItems(filteredData.slice(startIndex, endIndex));
    }, [location]);

    const totalNumberOfPages = Math.ceil(
        (currentCategory === 'ALL' ? CscData : CscData.filter(item => item.classification === currentCategory)).length / itemsPerPage
    );

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
                <h2 className="cscTitle">1:1문의</h2>
                <div>
                    <div className="CscListTitle">
                        <div style={{ width: '100px'}}>제목</div>
                        <div style={{ width: '500px'}}>문의유형</div>
                        <div style={{ width: '100px'}}>상태</div>
                    </div>
                    <div className="CscList">
                        <InquiryList />
                    </div>
                    <div>
                        <a href='/'>문의작성</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
