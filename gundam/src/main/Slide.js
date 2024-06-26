// // // // import React, { useEffect, useState } from 'react';
// // // // import './slide.css';


// // // // export default function Slider() {
// // // //     const slideImages = [
// // // //         { id: 'slideImage1', name: './image/slide1.jpg', alts: 'img1' },
// // // //         { id: 'slideImage2', name: './image/slide2.jpg', alts: 'img2' },
// // // //         { id: 'slideImage3', name: './image/slide3.jpg', alts: 'img3' },
// // // //     ];
// // // //     let slide_idx = 0                      // 현재 슬라이드 인덱스.

// // // //     let main_container = document.querySelectorAll('.main_container'),
// // // //         slide_list = document.querySelectorAll('.slide_list'),
// // // //         li = document.querySelectorAll('.slides'),
// // // //         bBtn = document.querySelectorAll('.backBtn');
// // // //         fBtn = document.querySelector('.forwardBtn');

// // // //     function activeSlide() {
// // // //         slide_idx %= li.length;
// // // //         slide_list.style.left = `${-slide_idx * 100}%`;

// // // //         bBtn.classList.remove('nonVisible');
// // // //         fBtn.classList.remove('nonVisible');
// // // //         if (slide_idx <= 0) {
// // // //             bBtn.classList.add('nonVisible');
// // // //         } else if (slide_idx >= li.length - 1) {
// // // //             fBtn.classList.add('nonVisible');
// // // //         }
// // // //     }


// // // //     const slide_container = document.querySelectorAll('.slide_container');
// // // //     let stop;

// // // //     slide_container.addEventListener('mouseenter', () => {
// // // //         clearInterval(stop);
// // // //     });

// // // //     slide_container.addEventListener('mouseleave', () => {
// // // //         stop = setInterval((() => {
// // // //             slide_idx++;
// // // //             activeSlide();
// // // //         }), 2000);
// // // //     });


// // // //     return (
// // // //         <>
// // // //             <section style={{ height: '100vh'}}>
// // // //                 <div className="main_container">
// // // //                     <div className="slide_container">
// // // //                         <ul className="slide_list">
// // // //                             {slideImages.map((image, i) => (
// // // //                                 <li key={i} className="slides"><img src={image.name} alt={image.alts} className={image.id} /></li>
// // // //                             ))}
// // // //                         </ul>
// // // //                     </div>
// // // //                     <img className="backBtn" src="./image/left_btn.png" alt="leftBtn" />
// // // //                     <img className="forwardBtn" src="./image/right_btn.png" alt="rightBtn" />
// // // //                 </div>
// // // //             </section>
// // // //         </>
// // // //     );
// // // // }


// // // // import React, { useEffect, useState, useRef } from 'react';
// // // // import './slide.css';

// // // // export default function Slider() {
// // // //     const slideImages = [
// // // //         { id: 'slideImage1', name: './image/slide1.jpg', alts: 'img1' },
// // // //         { id: 'slideImage2', name: './image/slide2.jpg', alts: 'img2' },
// // // //         { id: 'slideImage3', name: './image/slide3.jpg', alts: 'img3' },
// // // //     ];

// // // //     const [slideIdx, setSlideIdx] = useState(0);
// // // //     const slideRef = useRef();

// // // //     useEffect(() => {
// // // //         function activeSlide() {
// // // //             slideRef.current.style.left = `${-slideIdx * 100}%`;
// // // //         }

// // // //         activeSlide();
// // // //     }, [slideIdx]);

// // // //     useEffect(() => {
// // // //         const interval = setInterval(() => {
// // // //             setSlideIdx((prevIdx) => (prevIdx + 1) % slideImages.length);
// // // //         }, 2000);

// // // //         return () => clearInterval(interval);
// // // //     }, []);

// // // //     const handleNext = () => {
// // // //         setSlideIdx((prevIdx) => (prevIdx + 1) % slideImages.length);
// // // //     };

// // // //     const handlePrev = () => {
// // // //         setSlideIdx((prevIdx) => (prevIdx - 1 + slideImages.length) % slideImages.length);
// // // //     };

