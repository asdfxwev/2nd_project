import './Header.css';
import HeaderMenu from './HeaderMenu';
import HeaderMenuData from './HeaderMenuData';
import { useState, useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUser, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import ItemList from '../ItemList/ItemList';

export default function Menu() {
    const [visibleMenu, setVisibleMenu] = useState(null);
    const [smallTopMenu, setSmallTopMenu] = useState(false);
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
            setVisibleMenu(null);
        } else {
            setVisibleMenu(menu);
        }
        scroll();
    };

    useEffect(() => {
        window.addEventListener('scroll', scroll);

        return () => {
            window.removeEventListener('scroll', scroll);
        };
    }, []);

    const handleLinkClick = () =>{
        setVisibleMenu(null);
    }

    const isMainPage = location.pathname !== '/';

    return (
        <>
            <div className={`h_main_container ${smallTopMenu ? 'smallHeadMenu' : ''} ${isMainPage ? 'noPosition' : ''}`}>
                <div className="h_menu_container">
                    <div className={`h_menu ${smallTopMenu ? 'blackText' : ''}`} onClick={() => MenuToggle('headerMenu')}>건프라</div>
                    <div className={`h_menu ${smallTopMenu ? 'blackText' : ''}`} onClick={() => MenuToggle('headerMenu1')}>애니프라</div>
                    <div className={`h_menu ${smallTopMenu ? 'blackText' : ''}`} onClick={() => MenuToggle('headerMenu2')}>피규어</div>
                    <div className={`h_menu ${smallTopMenu ? 'blackText' : ''}`} onClick={() => MenuToggle('etc')}>기타</div>
                </div>

                <div className="h_right_container">
                    <div className={`h_right h_login ${smallTopMenu ? 'blackText' : ''}`}><a href="/"><FontAwesomeIcon icon={faSignInAlt} /> 로그인</a></div>
                    <div className={`h_right h_mypage ${smallTopMenu ? 'blackText' : ''}`}><a href="/"><FontAwesomeIcon icon={faUser} /> 마이페이지</a></div>
                    <div className={`h_right h_shopping ${smallTopMenu ? 'blackText' : ''}`}><a href="/"><FontAwesomeIcon icon={faShoppingCart} /> 장바구니</a></div>
                    <div className={`h_right h_search ${smallTopMenu ? 'blackText' : ''}`} onClick={() => MenuToggle('headerSearch')}><FontAwesomeIcon icon={faSearch} /> 검색</div>
                </div>
            </div>

            {visibleMenu === 'headerMenu' && <HeaderMenu data={HeaderMenuData.headerMenu} smallTopMenu={smallTopMenu} onLinkClick={handleLinkClick} />}
            {visibleMenu === 'headerMenu1' && <HeaderMenu data={HeaderMenuData.headerMenu1} smallTopMenu={smallTopMenu} onLinkClick={handleLinkClick} />}
            {visibleMenu === 'headerMenu2' && <HeaderMenu data={HeaderMenuData.headerMenu2} smallTopMenu={smallTopMenu} onLinkClick={handleLinkClick} />}
            {visibleMenu === 'etc' && <HeaderMenu data={HeaderMenuData.etc} smallTopMenu={smallTopMenu} onLinkClick={handleLinkClick} />}
            {visibleMenu === 'headerSearch' && <HeaderSearch onLinkClick={handleLinkClick} />}
        </>
    );
}
