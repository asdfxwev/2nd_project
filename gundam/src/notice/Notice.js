import NoticeData from "./NoticeData";
import NoticeDelivery from './NoticeDelivery';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faChevronLeft, faAngleRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import './Notice.css';


export default function Notice() {

    const [visibleNotice, setVisibleNotice] = useState(null);
    const [visibleNoticeMenu, setVisibleNoticeMenu] = useState(null);
    const [selectedPage, setSelectedPage] = useState('item1');

    function onNoticeMenu (onNoticeMenu) {
        if (visibleNoticeMenu !== onNoticeMenu) {
            setVisibleNoticeMenu(onNoticeMenu)
            setSelectedPage(onNoticeMenu);
        }
    }

    const data = NoticeData

    function onNoticeTitle(noticeId) {
        setVisibleNotice(noticeId === visibleNotice ? null : noticeId)
    }

    useEffect(() => {
        setVisibleNoticeMenu('item1');
    }, []);

    console.log(data);
    console.log(data.item);
    return (
            <div className="Notice">
                <h2 className="h2Notice">공지사항</h2>

                <div className="noticeTitleGrid">
                    <div style={{ width: '220px' }}>분류</div>
                    <div style={{ width: '1100px' }}>제목</div>
                    <div style={{ width: '220px' }}>날짜</div>
                </div>
                {data.item.map((notice, i) => (
                    <>
                        <div key={i} className="noticeGrid">
                            <div style={{ height: '50px', width: '220px' }}>{notice.notice}</div>
                            <div onClick={() => onNoticeTitle(notice.id)} style={{ transitionDuration: '1s', height:'50px', width: '1100px', cursor: 'pointer' }}>{notice.title}</div>
                            <div style={{ height: '50px', width: '220px' }}>{notice.date}</div>
                        </div>
                        <div className={`noticeData ${visibleNotice === notice.id ? 'noticeBlockData' : ''}`}>{notice.data}</div>
                    </>
                ))}
                {visibleNoticeMenu &&<NoticeDelivery noticeNum = {data[visibleNoticeMenu]} />}

                <ul className="noticeNumber">
                    <li><FontAwesomeIcon icon={faAnglesLeft} /></li>
                    <li><FontAwesomeIcon icon={faChevronLeft} /></li>
                    <li className={selectedPage === 'item1' ? 'selected' : ''} onClick={() => onNoticeMenu('item1')}><Link to='/Notice'>1</Link></li>
                    <li className={selectedPage === 'item2' ? 'selected' : ''} onClick={() => onNoticeMenu('item2')}><Link to='/Notice'>2</Link></li>
                    <li className={selectedPage === 'item3' ? 'selected' : ''} onClick={() => onNoticeMenu('item3')}><Link to='/Notice'>3</Link></li>
                    <li className={selectedPage === 'item4' ? 'selected' : ''} onClick={() => onNoticeMenu('item4')}><Link to='/Notice'>4</Link></li>
                    <li className={selectedPage === 'item5' ? 'selected' : ''} onClick={() => onNoticeMenu('item5')}><Link to='/Notice'>5</Link></li>
                    <li className={selectedPage === 'item6' ? 'selected' : ''} onClick={() => onNoticeMenu('item6')}><Link to='/Notice'>6</Link></li>
                    <li className={selectedPage === 'item7' ? 'selected' : ''} onClick={() => onNoticeMenu('item7')}><Link to='/Notice'>7</Link></li>
                    <li className={selectedPage === 'item8' ? 'selected' : ''} onClick={() => onNoticeMenu('item8')}><Link to='/Notice'>8</Link></li>
                    <li className={selectedPage === 'item9' ? 'selected' : ''} onClick={() => onNoticeMenu('item9')}><Link to='/Notice'>9</Link></li>
                    <li className={selectedPage === 'item10' ? 'selected' : ''} onClick={() => onNoticeMenu('item10')}><Link to='/Notice'>10</Link></li>
                    <li><FontAwesomeIcon icon={faAngleRight} /></li>
                    <li><FontAwesomeIcon icon={faAnglesRight} /></li>
                </ul>
            </div>
    )
}