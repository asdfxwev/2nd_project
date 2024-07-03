// import React, { useRef, useState, useEffect } from 'react';
// import HeaderMenuSmallTop from "./HeaderMenuSmallTop";
// import './Button.css';
// import {  useLocation } from 'react-router-dom';

// export default function Button() {
//     const menuSmallTop = HeaderMenuSmallTop();
//     const location = useLocation();
//     const [bottomOffset, setBottomOffset] = useState(30);
//     const topRef = useRef(null);
//     const [showButton, setShowButton] = useState(false);

//     function scrollTop() {
//         topRef.current.scrollIntoView({ behavior: 'smooth' });
//     }

//     useEffect(() => {
//         const handleScroll = () => {
//             const footer = document.querySelector('.footer'); // Ensure this selector matches your footer element
//             if (!footer) return;
//             const footerRect = footer.getBoundingClientRect(); // Check if footer exists

//             if (footer && window.scrollY > window.innerHeight * 0.5) {
//                 setShowButton(true);
//             } else {
//                 setShowButton(false);
//             }

//             if (footer) {
//                 if (window.innerHeight - footerRect.top > 0) {
//                     setBottomOffset(window.innerHeight - footerRect.top); // Adjust the offset to avoid overlapping
//                 } else {
//                     setBottomOffset(20);
//                 }
//             }
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const isMainPage = location.pathname !== '/';
    
//     if (location.pathname.includes('/Login')) return null;


//     return (
//         <div ref={topRef}>
//             <div className={`Every ${menuSmallTop ? 'smallThing' : ''} ${isMainPage ? 'noPosition' : ''}`}>
//                 <a href='/'><h1 className="logo">logo</h1></a>
//                 {showButton && (
//                     <img src='./image/underGundam.png'
//                         alt='topBtn' className='topBtn'
//                         onClick={scrollTop}
//                         style={{ bottom: `${bottomOffset}px`, transition: 'all 0.3s', cursor: 'pointer' }} 
//                         />
//                 )}
//             </div>
//         </div>
//     );
// }


import React, { useRef, useState, useEffect } from 'react';
import HeaderMenuSmallTop from "./HeaderMenuSmallTop";
import './Button.css';
import { useLocation } from 'react-router-dom';

export default function Button() {
    const menuSmallTop = HeaderMenuSmallTop();
    const location = useLocation();
    const [bottomOffset, setBottomOffset] = useState(30);
    const topRef = useRef(null);
    const [showButton, setShowButton] = useState(false);
    const [imageSrc, setImageSrc] = useState('./image/underGundam.png'); // 초기 이미지 경로

    function scrollTop() {
        topRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    function handleClick() {
        // 클릭할 때 이미지 경로를 변경
        const newImageSrc = imageSrc === './image/underGundam.png' ? './image/upperGundam.png' : './image/underGundam.png';
        setImageSrc(newImageSrc);
    }

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('.footer'); // Ensure this selector matches your footer element
            if (!footer) return;
            const footerRect = footer.getBoundingClientRect(); // Check if footer exists

            if (window.scrollY < 50) {
                // 맨 위로 스크롤했을 때 이미지를 초기화
                setImageSrc('./image/underGundam.png');
            }

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
                    <img 
                        src={imageSrc}
                        alt='topBtn' 
                        className='topBtn'
                        onClick={() => {
                            scrollTop();
                            handleClick();
                        }}
                        style={{ bottom: `${bottomOffset}px`, transition: 'all 0.3s', cursor: 'pointer', zIndex:'15' }} 
                    />
                )}
            </div>
        </div>
    );
}
