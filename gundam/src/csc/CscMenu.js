// import CscData from "./CscData";
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';


// export default function CscMenu({ setItem, menuItem, filterItem }) {

//     const navigate = useNavigate();


//     function onPageClick(pageNum) {
//         // setCurrentPage(pageNum);
//         navigate(`?page=${pageNum}`)
//     }

//     console.log(menuItem);
//     console.log(menuItem[0]);
//     console.log(setItem);
//     console.log(filterItem);

//     return (
//         <>
//             <li onClick={() => setItem(CscData)}><Link to={`Csc?page=ALL`}>ALL</Link></li>
//             {menuItem.map((items, i) => (
//                 <li key={i} onClick={() => filterItem(items)}>
//                     <Link to={`page=${i + 2}`} onClick={() => onPageClick(i + 1)} >
//                         {items}
//                     </Link>
//                 </li>
//             ))}

//         </>
//     )
// }

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
            <li className={currentCategory === 'ALL' ? 'selected' : ''} onClick={() => handleCategoryClick('ALL')}>
                <Link to={`?page=1&category=ALL`}>ALL</Link>
            </li>
            {menuItem.map((item, i) => (
                <li key={i} className={currentCategory === item ? 'selected' : ''} onClick={() => handleCategoryClick(item)}>
                    <Link to={`?page=1&category=${item}`}>
                        {item}
                    </Link>
                </li>
            ))}
        </>
    )
}
