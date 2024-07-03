import NoticeData from "./NoticeData";
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Notice.css';
import NoticeDelivery from "./NoticeDelivery";
import CscLeft from "./CscLeft";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAngleLeft, faAngleRight, faAnglesRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Notice() {
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredItems, setFilteredItems] = useState(NoticeData);
    const [paginatedItems, setPaginatedItems] = useState([]);
    const [content, setContent] = useState('');
    const location = useLocation();

    const itemsPerPage = 10;
    const totalNumberOfPages = Math.ceil(filteredItems.length / itemsPerPage);
    const maxPagesToShow = 10;

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const page = parseInt(query.get('page')) || 1;
        setCurrentPage(page);
    }, [location.search]);

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, filteredItems.length);
        const paginatedItems = filteredItems.slice(startIndex, endIndex);
        setPaginatedItems(paginatedItems);
    }, [currentPage, filteredItems]);

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
    

    const onNoticeChange = (e) => {
        const searchContent = e.target.value;
        setContent(searchContent);

        const filtered = NoticeData.filter(item =>
            item.title.toLowerCase().includes(searchContent.toLowerCase())
        );
        setFilteredItems(filtered);
        setCurrentPage(1);
    };

    const onNoticeKeyDown = (e) => {
        if (e.keyCode === 13) {
            onNoticeSubmit(e);
        }
    };

    const onNoticeSubmit = (e) => {
        e.preventDefault();
        onNoticeChange({ target: { value: content } });
    };

    return (
        <section className="cscNoticeContiner">
            <CscLeft />
            <div className="cscNoticeMain">
                <h2 className="h2Notice">공지사항</h2>
                <form className="noticeForm" onSubmit={onNoticeSubmit}>
                    <input type="text" value={content} onChange={onNoticeChange} onKeyDown={onNoticeKeyDown} />
                    <button type="submit">검색<FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                </form>
                <div style={{ height: '50px' }} className="noticeTitleGrid">
                    <div style={{ width: '220px' }}>분류</div>
                    <div style={{ width: '1100px' }}>제목</div>
                    <div style={{ width: '220px' }}>날짜</div>
                </div>
                {paginatedItems.map(noticeNum => (
                    <NoticeDelivery key={noticeNum.id} noticeNum={noticeNum} />
                ))}

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
            </div>
        </section>
    );
}
