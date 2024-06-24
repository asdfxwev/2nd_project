import './BrandFigure.css';
import { useState } from 'react';

export default function BrandFigure() {

    const BrandFigure = [
        { id: '1', name: './image/category1.png', style: 'category category1' },
        { id: '2', name: './image/category2.png', style: 'category category2' },
        { id: '3', name: './image/category3.png', style: 'category category3' },
        { id: '4', name: './image/category4.png', style: 'category category4' },
        { id: '5', name: './image/category5.png', style: 'category category5' },
    ];

    const [hoveredId, setHoveredId] = useState(null);

    const onFigureMouseOver = (id) => {
        setHoveredId(id);
    };

    const onFigureMouseOut = () => {
        setHoveredId(null);
    };

    return (
        <section className="BrandFigure">
            <h2>브랜드별 피규어</h2>
            <div className="FigureContainer">
                <ul className="FigureList">
                    {BrandFigure.map((figure) => (
                        <li key={figure.id} className="Figures">
                            <img
                                onMouseOver={() => onFigureMouseOver(figure.id)}
                                onMouseOut={onFigureMouseOut}
                                className={`${figure.style} ${hoveredId === figure.id ? 'hovered' : ''} ${hoveredId && hoveredId !== figure.id ? 'shrink' : ''}`}
                                src={figure.name}
                                alt={figure.id}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
