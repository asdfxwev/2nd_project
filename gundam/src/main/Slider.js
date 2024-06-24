import React, { useEffect, useState } from 'react';
import './slider.css';
import ImageSlider, { Slide } from "react-auto-image-slider";
// import { Slide } from 'react-slideshow-image';
import { useRef } from 'react';


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
        // { id: 'slideImage10', name: './image/slide10.jpg', alts: 'img10' },
    ];



    return (
        <>
            <section className="main_container">
                <div className="slide_container">
                    <div className="slide_list">
                        <ImageSlider effectDelay={1000} autoPlayDelay={2000} continuous={true} transitionStyle="ease-in-out" startIndex={0}>
                            {slideImages.map((image) => (
                                <Slide><img src={image.name} alt={image.alts} className={image.id} /></Slide>
                            ))}
                        </ImageSlider>
                    </div>
                </div>
            </section>
        </>
    );
}


