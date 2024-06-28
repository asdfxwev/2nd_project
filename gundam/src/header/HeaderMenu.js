import React from 'react';
import './HeaderMenu.css';
import { Link, useLocation } from 'react-router-dom';


const HeaderMenu = ({ data, smallTopMenu, onLinkClick, menuAnimating, menuClosing }) => {
    const location = useLocation();

    const isMainPage = location.pathname !== '/';

    return (
        <>
            {data.map((menu, index) => (
                <div key={index} className={`detailMenu ${smallTopMenu ? 'smallMenu' : ''} ${isMainPage ? 'absolute' : ''} ${menuAnimating ? 'menuAnimation' : ''} ${menuClosing ? 'menuClosing' : ''}`}>
                    {menu.menu.map((item, idx) => (
                        <div key={idx} className={item.id}><a href='/ItemList?page=1' onClick={onLinkClick}>{item.name}</a></div>
                    ))}

                    {menu.items.map((item, idx) => (
                        <div key={idx} className={item.id}><Link to='/ItemList?page=1' onClick={onLinkClick}>{item.name}</Link></div>
                    ))}
                    {menu.itemss.map((item, idx) => (
                        <div key={idx} className={item.id}><Link to='/ItemList?page=1' onClick={onLinkClick}>{item.name}</Link></div>
                    ))}
                    {menu.itemsss && menu.itemsss.map((item, idx) => (
                        <div key={idx} className={item.id}><Link to='/ItemList?page=1' onClick={onLinkClick}>{item.name}</Link></div>
                    ))}
                    {menu.itemssss && menu.itemssss.map((item, idx) => (
                        <div key={idx} className={item.id}><Link to='/ItemList?page=1' onClick={onLinkClick}>{item.name}</Link></div>
                    ))}
                    {menu.image.map((image, idx) => (
                        <div key={idx} className={image.id}><Link to='/ItemList?page=1' onClick={onLinkClick}>{image.name}</Link></div>
                    ))}
                </div>
            ))}
        </>
    );
};

export default HeaderMenu;
