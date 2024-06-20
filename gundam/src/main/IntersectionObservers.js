import { useEffect, useRef } from 'react';
import './IntersectionObservers.css';

export default function IntersectionObservers() {
    const intersectionImage1 = [
        { id: 'vertical1', name: './image/vertical1.png' },
        { id: 'vertical2', name: './image/vertical2.png' },
        { id: 'vertical3', name: './image/vertical3.png' },
        { id: 'vertical4', name: './image/vertical4.png' },
    ];

    const intersectionImage2 = [
        { id: 'vertical5', name: './image/vertical5.png' },
        { id: 'vertical6', name: './image/vertical6.png' },
        { id: 'vertical7', name: './image/vertical7.png' },
        { id: 'vertical8', name: './image/vertical8.png' },
    ];


    const handleMouseOver = (event) => {
        event.target.classList.add('scaleUp');
    };

    const handleMouseOut = (event) => {
        event.target.classList.remove('scaleUp');
    };

    /* javascript */
    // Intersection Observer 생성
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // 화면에 들어옴
                    entry.target.classList.add("show");
                } else {
                    // 화면에서 나감
                    entry.target.classList.remove("show");
                }
            });
        },
        // 화면에서 해당 요소가 10% 이상 보일 경우 화면에 들어온 것으로 판단함
        { threshold: 0.1 }
    );

    // 관찰 대상 설정
    const targetElements = document.querySelectorAll(".verticalImage");
    targetElements.forEach((element) => {
        observer.observe(element);
    });

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add('show');
    //             } else {
    //                 entry.target.classList.remove('show');
    //             }
    //         });
    //     });

    //     const images = document.querySelectorAll('.verticalImage');
    //     images.forEach((img) => {
    //         observer.observe(img);
    //     });

    //     return () => {
    //         images.forEach((img) => {
    //             observer.unobserve(img);
    //         });
    //     };
    // }, []);

    return (
        <div style={{ height: '100vh', backgroundColor: 'red' }}>
            <div className="tabImageContainer">
                {intersectionImage1.map((image) =>
                    <div key={image.id} className="tabImageList vertical1">
                        <img className="verticalImage" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} src={image.name} alt={image.id} />
                    </div>
                )}

            </div>
            <div className="tabImageContainer">
                {intersectionImage2.map((image) =>
                    <div key={image.id} className="tabImageList vertical2">
                        <img className="verticalImage" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} src={image.name} alt={image.id} />
                    </div>
                )}
            </div>
        </div>
    )
}