import { faCableCar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { useRef, useState, useEffect } from 'react';
import HeaderMenuSmallTop from "./HeaderMenuSmallTop";
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
        const handleScroll = () => {
            const footer = document.querySelector('.footer'); // Ensure this selector matches your footer element
            const footerRect = footer.getBoundingClientRect(); // Check if footer exists

            if (footer && window.scrollY > window.innerHeight * 0.5) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }

            if (footer) {
                if (window.innerHeight - footerRect.top > 0) {
                    setBottomOffset(window.innerHeight - footerRect.top); // Adjust the offset to avoid overlapping
                } else {
                    setBottomOffset(20);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isMainPage = location.pathname !== '/';
    
    if (location.pathname.includes('/Login')) return null;


    return (
        <div ref={topRef}>
            <div className={`Every ${menuSmallTop ? 'smallThing' : ''} ${isMainPage ? 'noPosition' : ''}`}>
                <a href='/'><h1 className="logo">logo</h1></a>
                {showButton && (
                    <FontAwesomeIcon icon={faCableCar}
                    // <img src='./image/topbtn.png'
                        alt='topBtn' className='topBtn'
                        onClick={scrollTop}
                        style={{ bottom: `${bottomOffset}px`, transition: 'all 0.3s', cursor: 'pointer' }} 
                        />
                )}
            </div>
        </div>
    );
}
