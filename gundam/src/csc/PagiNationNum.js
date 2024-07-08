
// import { useState, useEffect } from "react";
// import { NavLink, useNavigate, useLocation } from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAnglesLeft, faAngleLeft, faAngleRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

// export default function PagiNationNum({ itemsPerPage, maxPagesToShow, object }) {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [paginatedItems, setPaginatedItems] = useState([]);
//     const navigate = useNavigate();
//     const location = useLocation();

//     const totalNumberOfPages = Math.ceil(object.length / itemsPerPage);

//     useEffect(() => {
//         const startIndex = (currentPage - 1) * itemsPerPage;
//         const endIndex = startIndex + itemsPerPage;
//         setPaginatedItems(object.slice(startIndex, endIndex));
//     }, [currentPage, object, itemsPerPage]);

//     const getPageNumbers = () => {
//         const pageNumbers = [];
//         const currentGroup = Math.floor((currentPage - 1) / maxPagesToShow);
//         const startPage = currentGroup * maxPagesToShow + 1;
//         const endPage = Math.min(totalNumberOfPages, startPage + maxPagesToShow - 1);

//         for (let i = startPage; i <= endPage; i++) {
//             pageNumbers.push(i);
//         }

//         return pageNumbers;
//     };

//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     return (
//         <>
//             <ul className="noticeNumber">
//                 {currentPage > 1 && (
//                     <>
//                         <li><NavLink to={`${navigation}1`}><FontAwesomeIcon icon={faAnglesLeft} /></NavLink></li>
//                         <li><NavLink to={`${navigation}${currentPage - 1}`}><FontAwesomeIcon icon={faAngleLeft} /></NavLink></li>
//                         <li>
//                             <div onClick={() => handlePageChange(1)}>
//                                 <FontAwesomeIcon icon={faAnglesLeft} />
//                             </div>
//                         </li>
//                         <li>
//                             <div onClick={() => handlePageChange(currentPage - 1)}>
//                                 <FontAwesomeIcon icon={faAngleLeft} />
//                             </div>
//                         </li>
//                     </>
//                 )}
//                 {getPageNumbers().map((pageNumber) => (
//                     <li
//                         key={pageNumber}
//                         className={currentPage === pageNumber ? 'selected' : ''}
//                     >
//                         <div onClick={() => handlePageChange(pageNumber)}>
//                             {pageNumber}
//                         </div>
//                     </li>
//                 ))}
//                 {currentPage < totalNumberOfPages && (
//                     <>
//                         <li>
//                             <div onClick={() => handlePageChange(currentPage + 1)}>
//                                 <FontAwesomeIcon icon={faAngleRight} />
//                             </div>
//                         </li>
//                         <li>
//                             <div onClick={() => handlePageChange(totalNumberOfPages)}>
//                                 <FontAwesomeIcon icon={faAnglesRight} />
//                             </div>
//                         </li>
//                     </>
//                 )}
//             </ul>
//         </>
//     )
// }


import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAngleLeft, faAngleRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

export default function PagiNationNum({ itemsPerPage, maxPagesToShow, object }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedItems, setPaginatedItems] = useState([]);

    const totalNumberOfPages = Math.ceil(object.length / itemsPerPage);

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setPaginatedItems(object.slice(startIndex, endIndex));
    }, [currentPage, object, itemsPerPage]);

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

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <ul className="noticeNumber">
                {currentPage > 1 && (
                    <>
                        <li>
                            <button onClick={() => handlePageChange(1)}>
                                <FontAwesomeIcon icon={faAnglesLeft} />
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handlePageChange(currentPage - 1)}>
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </button>
                        </li>
                    </>
                )}
                {getPageNumbers().map((pageNumber) => (
                    <li
                        key={pageNumber}
                        className={currentPage === pageNumber ? 'selected' : ''}
                    >
                        <button onClick={() => handlePageChange(pageNumber)}>
                            {pageNumber}
                        </button>
                    </li>
                ))}
                {currentPage < totalNumberOfPages && (
                    <>
                        <li>
                            <button onClick={() => handlePageChange(currentPage + 1)}>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handlePageChange(totalNumberOfPages)}>
                                <FontAwesomeIcon icon={faAnglesRight} />
                            </button>
                        </li>
                    </>
                )}
            </ul>
        </>
    )
}
