// import './Header.css';
// import HeaderMenu from './HeaderMenu';
// import HeaderMenuData from './HeaderMenuData';
// import { useState, useEffect } from 'react';
// import { useLocation, Routes, Route } from 'react-router-dom';
// import HeaderSearch from './HeaderSearch';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSignInAlt, faUser, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
// import ItemList from '../ItemList/ItemList';

// export default function Menu() {
//     const [visibleMenu, setVisibleMenu] = useState(null);
//     const [smallTopMenu, setSmallTopMenu] = useState(false);
//     const location = useLocation();

//     const scroll = () => {
//         if (window.scrollY > window.innerHeight * 0.3) {
//             setSmallTopMenu(true);
//         } else {
//             setSmallTopMenu(false);
//         }
//     };

//     const MenuToggle = (menu) => {
//         if (visibleMenu === menu) {
//             setVisibleMenu(null);
//         } else {
//             setVisibleMenu(menu);
//         }
//         scroll();
//     };

//     useEffect(() => {
//         window.addEventListener('scroll', scroll);

//         return () => {
//             window.removeEventListener('scroll', scroll);
//         };
//     }, []);

//     const handleLinkClick = () =>{
//         setVisibleMenu(null);
//     }

//     const isMainPage = location.pathname !== '/';

//     return (
//         <>
//             <div className={`h_main_container ${smallTopMenu ? 'smallHeadMenu' : ''} ${isMainPage ? 'noPosition' : ''}`}>
//                 <div className="h_menu_container">
//                     <div className={`h_menu ${smallTopMenu ? 'blackText' : ''}`} onClick={() => MenuToggle('headerMenu')}>건프라</div>
//                     <div className={`h_menu ${smallTopMenu ? 'blackText' : ''}`} onClick={() => MenuToggle('headerMenu1')}>애니프라</div>
//                     <div className={`h_menu ${smallTopMenu ? 'blackText' : ''}`} onClick={() => MenuToggle('headerMenu2')}>피규어</div>
//                     <div className={`h_menu ${smallTopMenu ? 'blackText' : ''}`} onClick={() => MenuToggle('etc')}>기타</div>
//                 </div>

//                 <div className="h_right_container">
//                     <div className={`h_right h_login ${smallTopMenu ? 'blackText' : ''}`}><a href="/"><FontAwesomeIcon icon={faSignInAlt} /> 로그인</a></div>
//                     <div className={`h_right h_mypage ${smallTopMenu ? 'blackText' : ''}`}><a href="/"><FontAwesomeIcon icon={faUser} /> 마이페이지</a></div>
//                     <div className={`h_right h_shopping ${smallTopMenu ? 'blackText' : ''}`}><a href="/"><FontAwesomeIcon icon={faShoppingCart} /> 장바구니</a></div>
//                     <div className={`h_right h_search ${smallTopMenu ? 'blackText' : ''}`} onClick={() => MenuToggle('headerSearch')}><FontAwesomeIcon icon={faSearch} /> 검색</div>
//                 </div>
//             </div>

//             {visibleMenu === 'headerMenu' && <HeaderMenu data={HeaderMenuData.headerMenu} smallTopMenu={smallTopMenu} onLinkClick={handleLinkClick} />}
//             {visibleMenu === 'headerMenu1' && <HeaderMenu data={HeaderMenuData.headerMenu1} smallTopMenu={smallTopMenu} onLinkClick={handleLinkClick} />}
//             {visibleMenu === 'headerMenu2' && <HeaderMenu data={HeaderMenuData.headerMenu2} smallTopMenu={smallTopMenu} onLinkClick={handleLinkClick} />}
//             {visibleMenu === 'etc' && <HeaderMenu data={HeaderMenuData.etc} smallTopMenu={smallTopMenu} onLinkClick={handleLinkClick} />}
//             {visibleMenu === 'headerSearch' && <HeaderSearch onLinkClick={handleLinkClick} />}
//         </>
//     );
// }


