import React, { useState } from 'react';
import ItemCard from './ItemCard';
import './ItemList.css';
import ItemDataBase from './ItemDataBase';

const ItemList = () => {
    const [filtersVisible, setFiltersVisible] = useState(true);
    const [selectedFilters, setSelectedFilters] = useState({
        상품정보: {},
        가격대별: {},
        브랜드별: {},
        작품별: {},
    });

    const toggleFiltersVisible = () => {
        setFiltersVisible(!filtersVisible);
    };

    const resetFilters = () => {
        setSelectedFilters({
            상품정보: {},
            가격대별: {},
            브랜드별: {},
            작품별: {},
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
        <div className="item-list">
            <div className='item-choose'>
                <div className='item-size-80' onClick={toggleFiltersVisible}>
                    {filtersVisible ? '필터 숨기기' : '필터 보이기'}
                </div>
                <div>
                    선택된 필터: <button onClick={resetFilters}>초기화</button>
                </div>
                {filtersVisible && (
                    <div>
                        <div className='filter-section'>
                            <h3>상품정보</h3>
                            <div><label><input type='checkbox' checked={!!selectedFilters.상품정보['세일 상품만']} onChange={() => handleCheckboxChange('상품정보', '세일 상품만')}></input>세일 상품만</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.상품정보['품절상품 제외']} onChange={() => handleCheckboxChange('상품정보', '품절상품 제외')}></input>품절상품 제외</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.상품정보['예약종료상품 제외']} onChange={() => handleCheckboxChange('상품정보', '예약종료상품 제외')}></input>예약종료상품 제외</label></div>
                        </div>
                        <div className='filter-section'>
                            <h3>가격대별</h3>
                            <div><label><input type='checkbox' checked={!!selectedFilters.가격대별['전체']} onChange={() => handleCheckboxChange('가격대별', '전체')}></input>전체</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.가격대별['10,000원 미만']} onChange={() => handleCheckboxChange('가격대별', '10,000원 미만')}></input>10,000원 미만</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.가격대별['10,000원 이상 ~ 50,000원 미만']} onChange={() => handleCheckboxChange('가격대별', '10,000원 이상 ~ 50,000원 미만')}></input>10,000원 이상 ~ 50,000원 미만</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.가격대별['50,000원 이상 ~ 100,000원 미만']} onChange={() => handleCheckboxChange('가격대별', '50,000원 이상 ~ 100,000원 미만')}></input>50,000원 이상 ~ 100,000원 미만</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.가격대별['100,000원 이상']} onChange={() => handleCheckboxChange('가격대별', '100,000원 이상')}></input>100,000원 이상</label></div>
                        </div>
                        <div className='filter-section'>
                            <h3>브랜드별</h3>
                            <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['1/100']} onChange={() => handleCheckboxChange('브랜드별', '1/100')}></input>1/100</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['FG']} onChange={() => handleCheckboxChange('브랜드별', 'FG')}></input>FG</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['FIGURE-RISE MECHANICS']} onChange={() => handleCheckboxChange('브랜드별', 'FIGURE-RISE MECHANICS')}></input>FIGURE-RISE MECHANICS</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['FIGURE-RISE STANDARD']} onChange={() => handleCheckboxChange('브랜드별', 'FIGURE-RISE STANDARD')}></input>FIGURE-RISE STANDARD</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['FIGURE-RISE']} onChange={() => handleCheckboxChange('브랜드별', 'FIGURE-RISE')}></input>FIGURE-RISE</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['FULL MECHANICS']} onChange={() => handleCheckboxChange('브랜드별', 'FULL MECHANICS')}></input>FULL MECHANICS</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['HG']} onChange={() => handleCheckboxChange('브랜드별', 'HG')}></input>HG</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['HGMC']} onChange={() => handleCheckboxChange('브랜드별', 'HGMC')}></input>HGMC</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['HGUC']} onChange={() => handleCheckboxChange('브랜드별', 'HGUC')}></input>HGUC</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['1/100']} onChange={() => handleCheckboxChange('브랜드별', '1/100')}></input>1/100</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['HG']} onChange={() => handleCheckboxChange('브랜드별', 'HG')}></input>HG</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['HGMC']} onChange={() => handleCheckboxChange('브랜드별', 'HGMC')}></input>HGMC</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['HGUC']} onChange={() => handleCheckboxChange('브랜드별', 'HGUC')}></input>HGUC</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['FG']} onChange={() => handleCheckboxChange('브랜드별', 'FG')}></input>FG</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['1/100']} onChange={() => handleCheckboxChange('브랜드별', '1/100')}></input>1/100</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['HG']} onChange={() => handleCheckboxChange('브랜드별', 'HG')}></input>HG</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['HGMC']} onChange={() => handleCheckboxChange('브랜드별', 'HGMC')}></input>HGMC</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['HGUC']} onChange={() => handleCheckboxChange('브랜드별', 'HGUC')}></input>HGUC</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['FG']} onChange={() => handleCheckboxChange('브랜드별', 'FG')}></input>FG</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.브랜드별['1/100']} onChange={() => handleCheckboxChange('브랜드별', '1/100')}></input>1/100</label></div>
                        </div>
                        <div className='filter-section'>
                            <h3>작품별</h3>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['건담 무사']} onChange={() => handleCheckboxChange('작품별', '건담 무사')}></input>건담 무사</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['건담 브레이커 배틀로그']} onChange={() => handleCheckboxChange('작품별', '건담 브레이커 배틀로그')}></input>건담 브레이커 배틀로그</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['기동전사 건담 수성의 마녀']} onChange={() => handleCheckboxChange('작품별', '기동전사 건담 수성의 마녀')}></input>기동전사 건담 수성의 마녀</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['기동전사 건담 복수의 레퀴엠']} onChange={() => handleCheckboxChange('작품별', '기동전사 건담 복수의 레퀴엠')}></input>기동전사 건담 복수의 레퀴엠</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['신기동전사 건담W']} onChange={() => handleCheckboxChange('작품별', '신기동전사 건담W')}></input>신기동전사 건담W</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['건담 무사']} onChange={() => handleCheckboxChange('작품별', '건담 무사')}></input>건담 무사</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['건담 브레이커 배틀로그']} onChange={() => handleCheckboxChange('작품별', '건담 브레이커 배틀로그')}></input>건담 브레이커 배틀로그</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['기동전사 건담 수성의 마녀']} onChange={() => handleCheckboxChange('작품별', '기동전사 건담 수성의 마녀')}></input>기동전사 건담 수성의 마녀</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['기동전사 건담 복수의 레퀴엠']} onChange={() => handleCheckboxChange('작품별', '기동전사 건담 복수의 레퀴엠')}></input>기동전사 건담 복수의 레퀴엠</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['신기동전사 건담W']} onChange={() => handleCheckboxChange('작품별', '신기동전사 건담W')}></input>신기동전사 건담W</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['건담 무사']} onChange={() => handleCheckboxChange('작품별', '건담 무사')}></input>건담 무사</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['건담 브레이커 배틀로그']} onChange={() => handleCheckboxChange('작품별', '건담 브레이커 배틀로그')}></input>건담 브레이커 배틀로그</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['기동전사 건담 수성의 마녀']} onChange={() => handleCheckboxChange('작품별', '기동전사 건담 수성의 마녀')}></input>기동전사 건담 수성의 마녀</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['기동전사 건담 복수의 레퀴엠']} onChange={() => handleCheckboxChange('작품별', '기동전사 건담 복수의 레퀴엠')}></input>기동전사 건담 복수의 레퀴엠</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['신기동전사 건담W']} onChange={() => handleCheckboxChange('작품별', '신기동전사 건담W')}></input>신기동전사 건담W</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['건담 무사']} onChange={() => handleCheckboxChange('작품별', '건담 무사')}></input>건담 무사</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['건담 브레이커 배틀로그']} onChange={() => handleCheckboxChange('작품별', '건담 브레이커 배틀로그')}></input>건담 브레이커 배틀로그</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['기동전사 건담 수성의 마녀']} onChange={() => handleCheckboxChange('작품별', '기동전사 건담 수성의 마녀')}></input>기동전사 건담 수성의 마녀</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['기동전사 건담 복수의 레퀴엠']} onChange={() => handleCheckboxChange('작품별', '기동전사 건담 복수의 레퀴엠')}></input>기동전사 건담 복수의 레퀴엠</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['신기동전사 건담W']} onChange={() => handleCheckboxChange('작품별', '신기동전사 건담W')}></input>신기동전사 건담W</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['건담 무사']} onChange={() => handleCheckboxChange('작품별', '건담 무사')}></input>건담 무사</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['건담 브레이커 배틀로그']} onChange={() => handleCheckboxChange('작품별', '건담 브레이커 배틀로그')}></input>건담 브레이커 배틀로그</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['기동전사 건담 수성의 마녀']} onChange={() => handleCheckboxChange('작품별', '기동전사 건담 수성의 마녀')}></input>기동전사 건담 수성의 마녀</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['기동전사 건담 복수의 레퀴엠']} onChange={() => handleCheckboxChange('작품별', '기동전사 건담 복수의 레퀴엠')}></input>기동전사 건담 복수의 레퀴엠</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['신기동전사 건담W']} onChange={() => handleCheckboxChange('작품별', '신기동전사 건담W')}></input>신기동전사 건담W</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['건담 무사']} onChange={() => handleCheckboxChange('작품별', '건담 무사')}></input>건담 무사</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['건담 브레이커 배틀로그']} onChange={() => handleCheckboxChange('작품별', '건담 브레이커 배틀로그')}></input>건담 브레이커 배틀로그</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['기동전사 건담 수성의 마녀']} onChange={() => handleCheckboxChange('작품별', '기동전사 건담 수성의 마녀')}></input>기동전사 건담 수성의 마녀</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['기동전사 건담 복수의 레퀴엠']} onChange={() => handleCheckboxChange('작품별', '기동전사 건담 복수의 레퀴엠')}></input>기동전사 건담 복수의 레퀴엠</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['신기동전사 건담W']} onChange={() => handleCheckboxChange('작품별', '신기동전사 건담W')}></input>신기동전사 건담W</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['건담 무사']} onChange={() => handleCheckboxChange('작품별', '건담 무사')}></input>건담 무사</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['건담 브레이커 배틀로그']} onChange={() => handleCheckboxChange('작품별', '건담 브레이커 배틀로그')}></input>건담 브레이커 배틀로그</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['기동전사 건담 수성의 마녀']} onChange={() => handleCheckboxChange('작품별', '기동전사 건담 수성의 마녀')}></input>기동전사 건담 수성의 마녀</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['기동전사 건담 복수의 레퀴엠']} onChange={() => handleCheckboxChange('작품별', '기동전사 건담 복수의 레퀴엠')}></input>기동전사 건담 복수의 레퀴엠</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['신기동전사 건담W']} onChange={() => handleCheckboxChange('작품별', '신기동전사 건담W')}></input>신기동전사 건담W</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['건담 무사']} onChange={() => handleCheckboxChange('작품별', '건담 무사')}></input>건담 무사</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['건담 브레이커 배틀로그']} onChange={() => handleCheckboxChange('작품별', '건담 브레이커 배틀로그')}></input>건담 브레이커 배틀로그</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['기동전사 건담 수성의 마녀']} onChange={() => handleCheckboxChange('작품별', '기동전사 건담 수성의 마녀')}></input>기동전사 건담 수성의 마녀</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['기동전사 건담 복수의 레퀴엠']} onChange={() => handleCheckboxChange('작품별', '기동전사 건담 복수의 레퀴엠')}></input>기동전사 건담 복수의 레퀴엠</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['신기동전사 건담W']} onChange={() => handleCheckboxChange('작품별', '신기동전사 건담W')}></input>신기동전사 건담W</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['건담 무사']} onChange={() => handleCheckboxChange('작품별', '건담 무사')}></input>건담 무사</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['건담 브레이커 배틀로그']} onChange={() => handleCheckboxChange('작품별', '건담 브레이커 배틀로그')}></input>건담 브레이커 배틀로그</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['기동전사 건담 수성의 마녀']} onChange={() => handleCheckboxChange('작품별', '기동전사 건담 수성의 마녀')}></input>기동전사 건담 수성의 마녀</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['기동전사 건담 복수의 레퀴엠']} onChange={() => handleCheckboxChange('작품별', '기동전사 건담 복수의 레퀴엠')}></input>기동전사 건담 복수의 레퀴엠</label></div>
                            <div><label><input type='checkbox' checked={!!selectedFilters.작품별['신기동전사 건담W']} onChange={() => handleCheckboxChange('작품별', '신기동전사 건담W')}></input>신기동전사 건담W</label></div>
                        </div>
                    </div>
                )}
            </div>
            {ItemDataBase.map(item => (
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;