// // // //     return (
// // // //         <section style={{ height: '100vh' }}>
// // // //             <div className="main_container">
// // // //                 <div className="slide_container" ref={slideRef}>
// // // //                     <ul className="slide_list" >
// // // //                         {slideImages.map((image, i) => (
// // // //                             <li key={i} className="slides">
// // // //                                 <img src={image.name} alt={image.alts} className={image.id} />
// // // //                             </li>
// // // //                         ))}
// // // //                     </ul>
// // // //                 </div>
// // // //                 <img
// // // //                     className={`backBtn ${slideIdx === 0 ? 'nonVisible' : ''}`}
// // // //                     src="./image/left_btn.png"
// // // //                     alt="leftBtn"
// // // //                     onClick={handlePrev}
// // // //                 />
// // // //                 <img
// // // //                     className={`forwardBtn ${slideIdx === slideImages.length - 1 ? 'nonVisible' : ''}`}
// // // //                     src="./image/right_btn.png"
// // // //                     alt="rightBtn"
// // // //                     onClick={handleNext}
// // // //                 />
// // // //             </div>
// // // //         </section>
// // // //     );
// // // // }


// // // // import React, { useEffect, useState, useRef } from 'react';
// // // // import './slide.css';

// // // // export default function Slider() {
// // // //     const slideImages = [
// // // //         { id: 'slideImage1', name: './image/slide1.jpg', alts: 'img1' },
// // // //         { id: 'slideImage2', name: './image/slide2.jpg', alts: 'img2' },
// // // //         { id: 'slideImage3', name: './image/slide3.jpg', alts: 'img3' },
// // // //     ];

// // // //     const [slideIdx, setSlideIdx] = useState(0);
// // // //     const [isHovered, setIsHovered] = useState(false);
// // // //     const slideRef = useRef();

// // // //     useEffect(() => {
// // // //         function activeSlide() {
// // // //             slideRef.current.style.transform = `translateX(${-slideIdx * 100}%)`;
// // // //         }

// // // //         activeSlide();
// // // //     }, [slideIdx]);

// // // //     useEffect(() => {
// // // //         const interval = setInterval(() => {
// // // //             if (!isHovered) {
// // // //                 setSlideIdx((prevIdx) => (prevIdx + 1) % slideImages.length);
// // // //             }
// // // //         }, 2000);

// // // //         return () => clearInterval(interval);
// // // //     }, [isHovered, slideImages.length]);

// // // //     const handleNext = () => {
// // // //         setSlideIdx((prevIdx) => (prevIdx + 1) % slideImages.length);
// // // //     };

// // // //     const handlePrev = () => {
// // // //         setSlideIdx((prevIdx) => (prevIdx - 1 + slideImages.length) % slideImages.length);
// // // //     };

// // // //     return (
// // // //         <section style={{ height: '100vh' }}>
// // // //             <div
// // // //                 className="main_container"
// // // //                 onMouseEnter={() => setIsHovered(true)}
// // // //                 onMouseLeave={() => setIsHovered(false)}
// // // //             >
// // // //                 <div className="slide_container">
// // // //                     <ul className="slide_list" ref={slideRef}>
// // // //                         {slideImages.map((image, i) => (
// // // //                             <li key={i} className="slides">
// // // //                                 <img src={image.name} alt={image.alts} className={image.id} />
// // // //                             </li>
// // // //                         ))}
// // // //                     </ul>
// // // //                 </div>
// // // //                 <img
// // // //                     className={`backBtn ${slideIdx === 0 ? 'nonVisible' : ''}`}
// // // //                     src="./image/left_btn.png"
// // // //                     alt="leftBtn"
// // // //                     onClick={handlePrev}
// // // //                 />
// // // //                 <img
// // // //                     className={`forwardBtn ${slideIdx === slideImages.length - 1 ? 'nonVisible' : ''}`}
// // // //                     src="./image/right_btn.png"
// // // //                     alt="rightBtn"
// // // //                     onClick={handleNext}
// // // //                 />
// // // //             </div>
// // // //         </section>
// // // //     );
// // // // }


// // // import React, { useEffect, useState, useRef } from 'react';
// // // import './slide.css';

