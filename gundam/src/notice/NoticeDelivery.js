import { useState } from 'react';
import './Notice.css';


export default function NoticeDelivery({ noticeNum }) {
    const [visibleNotice, setVisibleNotice] = useState(null);

    function onNoticeTitle(noticeId) {
        setVisibleNotice(noticeId === visibleNotice ? null : noticeId)
    }

    console.log({noticeNum});

    return (
        <>
            {/* {noticeNum.map((notice) => ( */}
                <>
                    <div className="noticeDeliveryGrid">
                        <div style={{ height: '50px', width: '220px' }}>{noticeNum.notice}</div>
                        <div onClick={() => onNoticeTitle(noticeNum.id)} style={{ width: '1100px', cursor: 'pointer' }}>{noticeNum.title}</div>
                        <div style={{ height: '50px', width: '220px' }}>{noticeNum.date}</div>
                    </div>
                    <div className={`noticeData ${visibleNotice !== noticeNum.id ? '' : 'noticeBlockData'}`}>{noticeNum.data}</div>
                </>
            {/* ))} */}
        </>
    )
}