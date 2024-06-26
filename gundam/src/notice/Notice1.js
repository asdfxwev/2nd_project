import NoticeData1 from "./NoticeData1";
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faChevronLeft, faAngleRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import './Notice.css';
import NoticeDelivery1 from "./NoticeDelivery1";



export default function Notice() {

    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedItems, setPaginatedItems] = useState([]);
    const navigate = useNavigate();

    const itemsPerPage = 15;

    const totalNumberOfPages = Math.ceil(NoticeData1.length / itemsPerPage);

    function onPageClick(pageNum) {
        setCurrentPage(pageNum);
        navigate(`/Notice?page${pageNum}`)
    }

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, NoticeData1.length);
        const paginatedItems = NoticeData1.slice(startIndex, endIndex);
        setPaginatedItems(paginatedItems);
    }, [currentPage])

    console.log(paginatedItems);

    return (
        <div className="Notice">
            <h2 className="h2Notice">공지사항</h2>

            <div style={{ height: '50px' }} className="noticeTitleGrid">
                <div style={{ width: '220px' }}>분류</div>
                <div style={{ width: '1100px' }}>제목</div>
                <div style={{ width: '220px' }}>날짜</div>
            </div>
            {paginatedItems.map(noticeNum => (
                <NoticeDelivery1 noticeNum={noticeNum} />
            ))}


            <ul className="noticeNumber">
                <li><FontAwesomeIcon icon={faAnglesLeft} /></li>
                <li><FontAwesomeIcon icon={faChevronLeft} /></li>
                {Array.from({ length: totalNumberOfPages }).map((_, index) => (
                    <li
                        key={index}
                        className={currentPage === index + 1  ? 'selected' : ''}
                        onClick={() => onPageClick(`item${index + 1}`)}
                    >
                        <NavLink
                            to={`/Notice?page${index + 1}`}
                            onClick={() => onPageClick(index + 1)}
                        >
                            {index + 1}
                        </NavLink>
                    </li>
                ))}
                <li><FontAwesomeIcon icon={faAngleRight} /></li>
                <li><FontAwesomeIcon icon={faAnglesRight} /></li>
            </ul>
        </div>
    )
}