// // // export default function Slider() {
// // //     const slideImages = [
// // //         { id: 'slideImage1', name: './image/slide1.jpg', alts: 'img1' },
// // //         { id: 'slideImage2', name: './image/slide2.jpg', alts: 'img2' },
// // //         { id: 'slideImage3', name: './image/slide3.jpg', alts: 'img3' },
// // //     ];

// // //     const [slideIdx, setSlideIdx] = useState(1); // 초기 인덱스를 1로 설정
// // //     const [isTransitioning, setIsTransitioning] = useState(false);
// // //     const [isHovered, setIsHovered] = useState(false);
// // //     const slideRef = useRef();

// // //     useEffect(() => {
// // //         const handleTransitionEnd = () => {
// // //             if (slideIdx === 0) {
// // //                 slideRef.current.style.transition = 'none';
// // //                 setSlideIdx(slideImages.length);
// // //             } else if (slideIdx === slideImages.length + 1) {
// // //                 slideRef.current.style.transition = 'none';
// // //                 setSlideIdx(1);
// // //             }
// // //         };

// // //         slideRef.current.addEventListener('transitionend', handleTransitionEnd);
// // //         return () => {
// // //             slideRef.current.removeEventListener('transitionend', handleTransitionEnd);
// // //         };
// // //     }, [slideIdx, slideImages.length]);

// // //     useEffect(() => {
// // //         if (isTransitioning) {
// // //             slideRef.current.style.transition = 'transform 0.7s ease-in-out';
// // //         } else {
// // //             slideRef.current.style.transition = 'none';
// // //         }
// // //     }, [isTransitioning]);

// // //     useEffect(() => {
// // //         if (!isHovered) {
// // //             const interval = setInterval(() => {
// // //                 setIsTransitioning(true);
// // //                 setSlideIdx((prevIdx) => prevIdx + 1);
// // //             }, 2000);
// // //             return () => clearInterval(interval);
// // //         }
// // //     }, [isHovered]);

// // //     const handleNext = () => {
// // //         setIsTransitioning(true);
// // //         setSlideIdx((prevIdx) => prevIdx + 1);
// // //     };

// // //     const handlePrev = () => {
// // //         setIsTransitioning(true);
// // //         setSlideIdx((prevIdx) => prevIdx - 1);
// // //     };

// // //     return (
// // //         <section style={{ height: '100vh' }}>
// // //             <div
// // //                 className="main_container"
// // //                 onMouseEnter={() => setIsHovered(true)}
// // //                 onMouseLeave={() => setIsHovered(false)}
// // //             >
// // //                 <div className="slide_container">
// // //                     <ul className="slide_list" ref={slideRef} style={{ transform: `translateX(${-slideIdx * 100}%)` }}>
// // //                         <li className="slides">
// // //                             <img src={slideImages[slideImages.length - 1].name} alt={slideImages[slideImages.length - 1].alts} />
// // //                         </li>
// // //                         {slideImages.map((image, i) => (
// // //                             <li key={i} className="slides">
// // //                                 <img src={image.name} alt={image.alts} className={image.id} />
// // //                             </li>
// // //                         ))}
// // //                         <li className="slides">
// // //                             <img src={slideImages[0].name} alt={slideImages[0].alts} />
// // //                         </li>
// // //                     </ul>
// // //                 </div>
// // //                 <img
// // //                     className={`backBtn ${slideIdx === 1 ? 'nonVisible' : ''}`}
// // //                     src="./image/left_btn.png"
// // //                     alt="leftBtn"
// // //                     onClick={handlePrev}
// // //                 />
// // //                 <img
// // //                     className={`forwardBtn ${slideIdx === slideImages.length ? 'nonVisible' : ''}`}
// // //                     src="./image/right_btn.png"
// // //                     alt="rightBtn"
// // //                     onClick={handleNext}
// // //                 />
// // //             </div>
// // //         </section>
// // //     );
// // // }


// // import React, { useEffect, useState, useRef } from 'react';
// // import './slide.css';