import './Menu.css';
import HeaderMenu from './HeaderMenu';
import HeaderMenuData from './HeaderMenuData';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUser, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Menu() {
    const [visibleMenu, setVisibleMenu] = useState(null);
    const [smallTopMenu, setSmallTopMenu] = useState(false);
    const [menuAnimating, setMenuAnimating] = useState(false); // 메뉴 애니메이션 상태 추가
    const [menuClosing, setMenuClosing] = useState(false); // 메뉴 닫기 애니메이션 상태 추가
    const location = useLocation();

    const scroll = () => {
        if (window.scrollY > window.innerHeight * 0.3) {
            setSmallTopMenu(true);
        } else {
            setSmallTopMenu(false);
        }
    };

    const MenuToggle = (menu) => {
        if (visibleMenu === menu) {
            setMenuClosing(true); // 메뉴 닫기 애니메이션 상태 설정
            setTimeout(() => {
                setVisibleMenu(null);
                setMenuAnimating(false);
                setMenuClosing(false); // 애니메이션 상태 초기화
            }, 500); // 애니메이션 지속 시간과 동일하게 설정
        } else {
            setVisibleMenu(menu);
            setMenuAnimating(true);
            setMenuClosing(false);
        }
        scroll();
    };

    useEffect(() => {
        window.addEventListener('scroll', scroll);

        return () => {
            window.removeEventListener('scroll', scroll);
        };
    }, []);

    const handleLinkClick = () => {
        setMenuClosing(true);
        setTimeout(() => {
            setVisibleMenu(null);
            setMenuAnimating(false);
            setMenuClosing(false);
        }, 500); // 애니메이션 지속 시간과 동일하게 설정
    };

    const isMainPage = location.pathname !== '/';
    const isLoginPage = location.pathname === '/Login';
    const isSignupPage = location.pathname === '/Login/Join'; // Check for Signup page

    // Return null if on Login or Signup page
    if (isLoginPage || isSignupPage) {
        return null;
    }
    return (
        <>
            <div className={`h_main_container ${smallTopMenu ? 'smallHeadMenu' : ''} ${isMainPage ? 'noPosition' : ''} ${isLoginPage ? 'isLoginPage' : ''}`}>
                <div className="h_menu_container">
                    <div className={`h_menu ${smallTopMenu ? 'blackText' : ''}`} onClick={() => MenuToggle('headerMenu')}>건프라</div>
                    <div className={`h_menu ${smallTopMenu ? 'blackText' : ''}`} onClick={() => MenuToggle('headerMenu1')}>애니프라</div>
                    <div className={`h_menu ${smallTopMenu ? 'blackText' : ''}`} onClick={() => MenuToggle('headerMenu2')}>피규어</div>
                    <div className={`h_menu ${smallTopMenu ? 'blackText' : ''}`} onClick={() => MenuToggle('etc')}>기타</div>
                </div>

                <div className="h_right_container">
                    <div className={`h_right h_login ${smallTopMenu ? 'blackText' : ''} `}><a href='/Login' className={`${isMainPage ? 'noPosition' : ''}`}><FontAwesomeIcon icon={faSignInAlt} /> 로그인</a></div>
                    <div className={`h_right h_mypage ${smallTopMenu ? 'blackText' : ''} `}><a href='/Login' className={`${isMainPage ? 'noPosition' : ''}`}><FontAwesomeIcon icon={faUser}  /> 마이페이지</a></div>
                    <div className={`h_right h_shopping ${smallTopMenu ? 'blackText' : ''} `}><a href='/Login' className={`${isMainPage ? 'noPosition' : ''}`}><FontAwesomeIcon icon={faShoppingCart} /> 장바구니</a></div>
                    <div className={`h_right h_search ${smallTopMenu ? 'blackText' : ''} `}  onClick={() => MenuToggle('headerSearch')} ><FontAwesomeIcon icon={faSearch} /> 검색</div>
                </div>
            </div>

            {/* 메뉴 애니메이션 상태에 따른 클래스 추가 */}
            {visibleMenu === 'headerMenu' && <HeaderMenu data={HeaderMenuData.headerMenu} smallTopMenu={smallTopMenu} onLinkClick={handleLinkClick} menuAnimating={menuAnimating} menuClosing={menuClosing} />}
            {visibleMenu === 'headerMenu1' && <HeaderMenu data={HeaderMenuData.headerMenu1} smallTopMenu={smallTopMenu} onLinkClick={handleLinkClick} menuAnimating={menuAnimating} menuClosing={menuClosing} />}
            {visibleMenu === 'headerMenu2' && <HeaderMenu data={HeaderMenuData.headerMenu2} smallTopMenu={smallTopMenu} onLinkClick={handleLinkClick} menuAnimating={menuAnimating} menuClosing={menuClosing} />}
            {visibleMenu === 'etc' && <HeaderMenu data={HeaderMenuData.etc} smallTopMenu={smallTopMenu} onLinkClick={handleLinkClick} menuAnimating={menuAnimating} menuClosing={menuClosing} />}
            {visibleMenu === 'headerSearch' && <HeaderSearch onLinkClick={handleLinkClick} smallTopMenu={smallTopMenu} menuAnimating={menuAnimating} menuClosing={menuClosing} />}
        </>
    );
}
