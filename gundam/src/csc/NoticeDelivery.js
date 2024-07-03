import { useState } from 'react';
import './Notice.css';
import { useLocation } from 'react-router-dom';



export default function NoticeDelivery({ noticeNum }) {
    const [visibleNotice, setVisibleNotice] = useState(null);

    function onNoticeTitle(noticeId) {
        setVisibleNotice(noticeId === visibleNotice ? null : noticeId)
    }   
    const location = useLocation();  // 현재 페이지의 URL을 가져옴
    console.log('location.pathname='+location.pathname);  // 현재 페이지의 URL을 출력 location.pathname=/ItemList/ItemDetail/1
    localStorage.setItem('currentUrl', location.pathname);  // 현재 페이지의 URL을 로컬스토리지에 저장


    // console.log({ noticeNum });

    return (
        <>
            <div className="noticeDeliveryGrid">
                <div style={{ height: '50px', width: '220px' }}>{noticeNum.notice}</div>
                <div onClick={() => onNoticeTitle(noticeNum.id)} style={{ width: '1100px', cursor: 'pointer' }}>{noticeNum.title}</div>
                <div style={{ height: '50px', width: '220px' }}>{noticeNum.date}</div>
            </div>
            <div className={`noticeData ${visibleNotice !== noticeNum.id ? '' : 'noticeBlockData'}`}>{noticeNum.data}</div>
        </>
    )
}