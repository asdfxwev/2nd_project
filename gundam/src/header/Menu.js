import './Header.css';
import HeaderMenu1 from "./HeaderMenu1";
import HeaderMenu2 from "./HeaderMenu2";
import HeaderMenu3 from "./HeaderMenu3";
import HeaderMenu4 from "./HeaderMenu4";
import { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';

export default function Menu() {
    const [visibleMenu, setVisibleMenu] = useState(null);

    const Menu = (menu) => {
        if (visibleMenu === menu) {
            setVisibleMenu(null);
        } else {
            setVisibleMenu(menu);
        }
    };


    const brand1 = [
        { id: 'brand1', name: 'HG' },
        { id: 'brand2', name: 'RG' },
        { id: 'brand3', name: 'MG' },
        { id: 'brand4', name: 'PG' },
        { id: 'brand5', name: 'RE/100' },
    ];

    const art1 = [
        { id: 'art1', name: '기동전사건담 수성의 마녀' },
        { id: 'art2', name: '기동전사건담' },
        { id: 'art3', name: '기동전사건담 역습의 샤아' },
        { id: 'art4', name: '기동전사건담 UC' },
        { id: 'art5', name: '기동전사건담 SEED' },
    ];

    const brand2 = [
        { id: 'brand1', name: '엔트리 그레이드' },
        { id: 'brand2', name: 'HG' },
        { id: 'brand3', name: 'RG' },
        { id: 'brand4', name: 'Figure-rise시리즈' },
        { id: 'brand5', name: 'Figure-rise LABO' },
        { id: 'brand6', name: '포켓프라' },
        { id: 'brand7', name: '30MINUTES MISSIONS' },
    ];

    const art2 = [
        { id: 'art1', name: '드래곤볼' },
        { id: 'art2', name: '원피스' },
        { id: 'art3', name: '에반게리온' },
        { id: 'art4', name: '다이나믹 캐릭터즈' },
        { id: 'art5', name: '가면라이더' },
        { id: 'art6', name: '울트라맨' },
        { id: 'art7', name: '포켓몬스터' },
    ];

    const brand3 = [
        { id: 'brand1', name: 'ROBOT혼 시리즈' },
        { id: 'brand2', name: 'S.H.Figuarts 시리즈' },
        { id: 'brand3', name: 'Figuarts ZERO' },
        { id: 'brand4', name: '피규아트 미니' },
        { id: 'brand5', name: 'METAL BUILD' },
        { id: 'brand6', name: '초합금 시리즈' },
        { id: 'brand7', name: '30MINUTES MISSIONS' },
    ];

    const art3 = [
        { id: 'art1', name: '기동전사 건담' },
        { id: 'art2', name: '에반게리온' },
        { id: 'art3', name: '다이나믹 캐릭터즈' },
        { id: 'art4', name: '드래곤볼' },
        { id: 'art5', name: '원피스' },
        { id: 'art6', name: '울트라맨' },
        { id: 'art7', name: '귀멸의 칼날' },
    ];

    const brand13 = [
        { id: 'brand11', name: 'ESPRESTO' },
        { id: 'brand12', name: 'EXQ' },
        { id: 'brand13', name: 'GLITTER&GLAMOURS' },
        { id: 'brand14', name: 'GRANDISTA' },
        { id: 'brand15', name: 'KING OF ARTIST' },
        { id: 'brand16', name: 'QPOSKET' },
        { id: 'brand17', name: '그 외' },
    ];

    const art13 = [
        { id: 'art11', name: '드래곤볼' },
        { id: 'art12', name: '원피스' },
        { id: 'art13', name: '귀멸의 칼날' },
        { id: 'art14', name: '나루토' },
        { id: 'art15', name: '나의 히어로 아카데미아' },
        { id: 'art16', name: '건담' },
        { id: 'art17', name: '그 외' },
    ];

    const brand4 = [
        { id: 'brand1', name: '프라모델 제작 공구' },
        { id: 'brand2', name: '건담데칼' },
        { id: 'brand3', name: '건담마커' },
        { id: 'brand4', name: '그 외' },
    ]

    const art4 = [
        { id: 'art1', name: '포켓몬 스케일 월드' },
        { id: 'art2', name: 'SMP' },
        { id: 'art3', name: '식물대도감' },
        { id: 'art4', name: '식품완구' },
        { id: 'art5', name: '그 외' },
    ]

    const brand14 = [
        { id: 'brand11', name: '깜짝에그' },
        { id: 'brand12', name: '카드게임' },
        { id: 'brand13', name: '데스트 용품' },
        { id: 'brand14', name: '그 외' },
    ]


    return (
        <>
            <div className='h_main_container'>
                <div className="h_menu_container">
                    <div className="h_menu" onClick={() => Menu('headerMenu')}><NavLink to='/'>건프라</NavLink></div>
                    <div className="h_menu" onClick={() => Menu('headerMenu1')}><NavLink to='/'>애니프라</NavLink></div>
                    <div className="h_menu" onClick={() => Menu('headerMenu2')}><NavLink to='/'>피규어</NavLink></div>
                    <div className="h_menu" onClick={() => Menu('etc')}><NavLink to='/'>기타</NavLink></div>
                </div>

                <div className="h_right_container">
                    <div className="h_right h_login"><a href="/">로그인</a></div>
                    <div className="h_right h_mypage"><a href="/">마이페이지</a></div>
                    <div className="h_right h_shopping"><a href="/">장바구니</a></div>
                    <div className="h_right h_search" onClick={() => Menu('headerSearch')}><NavLink to='/'>검색</NavLink></div>
                </div>

                <Routes>
                    {visibleMenu === 'headerMenu' && (
                        <Route path='/' element={<HeaderMenu1 brand1={brand1} art1={art1} />} />
                    )}
                    {visibleMenu === 'headerMenu1' && (
                        <Route path='/' element={<HeaderMenu2 brand2={brand2} art2={art2} />} />
                    )}
                    {visibleMenu === 'headerMenu2' && (
                        <Route path='/' element={<HeaderMenu3 brand3={brand3} art3={art3} brand13={brand13} art13={art13} />} />
                    )}
                    {visibleMenu === 'etc' && (
                        <Route path='/' element={<HeaderMenu4 brand4={brand4} art4={art4} brand14={brand14} />} />
                    )}
                    {visibleMenu === 'headerSearch' && (
                        <Route path='/' element={<HeaderSearch />} />
                    )}
                </Routes>
            </div>
        </>
    );
}