// // export default function Slider() {
// //     const slideImages = [
// //         { id: 'slideImage1', name: './image/slide1.jpg', alts: 'img1' },
// //         { id: 'slideImage2', name: './image/slide2.jpg', alts: 'img2' },
// //         { id: 'slideImage3', name: './image/slide3.jpg', alts: 'img3' },
// //         // { id: 'slideImage4', name: './image/slide4.jpg', alts: 'img4' },
// //         // { id: 'slideImage5', name: './image/slide5.jpg', alts: 'img5' },
// //         // { id: 'slideImage6', name: './image/slide6.jpg', alts: 'img6' },
// //         // { id: 'slideImage7', name: './image/slide7.jpg', alts: 'img7' },
// //         // { id: 'slideImage8', name: './image/slide8.jpg', alts: 'img8' },
// //         // { id: 'slideImage9', name: './image/slide9.jpg', alts: 'img9' },
// //         // { id: 'slideImage10', name: './image/slide10.jpg', alts: 'img10' },
// //     ];

// //     const [slideIdx, setSlideIdx] = useState(1); // 초기 인덱스를 1로 설정
// //     const [isTransitioning, setIsTransitioning] = useState(true);
// //     const [isHovered, setIsHovered] = useState(false);
// //     const slideRef = useRef();
// //     const autoSlideRef = useRef();

// //     useEffect(() => {
// //         const handleTransitionEnd = () => {
// //             setIsTransitioning(false);
// //             if (slideIdx === 0) {
// //                 setSlideIdx(slideImages.length);
// //             } else if (slideIdx === slideImages.length + 1) {
// //                 setSlideIdx(1);
// //             }
// //         };

// //         slideRef.current.addEventListener('transitionend', handleTransitionEnd);
// //         return () => {
// //             slideRef.current.removeEventListener('transitionend', handleTransitionEnd);
// //         };
// //     }, [slideIdx, slideImages.length]);

// //     useEffect(() => {
// //         if (!isHovered) {
// //             autoSlideRef.current = setInterval(() => {
// //                 setIsTransitioning(true);
// //                 setSlideIdx((prevIdx) => prevIdx + 1);
// //             }, 2000);
// //             return () => clearInterval(autoSlideRef.current);
// //         }
// //     }, [isHovered]);

// //     useEffect(() => {
// //         if (!isTransitioning) {
// //             slideRef.current.style.transition = 'none';
// //             setTimeout(() => {
// //                 slideRef.current.style.transition = 'transform 0.7s ease-in-out';
// //             }, 50);
// //         }
// //     }, [isTransitioning]);

// //     const handleNext = () => {
// //         clearInterval(autoSlideRef.current)
// //         setIsTransitioning(true);
// //         setSlideIdx((prevIdx) => (prevIdx + 1) );
// //     };

// //     const handlePrev = () => {
// //         clearInterval(autoSlideRef.current)
// //         setIsTransitioning(true);
// //         setSlideIdx((prevIdx) => (prevIdx - 1) / slideImages.length);
// //     };

// //     console.log(slideIdx);

// //     return (
// //         <section style={{ height: '100vh' }}>
// //             <div
// //                 className="main_container"
// //                 onMouseEnter={() => setIsHovered(true)}
// //                 onMouseLeave={() => setIsHovered(false)}
// //             >
// //                 <div className="slide_container">
// //                     <ul className="slide_list" ref={slideRef} style={{ transform: `translateX(${-slideIdx * 100}%)` }}>
// //                         <li className="slides">
// //                             <img src={slideImages[slideImages.length - 1].name} alt={slideImages[slideImages.length - 1].alts} />
// //                         </li>
// //                         {slideImages.map((image, i) => (
// //                             <li key={i} className="slides">
// //                                 <img src={image.name} alt={image.alts} className={image.id} />
// //                             </li>
// //                         ))}
// //                         <li className="slides">
// //                             <img src={slideImages[0].name} alt={slideImages[0].alts} />
// //                         </li>
// //                     </ul>
// //                 </div>
// //                 <img
// //                     className="backBtn"
// //                     src="./image/left_btn.png"
// //                     alt="leftBtn"
// //                     onClick={handlePrev}
// //                 />
// //                 <img
// //                     className="forwardBtn"
// //                     src="./image/right_btn.png"
// //                     alt="rightBtn"
// //                     onClick={handleNext}
// //                 />
// //             </div>
// //         </section>
// //     );
// // }


// import React, { useEffect, useState, useRef } from 'react';
// import './slide.css';

