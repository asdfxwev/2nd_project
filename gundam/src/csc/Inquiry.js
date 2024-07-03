import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CscData from "./CscData";
import InquiryList from './InquiryList';
import Csc from './Csc';
import CscMenu from './CscMenu';
import './Customerservice.css';
import CscLeft from './CscLeft';
import './Inquiry.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAngleLeft, faAngleRight, faAnglesRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Customerservice() {
    const [item, setItem] = useState(CscData);
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedItems, setPaginatedItems] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('ALL');
    const navigate = useNavigate();
    const location = useLocation();

    const itemsPerPage = 10;
    const maxPagesToShow = 10;


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

    const getPageNumbers = () => {
        const pageNumbers = [];
        const currentGroup = Math.floor((currentPage - 1) / maxPagesToShow);
        const startPage = currentGroup * maxPagesToShow + 1;
        const endPage = Math.min(totalNumberOfPages, startPage + maxPagesToShow - 1);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    return (
        <section className="cscContainer">
            <div className="cscSection">
                <CscLeft />
            </div>
            <div className="cscMain">
                <h2 className="cscTitle h2Notice">1:1문의</h2>
                <div>
                    <div className="CscInquiryListTitle">
                        <div style={{ width: '100px' }}>유형</div>
                        <div style={{ width: '500px' }}>제목</div>
                        <div style={{ width: '100px' }}>삭제여부</div>
                    </div>
                    <InquiryList />
                    <ul className="noticeNumber">
                    {currentPage > 1 && (
                        <>
                            <li><NavLink to={`/Notice?page=1`}><FontAwesomeIcon icon={faAnglesLeft} /></NavLink></li>
                            <li><NavLink to={`/Notice?page=${currentPage - 1}`}><FontAwesomeIcon icon={faAngleLeft} /></NavLink></li>
                        </>
                    )}
                    {getPageNumbers().map((pageNumber) => (
                        <li
                            key={pageNumber}
                            className={currentPage === pageNumber ? 'selected' : ''}
                        >
                            <NavLink
                                to={`/Notice?page=${pageNumber}`}
                            >
                                {pageNumber}
                            </NavLink>
                        </li>
                    ))}
                    {currentPage < totalNumberOfPages && (
                        <>
                            <li><NavLink to={`/Notice?page=${currentPage + 1}`}><FontAwesomeIcon icon={faAngleRight} /></NavLink></li>
                            <li><NavLink to={`/Notice?page=${totalNumberOfPages}`}><FontAwesomeIcon icon={faAnglesRight} /></NavLink></li>
                        </>
                    )}
                </ul>
                    <div className='InquiryWriteBtn'>
                        <Link to='/Csc/Inquiry/InquiryWrite'>문의작성</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
