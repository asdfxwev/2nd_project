import NoticeData from "./NoticeData";
import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faChevronLeft, faAngleRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import './Notice.css';
import NoticeDelivery from "./NoticeDelivery";



export default function Notice() {

    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedItems, setPaginatedItems] = useState([]);
    const navigate = useNavigate();

    const itemsPerPage = 15;

    const totalNumberOfPages = Math.ceil(NoticeData.length / itemsPerPage);

    function onPageClick(pageNum) {
        setCurrentPage(pageNum);
        navigate(`/Notice?page${pageNum}`)
    }

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, NoticeData.length);
        const paginatedItems = NoticeData.slice(startIndex, endIndex);
        setPaginatedItems(paginatedItems);
    }, [currentPage])

    console.log(paginatedItems);

    return (
        <div className="Notice">
            <h2 className="h2Notice" style={{textAlign:'center'}}>공지사항</h2>

            <div style={{ height: '50px' }} className="noticeTitleGrid">
                <div style={{ width: '220px' }}>분류</div>
                <div style={{ width: '1100px' }}>제목</div>
                <div style={{ width: '220px' }}>날짜</div>
            </div>
            {paginatedItems.map(noticeNum => (
                <NoticeDelivery noticeNum={noticeNum} />
            ))}


            <ul className="noticeNumber">
                {Array.from({ length: totalNumberOfPages }).map((_, index) => (
                    <NavLink
                        to={`/Notice?page${index + 1}`}
                        onClick={() => onPageClick(index + 1)}
                    >
                        <li
                            key={index}
                            className={currentPage === index + 1 ? 'selected' : ''}
                        >
                            {index + 1}
                        </li>
                    </NavLink>
                ))}
            </ul>
        </div >
    )
}