// export default function Slider() {
//     const slideImages = [
//         { id: 'slideImage1', name: './image/slide1.jpg', alts: 'img1' },
//         { id: 'slideImage2', name: './image/slide2.jpg', alts: 'img2' },
//         { id: 'slideImage3', name: './image/slide3.jpg', alts: 'img3' },
//     ];

//     const [slideIdx, setSlideIdx] = useState(1); // 초기 인덱스를 1로 설정
//     const [isTransitioning, setIsTransitioning] = useState(true);
//     const [isHovered, setIsHovered] = useState(false);
//     const [isThrottled, setIsThrottled] = useState(false);
//     const slideRef = useRef();
//     const autoSlideRef = useRef();

//     useEffect(() => {
//         const handleTransitionEnd = () => {
//             setIsTransitioning(false);
//             if (slideIdx === 0) {
//                 setSlideIdx(slideImages.length);
//             } else if (slideIdx === slideImages.length + 1) {
//                 setSlideIdx(1);
//             }
//         };

//         slideRef.current.addEventListener('transitionend', handleTransitionEnd);
//         return () => {
//             slideRef.current.removeEventListener('transitionend', handleTransitionEnd);
//         };
//     }, [slideIdx, slideImages.length]);

//     useEffect(() => {
//         if (!isHovered) {
//             autoSlideRef.current = setInterval(() => {
//                 setIsTransitioning(true);
//                 setSlideIdx((prevIdx) => prevIdx + 1);
//             }, 2000);
//             return () => clearInterval(autoSlideRef.current);
//         }
//     }, [isHovered]);

//     useEffect(() => {
//         if (!isTransitioning) {
//             slideRef.current.style.transition = 'none';
//             setTimeout(() => {
//                 slideRef.current.style.transition = 'transform 0.7s ease-in-out';
//             }, 50);
//         }
//     }, [isTransitioning]);

//     const handleNext = () => {
//         if (isThrottled) return;
//         setIsThrottled(true);
//         clearInterval(autoSlideRef.current); // 자동 슬라이딩 정지
//         setIsTransitioning(true);
//         setSlideIdx((prevIdx) => prevIdx + 1);
//         setTimeout(() => setIsThrottled(false), 2000);
//     };

//     const handlePrev = () => {
//         if (isThrottled) return;
//         setIsThrottled(true);
//         clearInterval(autoSlideRef.current); // 자동 슬라이딩 정지
//         setIsTransitioning(true);
//         setSlideIdx((prevIdx) => prevIdx - 1);
//         setTimeout(() => setIsThrottled(false), 2000);
//     };

//     console.log(slideIdx);

//     return (
//         <section style={{ height: '100vh' }}>
//             <div
//                 className="main_container"
//                 onMouseEnter={() => {
//                     clearInterval(autoSlideRef.current);
//                     setIsHovered(true);
//                 }}
//                 onMouseLeave={() => {
//                     setIsHovered(false);
//                     autoSlideRef.current = setInterval(() => {
//                         setIsTransitioning(true);
//                         setSlideIdx((prevIdx) => prevIdx + 1);
//                     }, 2000);
//                 }}
//             >
//                 <div className="slide_container">
//                     <ul className="slide_list" ref={slideRef} style={{ transform: `translateX(${-slideIdx * 100}%)` }}>
//                         <li className="slides">
//                             <img src={slideImages[slideImages.length - 1].name} alt={slideImages[slideImages.length - 1].alts} />
//                         </li>
//                         {slideImages.map((image, i) => (
//                             <li key={i} className="slides">
//                                 <img src={image.name} alt={image.alts} className={image.id} />
//                             </li>
//                         ))}
//                         <li className="slides">
//                             <img src={slideImages[0].name} alt={slideImages[0].alts} />
//                         </li>
//                     </ul>
//                 </div>
//                 <img
//                     className="backBtn"
//                     src="./image/left_btn.png"
//                     alt="leftBtn"
//                     onClick={handlePrev}
//                 />
//                 <img
//                     className="forwardBtn"
//                     src="./image/right_btn.png"
//                     alt="rightBtn"
//                     onClick={handleNext}
//                 />
//             </div>
//         </section>
//     );
// }

import React, { useEffect, useState, useRef } from 'react';
import './slide.css';

