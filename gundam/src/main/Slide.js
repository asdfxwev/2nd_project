import React, { useEffect, useState } from 'react';
import './slide.css';
import ImageSlider, { Slide } from "react-auto-image-slider";
// import { Slide } from 'react-slideshow-image';
import { useRef } from 'react';
import style from './../../node_modules/dom-helpers/esm/css';


export default function Slider() {
    const slideImages = [
        { id: 'slideImage1', name: './image/slide1.jpg', alts: 'img1' },
        { id: 'slideImage2', name: './image/slide2.jpg', alts: 'img2' },
        { id: 'slideImage3', name: './image/slide3.jpg', alts: 'img3' },

    ];



    return (
        <>
            <section className="main_container" style={{ height: '100vh', backgroundColor: 'aqua' }}> 
                <div className="slide_container">
                    <div className="slide_list">
                        {slideImages.map((image) => (
                            <img src={image.name} alt={image.alts} className={image.id} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}


