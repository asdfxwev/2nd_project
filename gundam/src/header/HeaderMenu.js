// import HeaderMenuSmallTop from "./HeaderMenuSmallTop"
// import './HeaderMenu.css'


// export default function HeaderMenu4(props) {
//     const menuSmallTop = HeaderMenuSmallTop();

//     return (
//         <div className={`detailMenu ${menuSmallTop ? 'smallMenu' : ''}`}>
//             <div className="reservation"><a href="/">예약</a></div>
//             <div className="popular"><a href="/">인기</a></div>
//             <div className="every"><a href="/">전체상품</a></div>
//             <div className="brand"><a href="/">공구/데칼/베이스</a></div>
//             <div className="art"><a href="/">캔디/캡슐토이</a></div>
//             {props.brand4.map((item, i) => <div key={i} className={item.id}><a href="/">{item.name}</a></div>)}
//             {props.art4.map((item, i) => <div key={i} className={item.id}><a href="/">{item.name}</a></div>)}
//             {props.brand14.map((item, i) => <div key={i} className={item.id}><a href="/">{item.name}</a></div>)}
//             <div className="brands"><a href="/">그 외</a></div>
//             <div className="img7"><a href="/"></a></div>
//             <div className="img77"><a href="/">원피스 카드게임 - 밀짚모자 일당</a></div>
//             <div className="img8"><a href="/"></a></div>
//             <div className="img88"><a href="/">G-MAKER상품</a></div>
//         </div>
//     )
// }
// import React from 'react';
// import HeaderMenuSmallTop from "./HeaderMenuSmallTop"
// import './HeaderMenu.css'
// import { Link, Routes, Route } from 'react-router-dom';
// import './Header.css'
// import ItemList?page=1 from './../ItemList?page=1/ItemList?page=1';


// const HeaderMenu = ({ data }) => {
//     const menuSmallTop = HeaderMenuSmallTop();

//     return (
//         <>
//             {data.map((menu, index) => (
//                 <div className={`detailMenu ${menuSmallTop ? 'smallMenu' : ''}`}>
//                     {menu.menu.map((menu) => (
//                         <div className={menu.id}><Link to='/ItemList?page=1'>{menu.name}</Link></div>
//                     ))}

//                     {menu.items.map((item, idx) => (
//                         <div key={idx} className={item.id}><Link to='/ItemList?page=1'>{item.name}</Link></div>
//                     ))}
//                     {menu.itemss.map((item, idx) => (
//                         <div key={idx} className={item.id}><Link to='/ItemList?page=1'>{item.name}</Link></div>
//                     ))}
//                     {menu.itemsss && menu.itemsss.map((item, idex) => (
//                         <div key={idex} className={item.id}><Link to='/ItemList?page=1'>{item.name}</Link></div>
//                     ))}
//                     {menu.itemssss && menu.itemssss.map((item, idex) => (
//                         <div key={idex} className={item.id}><Link to='/ItemList?page=1'>{item.name}</Link></div>
//                     ))}
//                     {menu.image.map((image, i) => (
//                         <div key={i} className={image.id}><Link to='/ItemList?page=1'>{image.name}</Link></div>
//                     ))}
//                 </div>
//             ))}
//         </>
//     );
// };

// export default HeaderMenu;






import React from 'react';
import './HeaderMenu.css';
import { Link, useLocation } from 'react-router-dom';


const HeaderMenu = ({ data, smallTopMenu, onLinkClick, menuAnimating, menuClosing }) => {
    const location = useLocation();

    const isMainPage = location.pathname !== '/';

    return (
        <>
            {data.map((menu, index) => (
                <div key={index} className={`detailMenu ${smallTopMenu ? 'smallMenu' : ''} ${isMainPage ? 'absolute' : ''} ${menuAnimating ? 'menuAnimation' : ''} ${menuClosing ? 'menuClosing' : ''}`}>
                    {menu.menu.map((item, idx) => (
                        <div key={idx} className={item.id}><a href='/ItemList?page=1' onClick={onLinkClick}>{item.name}</a></div>
                    ))}

                    {menu.items.map((item, idx) => (
                        <div key={idx} className={item.id}><Link to='/ItemList?page=1' onClick={onLinkClick}>{item.name}</Link></div>
                    ))}
                    {menu.itemss.map((item, idx) => (
                        <div key={idx} className={item.id}><Link to='/ItemList?page=1' onClick={onLinkClick}>{item.name}</Link></div>
                    ))}
                    {menu.itemsss && menu.itemsss.map((item, idx) => (
                        <div key={idx} className={item.id}><Link to='/ItemList?page=1' onClick={onLinkClick}>{item.name}</Link></div>
                    ))}
                    {menu.itemssss && menu.itemssss.map((item, idx) => (
                        <div key={idx} className={item.id}><Link to='/ItemList?page=1' onClick={onLinkClick}>{item.name}</Link></div>
                    ))}
                    {menu.image.map((image, idx) => (
                        <div key={idx} className={image.id}><Link to='/ItemList?page=1' onClick={onLinkClick}>{image.name}</Link></div>
                    ))}
                </div>
            ))}
        </>
    );
};

export default HeaderMenu;
