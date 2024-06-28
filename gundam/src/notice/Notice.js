import NoticeData from "./NoticeData";
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Notice.css';
import NoticeDelivery from "./NoticeDelivery";

export default function Notice() {
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedItems, setPaginatedItems] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const itemsPerPage = 15;
    const totalNumberOfPages = Math.ceil(NoticeData.length / itemsPerPage);

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const page = parseInt(query.get('page')) || 1;
        setCurrentPage(page);
    }, [location.search]);

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, NoticeData.length);
        const paginatedItems = NoticeData.slice(startIndex, endIndex);
        setPaginatedItems(paginatedItems);
    }, [currentPage]);

    // function onPageClick(pageNum) {
    //     navigate(`/Notice?page=${pageNum}`);
    // }

    return (
        <div className="Notice">
            <h2 className="h2Notice" style={{ textAlign: 'center' }}>공지사항</h2>

            <div style={{ height: '50px' }} className="noticeTitleGrid">
                <div style={{ width: '220px' }}>분류</div>
                <div style={{ width: '1100px' }}>제목</div>
                <div style={{ width: '220px' }}>날짜</div>
            </div>
            {paginatedItems.map(noticeNum => (
                <NoticeDelivery key={noticeNum.id} noticeNum={noticeNum} />
            ))}

            <ul className="noticeNumber">
                {Array.from({ length: totalNumberOfPages }).map((_, index) => (
                    <NavLink
                        key={index}
                        to={`/Notice?page=${index + 1}`}
                        // onClick={() => onPageClick(index + 1)}
                    >
                        <li
                            className={currentPage === index + 1 ? 'selected' : ''}
                        >
                            {index + 1}
                        </li>
                    </NavLink>
                ))}
            </ul>
        </div>
    );
}
