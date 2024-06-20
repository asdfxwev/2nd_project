import './MainTab.css'
import { Routes, Route, NavLink } from 'react-router-dom';
import MainTabImage1 from './MainTabImage1';
import MainTabImage2 from './MainTabImage2';
import MainTabImage3 from './MainTabImage3';
import MainTabImage4 from './MainTabImage4';
import MainTabImage5 from './MainTabImage5';
import { useState, useEffect } from 'react';

export default function MainTab() {

    const [visibleTabMenu, setVisibleTabMenu] = useState(null);

    const TabMenu = (TabMenu) => {
        if (visibleTabMenu !== TabMenu) {
            setVisibleTabMenu(TabMenu);
        } 
    }

    useEffect(() => {
        setVisibleTabMenu('MainTabImage1');
    }, []);


    return (
        <section style={{ height: '100vh' }}>
            <div className="tabButtonContainer">
                <ul className="tabButtonList">
                    <li className="tabButton" onMouseEnter={() => TabMenu('MainTabImage1')}>
                        <NavLink to='/' >#마감임박! 종료예정 예약상품⏰</NavLink>
                    </li>
                    <li className="tabButton" onMouseEnter={() => TabMenu('MainTabImage2')}>
                        <NavLink to='/' >#시선집중! NEW 예약상품🎈</NavLink>
                    </li>
                    <li className="tabButton" onMouseEnter={() => TabMenu('MainTabImage3')}>
                        <NavLink to='/' >#잘나가는 인기완구🎁</NavLink>
                    </li>
                    <li className="tabButton" onMouseEnter={() => TabMenu('MainTabImage4')}>
                        <NavLink to='/' >#누구나 갖고싶은 프라모델🎇</NavLink>
                    </li>
                    <li className="tabButton" onMouseEnter={() => TabMenu('MainTabImage5')}>
                        <NavLink to='/' >#취향저격 피규어🔫</NavLink>
                    </li>
                </ul>
            </div>
            <div className="tabImageContainer">
                <ul className='tabImageList'>
                    <Routes>
                        {visibleTabMenu === 'MainTabImage1' && (
                            <Route path='/' element={<MainTabImage1 />} />
                        )}
                        {visibleTabMenu === 'MainTabImage2' && (
                            <Route path='/' element={<MainTabImage2 />} />
                        )}
                        {visibleTabMenu === 'MainTabImage3' && (
                            <Route path='/' element={<MainTabImage3 />} />
                        )}
                        {visibleTabMenu === 'MainTabImage4' && (
                            <Route path='/' element={<MainTabImage4 />} />
                        )}
                        {visibleTabMenu === 'MainTabImage5' && (
                            <Route path='/' element={<MainTabImage5 />} />
                        )}
                    </Routes>
                </ul>
            </div>
        </section>
    )
}