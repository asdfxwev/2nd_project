import { useState } from 'react';
import './Notice.css';


export default function NoticeDelivery({ noticeNum }) {
    const [visibleNotice, setVisibleNotice] = useState(null);

    function onNoticeTitle(noticeId) {
        setVisibleNotice(noticeId === visibleNotice ? null : noticeId)
    }

    return (
        <>
            {noticeNum.map((notice) => (
                <>
                    <div className="noticeDeliveryGrid">
                        <div style={{ height: '50px', width: '220px' }}>{notice.notice}</div>
                        <div onClick={() => onNoticeTitle(notice.id)} style={{ width: '1100px', cursor: 'pointer' }}>{notice.title}</div>
                        <div style={{ height: '50px', width: '220px' }}>{notice.date}</div>
                    </div>
                    <div className={`noticeData ${visibleNotice !== notice.id ? '' : 'noticeBlockData'}`}>{notice.data}</div>
                </>
            ))}
        </>
    )
}