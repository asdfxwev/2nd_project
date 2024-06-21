import React, { useRef, useState, useEffect } from 'react';
import HeaderMenuSmallTop from "./HeaderMenuSmallTop"
import './Button.css';

export default function Button() {
    const menuSmallTop = HeaderMenuSmallTop();

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

    return (
        <div  ref={topRef}>
            <div className={`Every ${menuSmallTop ? 'smallThing' : ''}`}>
                <h1 className="logo"><a href="/">logo</a></h1>
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