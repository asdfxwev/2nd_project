// import React, { useRef, useState, useEffect } from 'react';
// import HeaderMenuSmallTop from "./HeaderMenuSmallTop";
// import './Button.css';
// import { useLocation } from 'react-router-dom';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import { gsap } from 'gsap';

// export default function Button() {
//     const menuSmallTop = HeaderMenuSmallTop();
//     const location = useLocation();
//     const [bottomOffset, setBottomOffset] = useState(30);
//     const topRef = useRef(null);
//     const [showButton, setShowButton] = useState(false);
//     // const orbitControlsRef = useRef(null);
//     // const [imageSrc, setImageSrc] = useState('./image/underGundam.png'); // 초기 이미지 경로

//     function scrollTop() {
//         topRef.current.scrollIntoView({ behavior: 'smooth' });
//     }

//     // function handleClick() {
//     //     // 클릭할 때 이미지 경로를 변경
//     //     const newImageSrc = imageSrc === './image/underGundam.png' ? './image/upperGundam.png' : './image/underGundam.png';
//     //     setImageSrc(newImageSrc);
//     // }

//     useEffect(() => {
//         const handleScroll = () => {
//             const footer = document.querySelector('.footer'); // Ensure this selector matches your footer element
//             if (!footer) return;
//             const footerRect = footer.getBoundingClientRect(); // Check if footer exists

//             // if (window.scrollY < 50) {
//             //     // 맨 위로 스크롤했을 때 이미지를 초기화
//             //     setImageSrc('./image/underGundam.png');
//             // }

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

//     function Model() {
//         try {
//             const gltf = useGLTF('/image/zgmf-x10a_freedom_gundam/scene.gltf');
//             useEffect(() => {
//                 gltf.scene.scale.set(0.02, 0.02, 0.02); // 모델의 크기를 조정합니다.
//             }, [gltf.scene]);
//             return <primitive object={gltf.scene} />;
//         } catch (error) {
//             console.error('Failed to load GLTF model:', error);
//             return null;
//         }
//     }

//     // useEffect(() => {
//     //     // GSAP을 사용하여 OrbitControls의 autoRotate 속성을 조정
//     //     gsap.to(orbitControlsRef.current.autoRotate, {
//     //         duration: 1, // 애니메이션 지속 시간
//     //         value: true, // autoRotate 속성을 활성화
//     //         ease: "power1.inOut", // 이징 함수
//     //         repeat: -1, // 무한 반복
//     //         yoyo: true // 왕복 애니메이션
//     //     });
//     // }, []);

//     return (
//         <div ref={topRef}>
//             <div className={`Every ${menuSmallTop ? 'smallThing' : ''} ${isMainPage ? 'noPosition' : ''}`}>
//                 <a href='/'><h1 className="logo">logo</h1></a>
//                 {showButton && (
//                     // <img 
//                     //     src={imageSrc}
//                     //     alt='topBtn' 
//                     //     className='topBtn'
//                     //     onClick={() => {
//                     //         scrollTop();
//                     //         handleClick();
//                     //     }}
//                     // style={{ bottom: `${bottomOffset}px`, transition: 'all 0.3s', cursor: 'pointer', zIndex: '15' }} 
//                     // />
//                     <Canvas
//                         style={{ height: '150px', width: '150px', cursor: 'pointer', bottom: `${bottomOffset}px` }}
//                         className='topBtn'
//                         onClick={() => scrollTop()}
//                     >
//                         <ambientLight intensity={2} />
//                         <spotLight position={[10, 10, 10]} angle={15} penumbra={1} />
//                         {/* <Suspense fallback={null}> */}
//                             <Model />
//                         {/* </Suspense> */}
//                         <OrbitControls
//                             autoRotate
//                             enableZoom={false}
//                             enablePan={false}
//                             minPolarAngle={Math.PI / 4}
//                             maxPolarAngle={Math.PI / 2}
//                             target={[0, 2, 0]}
//                         />
//                     </Canvas>
//                 )}
//             </div>
//         </div>
//     );
// }

import React, { useRef, useState, useEffect } from 'react';
import HeaderMenuSmallTop from "./HeaderMenuSmallTop";
import './Button.css';
import { useLocation } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';

export default function Button() {
    const menuSmallTop = HeaderMenuSmallTop();
    const location = useLocation();
    const [bottomOffset, setBottomOffset] = useState(30);
    const topRef = useRef(null);
    const [showButton, setShowButton] = useState(false);
    const orbitControlsRef = useRef(null);

    const isMainPage = location.pathname !== '/';
    const isLoginPage = location.pathname.includes('/Login');
    const isDetailPage = location.pathname.includes('/ItemDetail');

    function scrollTop() {
        topRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        if (isLoginPage) return; // early return inside the useEffect

        const handleScroll = () => {
            const footer = document.querySelector('.footer');
            if (!footer) return;
            const footerRect = footer.getBoundingClientRect();

            if (footer && window.scrollY > window.innerHeight * 0.5) {
                if (isDetailPage) {
                    setShowButton(false);
                } else {
                    setShowButton(true);
                }
            } else {
                setShowButton(false);
            }

            if (footer) {
                if (window.innerHeight - footerRect.top > 0) {
                    setBottomOffset(window.innerHeight - footerRect.top);
                } else {
                    setBottomOffset(20);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isLoginPage]);

    function Model() {
        const gltf = useGLTF('./image/zgmf-x10a_freedom_gundam/scene.gltf');
        useEffect(() => {
            gltf.scene.scale.set(0.02, 0.02, 0.02);
        }, [gltf.scene]);
        return <primitive object={gltf.scene} />;
    }

    // Return null immediately if on the login page, keeping hooks at the top
    if (isLoginPage) return null;
    // if (isDetailPage) return setShowButton(false);

    return (
        <div ref={topRef}>
            <div className={`Every ${menuSmallTop ? 'smallThing' : ''} ${isMainPage ? 'noPosition' : ''}`}>
                <a href='/'><h1 className="logo">logo</h1></a>
                {showButton && (
                    <Canvas
                        style={{ height: '150px', width: '150px', cursor: 'pointer', bottom: `${bottomOffset}px` }}
                        className='topBtn'
                        onClick={() => scrollTop()}
                    >
                        <ambientLight intensity={2} />
                        <spotLight position={[10, 10, 10]} angle={15} penumbra={1} />
                        <React.Suspense fallback={null}>
                            <Model />
                        </React.Suspense>
                        <OrbitControls
                            autoRotate
                            ref={orbitControlsRef}
                            enableZoom={false}
                            enablePan={false}
                            minPolarAngle={Math.PI / 4}
                            maxPolarAngle={Math.PI / 2}
                            target={[0, 2, 0]}
                        />
                    </Canvas>
                )}
            </div>
        </div>
    );
}
