import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CscData from "./CscData";
import InquiryList from './InquiryList';
import Csc from './Csc';
import CscMenu from './CscMenu';
import './Customerservice.css';
import CscLeft from './CscLeft';
import './Inquiry.css'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAngleLeft, faAngleRight, faAnglesRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Inquiry() {
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedItems, setPaginatedItems] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const [inquiries, setInquiries] = useState([]); // 문의 데이터 상태


    const existingInquiries = JSON.parse(localStorage.getItem('loginInfo')); // 로컬 스토리지에서 로그인 정보를 가져옴
    const userId = existingInquiries.id; // 사용자 ID

    // 데이터를 가져오는 useEffect 훅
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
                const userData = userResponse.data;
                if (userData && userData.inquries) {
                    setInquiries(userData.inquries);
                } else {
                    setInquiries([]); // 안전하게 빈 배열로 초기화
                }
            } catch (error) {
                console.error('데이터를 가져오는 중 오류 발생:', error);
                setInquiries([]); // 오류 발생 시 빈 배열로 초기화
            }
        };
        fetchData();
    }, [userId]);

    const itemsPerPage = 10;
    const maxPagesToShow = 10;


    // useEffect(() => {
    //     const query = new URLSearchParams(location.search);
    //     const page = parseInt(query.get('page')) || 1;
    //     const category = query.get('category') || 'ALL';
    //     setCurrentPage(page);
    //     setCurrentCategory(category);

    //     const filteredData = category === 'ALL' ? CscData : CscData.filter(item => item.classification === category);
    //     const startIndex = (page - 1) * itemsPerPage;
    //     const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);
    //     setPaginatedItems(filteredData.slice(startIndex, endIndex));
    // }, [location]);

    const totalNumberOfPages = Math.ceil(inquiries.length / itemsPerPage);

        useEffect(() => {
            const query = new URLSearchParams(location.search);
            const page = parseInt(query.get('page')) || 1;

            setCurrentPage(page);
            const startIndex = ([page - 1]) * itemsPerPage;
            const endIndex = Math.min(startIndex + itemsPerPage, inquiries.length);
            setPaginatedItems(inquiries.slice(startIndex, endIndex));
        }, [location, inquiries]);

    // const totalNumberOfPages = Math.ceil(
    //     (currentCategory === 'ALL' ? CscData : CscData.filter(item => item.classification === currentCategory)).length / itemsPerPage
    // );
    console.log('location.pathname=' + location.pathname);  // 현재 페이지의 URL을 출력 location.pathname=/ItemList/ItemDetail/1
    localStorage.setItem('currentUrl', location.pathname);  // 현재 페이지의 URL을 로컬스토리지에 저장


    const getPageNumbers = () => {
        const pageNumbers = [];
        const currentGroup = Math.floor((currentPage - 1) / maxPagesToShow);
        const startPage = currentGroup * maxPagesToShow + 1;
        const endPage = Math.min(totalNumberOfPages, startPage + maxPagesToShow - 1);

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
        console.log(pageNumbers);
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
                    <InquiryList inquiries = {inquiries} existingInquiries = {existingInquiries} />
                    <ul className="noticeNumber">
                        {currentPage > 1 && (
                            <>
                                <li><NavLink to={`/Inquiry?page=1`}><FontAwesomeIcon icon={faAnglesLeft} /></NavLink></li>
                                <li><NavLink to={`/Inquiry?page=${currentPage - 1}`}><FontAwesomeIcon icon={faAngleLeft} /></NavLink></li>
                            </>
                        )}
                        {getPageNumbers().map((pageNumber) => (
                            <li
                                key={pageNumber}
                                className={currentPage === pageNumber ? 'selected' : ''}
                            >
                                <NavLink
                                    to={`/Inquiry?page=${pageNumber}`}
                                >
                                    {pageNumber}
                                </NavLink>
                            </li>
                        ))}
                        {currentPage < totalNumberOfPages && (
                            <>
                                <li><NavLink to={`/Inquiry?page=${currentPage + 1}`}><FontAwesomeIcon icon={faAngleRight} /></NavLink></li>
                                <li><NavLink to={`/Inquiry?page=${totalNumberOfPages}`}><FontAwesomeIcon icon={faAnglesRight} /></NavLink></li>
                            </>
                        )}
                    </ul>
                    <div className='InquiryWriteBtn'>
                        <Link to='/Inquiry/InquiryWrite'>문의작성</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
