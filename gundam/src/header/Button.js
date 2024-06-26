import React, { useRef, useState, useEffect } from 'react';
import HeaderMenuSmallTop from "./HeaderMenuSmallTop"
import './Button.css';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import Main from '../main/Main';
import App from './../App';
import MainComponent from '../main/MainComponent';

export default function Button() {
    const menuSmallTop = HeaderMenuSmallTop();
    const location = useLocation();
    const [bottomOffset, setBottomOffset] = useState(30);
    const topRef = useRef(null);
    const [showButton, setShowButton] = useState(false);

    function scrollTop() {
        topRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        const footer = document.querySelectorAll('.footer'); // 푸터 요소 선택
        console.log(footer);
        // console.log(footer.innerHeight);
        // const footerRect = footer.(); // 푸터의 위치 및 크기 정보 가져오기
        function handleScroll() {
            if (window.scrollY > window.innerHeight * .5) {
                setShowButton(true);
                if (window.innerHeight * .1 < window.innerHeight) {
                    setBottomOffset(window.innerHeight + 20);
                } else {
                    setBottomOffset(20);
                }
            } else {
                setShowButton(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isMainPage = location.pathname !== '/';
    const isLoginPage = location.pathname === '/Login';
    const isSignupPage = location.pathname === '/Login/Join';

    if (isLoginPage || isSignupPage) {
        return null;
    }
    return (
        <div ref={topRef}>
            <div className={`Every ${menuSmallTop ? 'smallThing' : ''} ${isMainPage ? 'noPosition' : ''} ${isLoginPage ? 'isLoginPage' : ''}`}>
                <a href='/'><h1 className="logo">logo</h1></a>
                {showButton && (
                    <img src='./image/topbtn.png'
                        alt='topBtn' className='topBtn'
                        onClick={scrollTop}
                        style={{ transition: 'all 3s', cursor: "pointer" }} />
                )}
            </div>


        </div>
    );
}