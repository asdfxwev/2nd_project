import NoticeData from "../notice/NoticeData";
import { useState } from 'react'
import { faAnglesLeft, faChevronLeft, faAngleRight, faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import './Notice.css';


export default function Notice() {

    const [visibleNotice, setVisibleNotice] = useState(null);


    const data = NoticeData

    function onNoticeTitle(noticeId) {
        setVisibleNotice(noticeId === visibleNotice ? null : noticeId)
    }
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
                        <div style={{height:'50px', width:'1540px'}} className={`noticeData ${visibleNotice === notice.id ? 'noticeBlockData' : ''}`}>{notice.data}</div>
                    </>
                ))}
                {data.item1.map((notice) => (
                    <>
                        <div className="noticeDeliveryGrid">
                            <div style={{ height:'50px', width: '220px' }}>{notice.notice}</div>
                            <div onClick={() => onNoticeTitle(notice.id)} style={{ width: '1100px', cursor:'pointer' }}>{notice.title}</div>
                            <div style={{ height:'50px', width: '220px' }}>{notice.date}</div>
                        </div>
                        <div className={`noticeData ${visibleNotice === notice.id ? 'noticeBlockData' : ''}`}>{notice.data}</div>
                    </>
                ))}
                <ul className="noticeNumber">
                    <li><FontAwesomeIcon icon={faAnglesLeft} /></li>
                    <li><FontAwesomeIcon icon={faChevronLeft} /></li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li><FontAwesomeIcon icon={faAngleRight} /></li>
                    <li><FontAwesomeIcon icon={faAnglesRight} /></li>
                </ul>
            </div>
    )
}