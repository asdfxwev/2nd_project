import React, { useState } from 'react';
import ItemCard from './ItemCard';
import './ItemList.css';
import ItemDataBase from './ItemDataBase';
import TuneIcon from '@mui/icons-material/Tune';
import { Link } from 'react-router-dom';

const ItemList = () => {
    const [filtersVisible, setFiltersVisible] = useState(true);
    const [itemListClass, setItemListClass] = useState('item-list');    // item-list 상태
    const [selectedFilters, setSelectedFilters] = useState({
        information: {
            visible: true,
            '세일상품만': false,
            '품절상품 제외': false,
            '예약종료상품 제외': false
        },
        price: {
            visible: true,
            '전체': false,
            '10,000원 미만': false,
            '10,000원 이상 ~ 50,000원 미만': false,
            '50,000원 이상 ~ 100,000원 미만': false,
            '100,000원 이상': false
        },
        brand: {
            visible: true,
            '1/100': false,
            'FG': false,
            'FIGURE-RISE MECHANICS': false,
            'FIGURE-RISE STANDARD': false,
            'FIGURE-RISE': false,
        },
        item: {
            visible: true,
            '건담 무사': false,
            '건담 브레이커 배틀로그': false,
            '기동전사 건담 수성의 마녀': false,
            '기동전사 건담 복수의 레퀴엠': false,
            '신기동전사 건담W': false
        }
    });

    // 필터 가시성 토글
    const toggleFiltersVisible = () => {
        setFiltersVisible(!filtersVisible);
        setItemListClass(filtersVisible ? 'item-list-hidden' : 'item-list')
    };

    // 필터 버튼 클릭시 제거
    const removeFilter = (section, filter) => {
        handleCheckboxChange(section, filter);
    };

    const [currentPage, setCurrentPage] = useState(1);  //현재 페이지 상태

    // 페이지 클릭 핸들러
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber); //여기에 필요에 따라 다른 로직 추가
    };

    const itemsPerPage = 5;    // 아이템 목록 페이지당 보여줄 아이템 수

    const totalNumberOfPages = Math.ceil(ItemDataBase.length / itemsPerPage); // 아이템 데이터베이스 전체 길이 기반으로 총 페이지 수 계산

    // 필터 섹션 토글
    const toggleSection = (category) => {
        setSelectedFilters(prevFilters => ({
            ...prevFilters,
            [category]: {
                ...prevFilters[category],
                visible: !prevFilters[category].visible
            }
        }));
    };

    const resetFilters = () => {    // 초기화
        setSelectedFilters({
            information: {
                visible: true,
                '세일상품만': false,
                '품절상품 제외': false,
                '예약종료상품 제외': false
            },
            price: {
                visible: true,
                '전체': false,
                '10,000원 미만': false,
                '10,000원 이상 ~ 50,000원 미만': false,
                '50,000원 이상 ~ 100,000원 미만': false,
                '100,000원 이상': false
            },
            brand: {
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
            item: {
                visible: true,
                '건담 무사': false,
                '건담 브레이커 배틀로그': false,
                '기동전사 건담 수성의 마녀': false,
                '기동전사 건담 복수의 레퀴엠': false,
                '신기동전사 건담W': false
            }
        });
    };

    // 체크박스 변경 핸들러
    const handleCheckboxChange = (section, filter) => {
        setSelectedFilters(prevFilters => ({
            ...prevFilters,
            [section]: {
                ...prevFilters[section],
                [filter]: !prevFilters[section][filter]
            }
        }));
    };

    return (
        <div className='item-first'>
            <div className='item-size-200'><h1>건프라</h1></div>
            <div className='item-size-150' onClick={toggleFiltersVisible}>
                <TuneIcon />{filtersVisible ? '필터 숨기기' : '필터 보이기'}
            </div>
            {/* 필터 카테고리 */}
            <div className={itemListClass}>
                <div className={`item-choose`}>
                    {filtersVisible && (
                        <div>
                            <div className='filter-section'>
                                <div className='filter-flex'>
                                    선택된 필터: <button onClick={resetFilters}>초기화</button>
                                </div>
                                <div>
                                    {Object.keys(selectedFilters).map(section => (
                                        <div key={section}>
                                            {Object.keys(selectedFilters[section])
                                                .filter(filter => filter !== 'visible' && selectedFilters[section][filter])
                                                .map(filter => (
                                                    <span key={filter}>
                                                        <button onClick={() => removeFilter(section, filter)} >{filter} x</button>
                                                    </span>
                                                ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='filter-section'>
                                <h3 className={selectedFilters.information.visible ? '' : 'open'} onClick={() => toggleSection('information')}>
                                    상품정보
                                    <span className='toggle-section'>
                                        {selectedFilters.information.visible ? '-' : '+'}
                                    </span>
                                </h3>
                                {selectedFilters.information.visible && (
                                    <div>
                                        <div><label><input type="checkbox" checked={selectedFilters.information['세일상품만']} onChange={() => handleCheckboxChange('information', '세일상품만')} />세일상품만</label></div>
                                        <div><label><input type="checkbox" checked={selectedFilters.information['품절상품 제외']} onChange={() => handleCheckboxChange('information', '품절상품 제외')} />품절상품 제외</label></div>
                                        <div><label><input type="checkbox" checked={selectedFilters.information['예약종료상품 제외']} onChange={() => handleCheckboxChange('information', '예약종료상품 제외')} />예약종료상품 제외</label></div>
                                    </div>
                                )}
                            </div>
                            <div className='filter-section'>
                                <h3 className={selectedFilters.price.visible ? '' : 'open'} onClick={() => toggleSection('price')}>
                                    가격대별
                                    <span className='toggle-section'>
                                        {selectedFilters.price.visible ? '-' : '+'}
                                    </span>
                                </h3>
                                {selectedFilters.price.visible && (
                                    <div>
                                        <div><label><input type='checkbox' checked={!!selectedFilters.price['전체']} onChange={() => handleCheckboxChange('price', '전체')}></input>전체</label></div>
                                        <div><label><input type='checkbox' checked={!!selectedFilters.price['10,000원 미만']} onChange={() => handleCheckboxChange('price', '10,000원 미만')}></input>10,000원 미만</label></div>
                                        <div><label><input type='checkbox' checked={!!selectedFilters.price['10,000원 이상 ~ 50,000원 미만']} onChange={() => handleCheckboxChange('price', '10,000원 이상 ~ 50,000원 미만')}></input>10,000원 이상 ~ 50,000원 미만</label></div>
                                        <div><label><input type='checkbox' checked={!!selectedFilters.price['50,000원 이상 ~ 100,000원 미만']} onChange={() => handleCheckboxChange('price', '50,000원 이상 ~ 100,000원 미만')}></input>50,000원 이상 ~ 100,000원 미만</label></div>
                                        <div><label><input type='checkbox' checked={!!selectedFilters.price['100,000원 이상']} onChange={() => handleCheckboxChange('price', '100,000원 이상')}></input>100,000원 이상</label></div>
                                    </div>
                                )}
                            </div>
                            <div className='filter-section'>
                                <h3 className={selectedFilters.brand.visible ? '' : 'open'} onClick={() => toggleSection('brand')}>
                                    브랜드별
                                    <span className='toggle-section'>
                                        {selectedFilters.brand.visible ? '-' : '+'}
                                    </span>
                                </h3>
                                {selectedFilters.brand.visible && (
                                    <div>
                                        <div><label><input type='checkbox' checked={!!selectedFilters.brand['1/100']} onChange={() => handleCheckboxChange('brand', '1/100')}></input>1/100</label></div>
                                        <div><label><input type='checkbox' checked={!!selectedFilters.brand['FG']} onChange={() => handleCheckboxChange('brand', 'FG')}></input>FG</label></div>
                                        <div><label><input type='checkbox' checked={!!selectedFilters.brand['FIGURE-RISE MECHANICS']} onChange={() => handleCheckboxChange('brand', 'FIGURE-RISE MECHANICS')}></input>FIGURE-RISE MECHANICS</label></div>
                                        <div><label><input type='checkbox' checked={!!selectedFilters.brand['FIGURE-RISE STANDARD']} onChange={() => handleCheckboxChange('brand', 'FIGURE-RISE STANDARD')}></input>FIGURE-RISE STANDARD</label></div>
                                        <div><label><input type='checkbox' checked={!!selectedFilters.brand['FIGURE-RISE']} onChange={() => handleCheckboxChange('brand', 'FIGURE-RISE')}></input>FIGURE-RISE</label></div>
                                    </div>
                                )}
                            </div>
                            <div className='filter-section'>
                                <h3 className={selectedFilters.item.visible ? '' : 'open'} onClick={() => toggleSection('item')}>
                                    작품별
                                    <span className='toggle-section'>
                                        {selectedFilters.item.visible ? '-' : '+'}
                                    </span>
                                </h3>
                                {selectedFilters.item.visible && (
                                    <div>
                                        <div><label><input type='checkbox' checked={!!selectedFilters.item['건담 무사']} onChange={() => handleCheckboxChange('item', '건담 무사')}></input>건담 무사</label></div>
                                        <div><label><input type='checkbox' checked={!!selectedFilters.item['건담 브레이커 배틀로그']} onChange={() => handleCheckboxChange('item', '건담 브레이커 배틀로그')}></input>건담 브레이커 배틀로그</label></div>
                                        <div><label><input type='checkbox' checked={!!selectedFilters.item['기동전사 건담 수성의 마녀']} onChange={() => handleCheckboxChange('item', '기동전사 건담 수성의 마녀')}></input>기동전사 건담 수성의 마녀</label></div>
                                        <div><label><input type='checkbox' checked={!!selectedFilters.item['기동전사 건담 복수의 레퀴엠']} onChange={() => handleCheckboxChange('item', '기동전사 건담 복수의 레퀴엠')}></input>기동전사 건담 복수의 레퀴엠</label></div>
                                        <div><label><input type='checkbox' checked={!!selectedFilters.item['신기동전사 건담W']} onChange={() => handleCheckboxChange('item', '신기동전사 건담W')}></input>신기동전사 건담W</label></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                {/* 아이템 카드 */}
                {ItemDataBase.map(item => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
            {/* 페이지 네이션 */}
            <div className='pagination-container'>
                <div className='pagination'>
                    {Array.from({ length: totalNumberOfPages }).map((_, index) => (
                        <Link
                            key={index}
                            to={`/ItemList?page=${index + 1}`}
                            className={`page-link ${currentPage === index + 1 ? 'active' : ''}${currentPage !== index + 1 ? 'disabled' : ''}`}
                            onClick={() => handlePageClick(index + 1)}
                        >
                            {index + 1}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ItemList;
