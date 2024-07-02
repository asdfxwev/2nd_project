import './productImg.css'
import { useState } from 'react';
import Gundam3DModel from './Gundam3DModel';

export default function ProjectImg() {

    const [hoveredId, setHoveredId] = useState(null);

    const projImg = [
        { id: 1, absolute: 'classAbsolute1', class: 'gridTemplate1', src: './image/grid1.jpg', alt: 'grid1', name: '짱구는 못말려 붕붕카 짱구', price: '13900원' },
        { id: 2, absolute: 'classAbsolute2', class: 'gridTemplate2', src: './image/grid2.jpg', alt: 'grid2', name: 'HG 건담 에어리얼 (개수형)', price: '20,400원' },
        { id: 3, absolute: 'classAbsolute3', class: 'gridTemplate3', src: './image/grid3.jpg', alt: 'grid3', name: 'HG 마이티 스트라이크 프리덤 건담', price: '32,400원' },
        { id: 4, absolute: 'classAbsolute4', class: 'gridTemplate4', src: './image/grid4.jpg', alt: 'grid4', name: 'HG 라이징 프리덤 건담', price: '28,800원' },
        { id: 5, absolute: 'classAbsolute5', class: 'gridTemplate5', src: './image/grid5.jpg', alt: 'grid5', name: 'DX 갓엠페러', price: '88,000원' },
        { id: 6, absolute: 'classAbsolute6', class: 'gridTemplate6', src: './image/grid6.jpg', alt: 'grid6', name: 'MG 뉴 건담 Ver.Ka', price: '84,000원' },
        { id: 7, absolute: 'classAbsolute7', class: 'gridTemplate7', src: './image/grid7.jpg', alt: 'grid7', name: 'RG 사자비', price: '54,000원' },
        { id: 8, absolute: 'classAbsolute8', class: 'gridTemplate8', src: './image/grid8.jpg', alt: 'grid8', name: 'RG 뉴건담', price: '50,400원' },
    ];

    const onProductDetail = (id) => {
        setHoveredId(id);
    };

    const onProductDetailOut = () => {
        setHoveredId(null);
    };

    return (
        <section className="productImg">
            <h2 className="bestChoice">당신을 위한 최고의 선택!!!</h2>
            <div className="mainGridArea">
                {projImg.map((img, i) => (
                    <a href={`/ItemList/ItemDetail/${i+1}`} key={img.id} className={`${img.class} gridTemplate`} >
                        <div>
                            <img className="gridTemplates" src={img.src} alt={img.alt} />
                        </div>
                        <div
                            className={`classAbsolute ${hoveredId === img.id ? 'disNone' : ''}`}
                            onMouseEnter={() => onProductDetail(img.id)}
                            onMouseLeave={onProductDetailOut}
                        >
                            <span className={`upperBox ${hoveredId === img.id ? 'disNones' : ''}`}>제품 자세히보기</span>
                            <div className={`classes ${hoveredId === img.id ? 'disNones' : ''}`}>
                                <p>{img.name}</p>
                                <span>{img.price}</span>
                            </div>
                        </div>
                    </a>
                ))}
                <div className="gridTemplate9 gridTemplate">
                    <Gundam3DModel />
                    <div className="productInfo">
                        <p>건담 3D 모델</p>
                        <span>가격 정보 없음</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
