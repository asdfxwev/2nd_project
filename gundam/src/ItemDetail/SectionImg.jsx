import React from 'react';
import './ItemDetail.css'

const SectionImg = ( {item} ) => {
    return(
        <>
            {item.src.map((src, id) => (
                <img
                    key={id}
                    id={id}
                    src={src}
                    className='sectionimg'
                    alt={`img_${id + 1}`}
                />
            ))}
        </>
    );
}

export default SectionImg;