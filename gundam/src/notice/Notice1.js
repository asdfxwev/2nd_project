import NoticeData1 from "./NoticeData1";
import NoticeDelivery1 from './NoticeDelivery1';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faChevronLeft, faAngleRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import './Notice.css';
import axios from "axios";


export default function Notice() {

    const [visibleNotice, setVisibleNotice] = useState(null);
    const [visibleNoticeMenu, setVisibleNoticeMenu] = useState(null);
    const [selectedPage, setSelectedPage] = useState('item1');

    function onNoticeMenu(onNoticeMenu) {
        if (visibleNoticeMenu !== onNoticeMenu) {
            setVisibleNoticeMenu(onNoticeMenu)
            setSelectedPage(onNoticeMenu);
        }
    }

    useEffect(() => {
        setVisibleNoticeMenu('item1');
    }, []);

    return (
        <div className="Notice">
            <h2 className="h2Notice">공지사항</h2>

            <div style={{ height: '50px' }} className="noticeTitleGrid">
                <div style={{ width: '220px' }}>분류</div>
                <div style={{ width: '1100px' }}>제목</div>
                <div style={{ width: '220px' }}>날짜</div>
            </div>


            <ul className="noticeNumber">
                <li><FontAwesomeIcon icon={faAnglesLeft} /></li>
                <li><FontAwesomeIcon icon={faChevronLeft} /></li>
                <li className={selectedPage === 'item1' ? 'selected' : ''} onClick={() => onNoticeMenu('item1')}><NavLink to='/Notice'>1</NavLink></li>
                <li className={selectedPage === 'item2' ? 'selected' : ''} onClick={() => onNoticeMenu('item2')}><NavLink to='/Notice'>2</NavLink></li>
                <li className={selectedPage === 'item3' ? 'selected' : ''} onClick={() => onNoticeMenu('item3')}><NavLink to='/Notice'>3</NavLink></li>
                <li className={selectedPage === 'item4' ? 'selected' : ''} onClick={() => onNoticeMenu('item4')}><NavLink to='/Notice'>4</NavLink></li>
                <li className={selectedPage === 'item5' ? 'selected' : ''} onClick={() => onNoticeMenu('item5')}><NavLink to='/Notice'>5</NavLink></li>
                <li className={selectedPage === 'item6' ? 'selected' : ''} onClick={() => onNoticeMenu('item6')}><NavLink to='/Notice'>6</NavLink></li>
                <li className={selectedPage === 'item7' ? 'selected' : ''} onClick={() => onNoticeMenu('item7')}><NavLink to='/Notice'>7</NavLink></li>
                <li className={selectedPage === 'item8' ? 'selected' : ''} onClick={() => onNoticeMenu('item8')}><NavLink to='/Notice'>8</NavLink></li>
                <li className={selectedPage === 'item9' ? 'selected' : ''} onClick={() => onNoticeMenu('item9')}><NavLink to='/Notice'>9</NavLink></li>
                <li className={selectedPage === 'item10' ? 'selected' : ''} onClick={() => onNoticeMenu('item10')}><NavLink to='/Notice'>10</NavLink></li>
                <li><FontAwesomeIcon icon={faAngleRight} /></li>
                <li><FontAwesomeIcon icon={faAnglesRight} /></li>
            </ul>
        </div>
    )
}