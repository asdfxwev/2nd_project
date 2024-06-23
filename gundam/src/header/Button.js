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

    const topRef = useRef(null);
    const [showButton, setShowButton] = useState(false);

    function scrollTop() {
        topRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > window.innerHeight * .5) {
                setShowButton(true);
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

    return (
        <div ref={topRef}>
            <div className={`Every ${menuSmallTop ? 'smallThing' : ''} ${isMainPage ? 'noPosition' : ''}`}>
            <Link to='/'><h1 className="logo">logo</h1></Link>
                {showButton && (
                    <img src='./image/topbtn.png'
                        alt='topBtn' className='topBtn'
                        onClick={scrollTop}
                        style={{ transition: 'all 1s', cursor: "pointer" }} />
                )}
                <hr />
            </div>


        </div>
    );
}