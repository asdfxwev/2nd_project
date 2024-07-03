import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import CscData from "./CscData";

export default function CscMenu({ setItem, menuItem, currentCategory, navigate }) {
    
    const handleCategoryClick = (category) => {
        setItem(category === 'ALL' ? CscData : CscData.filter(item => item.classification === category));
        navigate(`?page=1&category=${category}`);
    };
    const location = useLocation();  // 현재 페이지의 URL을 가져옴
    console.log('location.pathname='+location.pathname);  // 현재 페이지의 URL을 출력 location.pathname=/ItemList/ItemDetail/1
    localStorage.setItem('currentUrl', location.pathname);  // 현재 페이지의 URL을 로컬스토리지에 저장


    return (
        <>
            <li className={currentCategory === 'ALL' ? 'cscSelect' : ''} onClick={() => handleCategoryClick('ALL')}>
                <Link to={`?page=1&category=ALL`}>ALL</Link>
            </li>
            {menuItem.map((item, i) => (
                <li key={i} className={currentCategory === item ? 'cscSelect' : ''} onClick={() => handleCategoryClick(item)}>
                    <Link to={`?page=1&category=${item}`}>
                        {item}
                    </Link>
                </li>
            ))}
        </>
    )
}