export default function Slider() {
    const slideImages = [
        { id: 'slideImage1', name: './image/slide1.jpg', alts: 'img1' },
        { id: 'slideImage2', name: './image/slide2.jpg', alts: 'img2' },
        { id: 'slideImage3', name: './image/slide3.jpg', alts: 'img3' },
        { id: 'slideImage4', name: './image/slide4.jpg', alts: 'img4' },
        { id: 'slideImage5', name: './image/slide5.jpg', alts: 'img5' },
        { id: 'slideImage6', name: './image/slide6.jpg', alts: 'img6' },
        { id: 'slideImage7', name: './image/slide7.jpg', alts: 'img7' },
        { id: 'slideImage8', name: './image/slide8.jpg', alts: 'img8' },
        { id: 'slideImage9', name: './image/slide9.jpg', alts: 'img9' },
        { id: 'slideImage10', name: './image/slide10.jpg', alts: 'img10' },
    ];

    const [slideIdx, setSlideIdx] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [isThrottled, setIsThrottled] = useState(false);
    const slideRef = useRef();
    const autoSlideRef = useRef();

    useEffect(() => {
        const handleTransitionEnd = () => {
            setIsTransitioning(false);
            if (slideIdx === 0) {
                setSlideIdx(slideImages.length);
            } else if (slideIdx === slideImages.length + 1) {
                setSlideIdx(1);
            }
        };

        slideRef.current.addEventListener('transitionend', handleTransitionEnd);
        return () => {
            slideRef.current.removeEventListener('transitionend', handleTransitionEnd);
        };
    }, [slideIdx, slideImages.length]);
    console.log('TransitionEnds',slideIdx);

    useEffect(() => {
        if (!isHovered) {
            autoSlideRef.current = setInterval(() => {
                setIsTransitioning(true);
                setSlideIdx((prevIdx) => (prevIdx + 1) %(slideImages.length + 2));
            }, 4000);
            return () => clearInterval(autoSlideRef.current);
        }
    }, [isHovered]);
    console.log('hover',slideIdx);

    useEffect(() => {
        if (!isTransitioning) {
            slideRef.current.style.transition = 'none';
            setTimeout(() => {
                slideRef.current.style.transition = 'transform 0.7s ease-in-out';
            }, 50);
        }
    }, [isTransitioning]);

    const handleNext = () => {
        if (isThrottled) return;
        setIsThrottled(true);
        clearInterval(autoSlideRef.current);
        setIsTransitioning(true);
        setSlideIdx((prevIdx) => (prevIdx + 1) % (slideImages.length + 2));
        setTimeout(() => setIsThrottled(false), 2000);
    };

    const handlePrev = () => {
        if (isThrottled) return;
        setIsThrottled(true);
        clearInterval(autoSlideRef.current);
        setIsTransitioning(true);
        setSlideIdx((prevIdx) => (prevIdx - 1) % (slideImages.length + 2));
        setTimeout(() => setIsThrottled(false), 2000);
    };

    const handleMouseEnter = () => {
        clearInterval(autoSlideRef.current);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setIsTransitioning(true);
    };

    // console.log(slideIdx);
    // console.log(slideImages.length);

    return (
        <section style={{ height: '1225px' }}>
            <div
                className="main_container"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="slide_container">
                    <ul className="slide_list" ref={slideRef} style={{ transform: `translateX(${-slideIdx * 100}%)` }}>
                        <li className="slides">
                            <img src={slideImages[slideImages.length - 1].name} alt={slideImages[slideImages.length - 1].alts} />
                        </li>
                        {slideImages.map((image, i) => (
                            <li key={i} className="slides">
                                <img src={image.name} alt={image.alts} className={image.id} />
                            </li>
                        ))}
                        <li className="slides">
                            <img src={slideImages[0].name} alt={slideImages[0].alts} />
                        </li>
                    </ul>
                </div>
                <img
                    className="backBtn"
                    src="./image/left_btn.png"
                    alt="leftBtn"
                    onClick={handlePrev}
                />
                <img
                    className="forwardBtn"
                    src="./image/right_btn.png"
                    alt="rightBtn"
                    onClick={handleNext}
                />
            </div>
        </section>
    );
}
