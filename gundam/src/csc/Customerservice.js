import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CscData from "./CscData";
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

    // function onPageClick(pageNum) {
    //     navigate(`?page=${pageNum}&category=${currentCategory}`);
    // }

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
                <h2 className="cscTitle"></h2>
                <div>
                    <ul className="CscMenu">
                        <CscMenu 
                            menuItem={[...new Set(CscData.map((val) => val.classification))]} 
                            setItem={setItem} 
                            currentCategory={currentCategory} 
                            navigate={navigate} 
                        />
                    </ul>
                    <div className="CscListTitle">
                        <div style={{ width: '100px'}}>분류</div>
                        <div style={{ width: '800px'}}>제목</div>
                    </div>
                    <div className="CscList">
                        {paginatedItems.map(item => (
                            <Csc key={item.id} item={item} />
                        ))}
                    </div>
                    <div className="cscPageNation">
                        {Array.from({ length: totalNumberOfPages }).map((_, index) => (
                            <Link
                                key={index}
                                to={`?page=${index + 1}&category=${currentCategory}`}
                                // onClick={() => onPageClick(index + 1)}
                            >
                                {index + 1}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
