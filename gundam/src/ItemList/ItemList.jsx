import React, { useState } from 'react';
import ItemCard from './ItemCard';
import './ItemList.css';
import ItemDataBase from './ItemDataBase';
import TuneIcon from '@mui/icons-material/Tune';

const ItemList = () => {
    const [filtersVisible, setFiltersVisible] = useState(true);
    const [selectedFilters, setSelectedFilters] = useState({
        상품정보: { visible: true, someFilter: false },
        가격대별: {
            visible: true,
            '전체': false,
            '10,000원 미만': false,
            '10,000원 이상 ~ 50,000원 미만': false,
            '50,000원 이상 ~ 100,000원 미만': false,
            '100,000원 이상': false
        },
        브랜드별: {
            visible: true,
            '1/100': false,
            'FG': false,
            'FIGURE-RISE MECHANICS': false,
            'FIGURE-RISE STANDARD': false,
            'FIGURE-RISE': false,
            'FULL MECHANICS': false,
            'HG': false,
            'HGMC': false,
            'HGUC': false
        },
        작품별: {
            visible: true,
            '건담 무사': false,
            '건담 브레이커 배틀로그': false,
            '기동전사 건담 수성의 마녀': false,
            '기동전사 건담 복수의 레퀴엠': false,
            '신기동전사 건담W': false
        }
    });

    const toggleFiltersVisible = () => {
        setFiltersVisible(!filtersVisible);
        if (!filtersVisible) {
            resetFilters();
        }
    };

    const toggleSection = (category) => {
        setSelectedFilters(prevFilters => ({
            ...prevFilters,
            [category]: {
                ...prevFilters[category],
                visible: !prevFilters[category].visible
            }
        }));
    };

    const resetFilters = () => {
        setSelectedFilters({
            상품정보: { visible: true, someFilter: false },
            가격대별: {
                visible: true,
                '전체': false,
                '10,000원 미만': false,
                '10,000원 이상 ~ 50,000원 미만': false,
                '50,000원 이상 ~ 100,000원 미만': false,
                '100,000원 이상': false
            },
            브랜드별: {
                visible: true,
                '1/100': false,
                'FG': false,
                'FIGURE-RISE MECHANICS': false,
                'FIGURE-RISE STANDARD': false,
                'FIGURE-RISE': false,
                'FULL MECHANICS': false,
                'HG': false,
                'HGMC': false,
                'HGUC': false
            },
            작품별: {
                visible: true,
                '건담 무사': false,
                '건담 브레이커 배틀로그': false,
                '기동전사 건담 수성의 마녀': false,
                '기동전사 건담 복수의 레퀴엠': false,
                '신기동전사 건담W': false
            }
        });
    };

    const handleCheckboxChange = (category, filter) => {
        setSelectedFilters(prevFilters => ({
            ...prevFilters,
            [category]: {
                ...prevFilters[category],
                [filter]: !prevFilters[category][filter]
            }
        }));
    };

    return (
        <div>
            <div className=''><h1>건프라</h1></div>
            <div className='item-size-150' onClick={toggleFiltersVisible}>
                <TuneIcon />{filtersVisible ? '필터 숨기기' : '필터 보이기'}
            </div>
            <div className="item-list">
                <div className='item-choose'>
                    {filtersVisible && (
                        <div>
                            <div className='filter-section'>
                                <div>
                                    선택된 필터: <button onClick={resetFilters}>초기화</button>
                                </div>
                            </div>
                            <div className='filter-section'>
                                <h3 className={selectedFilters.상품정보.visible ? '' : 'open'} onClick={() => toggleSection('상품정보')}>
                                    상품정보
                                    <span className='toggle-section'>
                                        {selectedFilters.상품정보.visible ? '-' : '+'}
                                    </span>
                                </h3>
                            {selectedFilters.상품정보.visible && (
                                <div>
                                <div><label><input type="checkbox" checked={selectedFilters.상품정보['세일상품만']} onChange={() => handleCheckboxChange('상품정보', '세일상품만')} />세일상품만</label></div>
                                <div><label><input type="checkbox" checked={selectedFilters.상품정보['품절상품 제외']} onChange={() => handleCheckboxChange('상품정보', '품절상품 제외')} />품절상품 제외</label></div>
                                <div><label><input type="checkbox" checked={selectedFilters.상품정보['예약종료상품 제외']} onChange={() => handleCheckboxChange('상품정보', '예약종료상품 제외')} />예약종료상품 제외</label></div>
                            </div>
                            )}
                            </div>
                            <div className='filter-section'>
                        <h3 className={selectedFilters.가격대별.visible ? '' : 'open'} onClick={() => toggleSection('가격대별')}>
                            가격대별
                            <span className='toggle-section'>
                                {selectedFilters.가격대별.visible ? '-' : '+'}
                            </span>
                        </h3>
                        {selectedFilters.가격대별.visible && (
                            <div>
                                <div><label><input type='checkbox' checked={!!selectedFilters.가격대별['전체']} onChange={() => handleCheckboxChange('가격대별', '전체')}></input>전체</label></div>
                                <div><label><input type='checkbox' checked={!!selectedFilters.가격대별['10,000원 미만']} onChange={() => handleCheckboxChange('가격대별', '10,000원 미만')}></input>10,000원 미만</label></div>
                                <div><label><input type='checkbox' checked={!!selectedFilters.가격대별['10,000원 이상 ~ 50,000원 미만']} onChange={() => handleCheckboxChange('가격대별', '10,000원 이상 ~ 50,000원 미만')}></input>10,000원 이상 ~ 50,000원 미만</label></div>
                                <div><label><input type='checkbox' checked={!!selectedFilters.가격대별['50,000원 이상 ~ 100,000원 미만']} onChange={() => handleCheckboxChange('가격대별', '50,000원 이상 ~ 100,000원 미만')}></input>50,000원 이상 ~ 100,000원 미만</label></div>
                                <div><label><input type='checkbox' checked={!!selectedFilters.가격대별['100,000원 이상']} onChange={() => handleCheckboxChange('가격대별', '100,000원 이상')}></input>100,000원 이상</label></div>
                            </div>
                        )}
                    </div>
                            <div className='filter-section'>
                                <h3 className={selectedFilters.브랜드별.visible ? '' : 'open'} onClick={() => toggleSection('브랜드별')}>
                                    브랜드별
                                <span className='toggle-section'>
                                {selectedFilters.브랜드별.visible ? '-' : '+'}
                            </span>
                                </h3>
                                {selectedFilters.브랜드별.visible && (
                                    <div>
                                <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['1/100']} onChange={() => handleCheckboxChange('브랜드별', '1/100')}></input>1/100</label></div>
                                <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['FG']} onChange={() => handleCheckboxChange('브랜드별', 'FG')}></input>FG</label></div>
                                <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['FIGURE-RISE MECHANICS']} onChange={() => handleCheckboxChange('브랜드별', 'FIGURE-RISE MECHANICS')}></input>FIGURE-RISE MECHANICS</label></div>
                                <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['FIGURE-RISE STANDARD']} onChange={() => handleCheckboxChange('브랜드별', 'FIGURE-RISE STANDARD')}></input>FIGURE-RISE STANDARD</label></div>
                                <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['FIGURE-RISE']} onChange={() => handleCheckboxChange('브랜드별', 'FIGURE-RISE')}></input>FIGURE-RISE</label></div>
                                <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['FULL MECHANICS']} onChange={() => handleCheckboxChange('브랜드별', 'FULL MECHANICS')}></input>FULL MECHANICS</label></div>
                                <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['HG']} onChange={() => handleCheckboxChange('브랜드별', 'HG')}></input>HG</label></div>
                                <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['HGMC']} onChange={() => handleCheckboxChange('브랜드별', 'HGMC')}></input>HGMC</label></div>
                            </div>
                            )}
                            </div>
                            <div className='filter-section'>
                                <h3 className={selectedFilters.작품별.visible ? '' : 'open'} onClick={() => toggleSection('작품별')}>
                                    작품별
                                <span className='toggle-section'>
                                {selectedFilters.작품별.visible ? '-' : '+'}
                                </span>
                                </h3>
                                {selectedFilters.작품별.visible && (
                                    <div>
                                <div><label><input type='checkbox' checked={!!selectedFilters.작품별['건담 무사']} onChange={() => handleCheckboxChange('작품별', '건담 무사')}></input>건담 무사</label></div>
                                <div><label><input type='checkbox' checked={!!selectedFilters.작품별['건담 브레이커 배틀로그']} onChange={() => handleCheckboxChange('작품별', '건담 브레이커 배틀로그')}></input>건담 브레이커 배틀로그</label></div>
                                <div><label><input type='checkbox' checked={!!selectedFilters.작품별['기동전사 건담 수성의 마녀']} onChange={() => handleCheckboxChange('작품별', '기동전사 건담 수성의 마녀')}></input>기동전사 건담 수성의 마녀</label></div>
                                <div><label><input type='checkbox' checked={!!selectedFilters.작품별['기동전사 건담 복수의 레퀴엠']} onChange={() => handleCheckboxChange('작품별', '기동전사 건담 복수의 레퀴엠')}></input>기동전사 건담 복수의 레퀴엠</label></div>
                                <div><label><input type='checkbox' checked={!!selectedFilters.작품별['신기동전사 건담W']} onChange={() => handleCheckboxChange('작품별', '신기동전사 건담W')}></input>신기동전사 건담W</label></div>
                            </div>
                        )}
                        </div>
                        </div>
                    )}
                </div>
                {ItemDataBase.map(item => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ItemList;
