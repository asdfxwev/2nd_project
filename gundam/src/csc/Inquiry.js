import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CscData from "./CscData";
import InquiryList from './InquiryList';
import Csc from './Csc';
import CscMenu from './CscMenu';
import './Customerservice.css';
import CscLeft from './CscLeft';

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
                <CscLeft />
            </div>
            <div className="cscMain">
                <h2 className="cscTitle">1:1문의</h2>
                <div>
                    <div className="CscListTitle">
                        <div style={{ width: '100px' }}>유형</div>
                        <div style={{ width: '200px' }}>제목</div>
                        <div style={{ width: '400px' }}>내용</div>
                    </div>
                    <InquiryList />
                    <div>
                        <Link to='/Csc/Inquiry/InquiryWrite'>문의작성</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
