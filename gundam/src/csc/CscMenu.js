import React from 'react';
import { Link } from 'react-router-dom';
import CscData from "./CscData";

export default function CscMenu({ setItem, menuItem, currentCategory, navigate }) {
    const handleCategoryClick = (category) => {
        setItem(category === 'ALL' ? CscData : CscData.filter(item => item.classification === category));
        navigate(`?page=1&category=${category}`);
    };

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
