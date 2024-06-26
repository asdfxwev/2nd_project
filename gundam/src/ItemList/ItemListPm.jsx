import React, { useEffect, useState } from 'react';
import ItemCard from './ItemCard';
import './ItemList.css';
import ItemDataBaseOp from './ItemDataBase';
import TuneIcon from '@mui/icons-material/Tune';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const ItemList = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [filtersVisible, setFiltersVisible] = useState(true);
    const [itemListClass, setItemListClass] = useState('item-list');
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

    const toggleFiltersVisible = () => {
        setFiltersVisible(!filtersVisible);
        setItemListClass(filtersVisible ? 'item-list-hidden' : 'item-list');
    };

    const removeFilter = (section, filter) => {
        setSelectedFilters(prevFilters => ({
            ...prevFilters,
            [section]: {
                ...prevFilters[section],
                [filter]: false
            }
        }));
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedItems, setPaginatedItems] = useState([]);
    const itemsPerPage = 20;

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
        navigate(`/ItemList?page=${pageNumber}`);
        window.scrollTo(0, 0);
    };

    const totalNumberOfPages = Math.ceil(ItemDataBase.length / itemsPerPage);


    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const page = parseInt(query.get('page')) || 1;
        setCurrentPage(page);
    }, [location]);

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
    };

    const handleCheckboxChange = (section, filter) => {
        if (section === 'price') {
            setSelectedFilters(prevFilters => ({
                ...prevFilters,
                [section]: {
                    ...Object.keys(prevFilters[section]).reduce((acc, key) => {
                        if (key === 'visible') {
                            acc[key] = prevFilters[section][key];
                        } else {
                            acc[key] = key === filter ? !prevFilters[section][filter] : false;
                        }
                        return acc;
                    }, {})
                }
            }));
        } else {
            setSelectedFilters(prevFilters => ({
                ...prevFilters,
                [section]: {
                    ...prevFilters[section],
                    [filter]: !prevFilters[section][filter]
                }
            }));
        }
    };

    useEffect(() => {
        const filteredItems = ItemDataBaseOp.filter(item => {
            let show = true;

            if (selectedFilters.information['세일상품만'] && !item.isOnSale) show = false;
            if (selectedFilters.information['품절상품 제외'] && item.isSoldOut) show = false;
            if (selectedFilters.information['예약종료상품 제외'] && item.isReservationEnded) show = false;

            if (selectedFilters.price['전체'] && item.price >= 0) show = true;
            if (selectedFilters.price['10,000원 미만'] && item.price >= 10000) show = false;
            if (selectedFilters.price['10,000원 이상 ~ 50,000원 미만'] && (item.price < 10000 || item.price >= 50000)) show = false;
            if (selectedFilters.price['50,000원 이상 ~ 100,000원 미만'] && (item.price < 50000 || item.price >= 100000)) show = false;
            if (selectedFilters.price['100,000원 이상'] && item.price < 100000) show = false;

            const brandFilters = ['1/100', 'FG', 'FIGURE-RISE MECHANICS', 'FIGURE-RISE STANDARD', 'FIGURE-RISE'];
            if (!brandFilters.some(brand => selectedFilters.brand[brand] && item.brand === brand)) {
                if (brandFilters.some(brand => selectedFilters.brand[brand])) {
                    show = false;
                }
            }

            const itemFilters = ['건담 무사', '건담 브레이커 배틀로그', '기동전사 건담 수성의 마녀', '기동전사 건담 복수의 레퀴엠', '신기동전사 건담W'];
            if (!itemFilters.some(comment => selectedFilters.item[comment] && item.comment === comment)) {
                if (itemFilters.some(comment => selectedFilters.item[comment])) {
                    show = false;
                }
            }

            return show;
        });

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, filteredItems.length);
        const paginatedItems = filteredItems.slice(startIndex, endIndex);
        setPaginatedItems(paginatedItems);
    }, [currentPage, selectedFilters, itemsPerPage]);


    return (
        <div className='item-first'>
            <div className='item-size-200'><h1>건프라</h1></div>
            <div className='search-bar'> 
                <label className='search-bar'>찾는 제품이 있나요?</label>
                <input className='search-bar-input' type="text" list='figure-option' placeholder='검색어를 입력해주세요.'/>
                <button className='button-class'><FontAwesomeIcon icon={faSearch}/></button>
                <datalist id='figure-option'>
                    <option value="건프라"/>
                    <option value="원피스"/>
                    <option value="나루토"/>
                    <option value="블리치"/>
                    <option value="에반게리온"/>
                    <option value="료이키 텐카이"/>
                </datalist>
            </div>
            <div className='item-size-150' onClick={toggleFiltersVisible}>
                <TuneIcon />{filtersVisible ? '필터 숨기기' : '필터 보이기'}
            </div>
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
                                                        <button onClick={() => removeFilter(section, filter)}>{filter} x</button>
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
                                        <div><label><input type='radio' name='price' checked={selectedFilters.price['전체']} onChange={() => handleCheckboxChange('price', '전체')}></input>전체</label></div>
                                        <div><label><input type='radio' name='price' checked={selectedFilters.price['10,000원 미만']} onChange={() => handleCheckboxChange('price', '10,000원 미만')}></input>10,000원 미만</label></div>
                                        <div><label><input type='radio' name='price' checked={selectedFilters.price['10,000원 이상 ~ 50,000원 미만']} onChange={() => handleCheckboxChange('price', '10,000원 이상 ~ 50,000원 미만')}></input>10,000원 이상 ~ 50,000원 미만</label></div>
                                        <div><label><input type='radio' name='price' checked={selectedFilters.price['50,000원 이상 ~ 100,000원 미만']} onChange={() => handleCheckboxChange('price', '50,000원 이상 ~ 100,000원 미만')}></input>50,000원 이상 ~ 100,000원 미만</label></div>
                                        <div><label><input type='radio' name='price' checked={selectedFilters.price['100,000원 이상']} onChange={() => handleCheckboxChange('price', '100,000원 이상')}></input>100,000원 이상</label></div>
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
                                        <div><label><input type='checkbox' checked={selectedFilters.brand['1/100']} onChange={() => handleCheckboxChange('brand', '1/100')}></input>1/100</label></div>
                                        <div><label><input type='checkbox' checked={selectedFilters.brand['FG']} onChange={() => handleCheckboxChange('brand', 'FG')}></input>FG</label></div>
                                        <div><label><input type='checkbox' checked={selectedFilters.brand['FIGURE-RISE MECHANICS']} onChange={() => handleCheckboxChange('brand', 'FIGURE-RISE MECHANICS')}></input>FIGURE-RISE MECHANICS</label></div>
                                        <div><label><input type='checkbox' checked={selectedFilters.brand['FIGURE-RISE STANDARD']} onChange={() => handleCheckboxChange('brand', 'FIGURE-RISE STANDARD')}></input>FIGURE-RISE STANDARD</label></div>
                                        <div><label><input type='checkbox' checked={selectedFilters.brand['FIGURE-RISE']} onChange={() => handleCheckboxChange('brand', 'FIGURE-RISE')}></input>FIGURE-RISE</label></div>
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
                                        <div><label><input type='checkbox' checked={selectedFilters.item['건담 무사']} onChange={() => handleCheckboxChange('item', '건담 무사')}></input>건담 무사</label></div>
                                        <div><label><input type='checkbox' checked={selectedFilters.item['건담 브레이커 배틀로그']} onChange={() => handleCheckboxChange('item', '건담 브레이커 배틀로그')}></input>건담 브레이커 배틀로그</label></div>
                                        <div><label><input type='checkbox' checked={selectedFilters.item['기동전사 건담 수성의 마녀']} onChange={() => handleCheckboxChange('item', '기동전사 건담 수성의 마녀')}></input>기동전사 건담 수성의 마녀</label></div>
                                        <div><label><input type='checkbox' checked={selectedFilters.item['기동전사 건담 복수의 레퀴엠']} onChange={() => handleCheckboxChange('item', '기동전사 건담 복수의 레퀴엠')}></input>기동전사 건담 복수의 레퀴엠</label></div>
                                        <div><label><input type='checkbox' checked={selectedFilters.item['신기동전사 건담W']} onChange={() => handleCheckboxChange('item', '신기동전사 건담W')}></input>신기동전사 건담W</label></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                {/* 아이템 카드 */}
                {paginatedItems.map(item => (
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
                            className={`page-link ${currentPage === index + 1 ? 'active' : ''}`}
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

