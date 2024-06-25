import NoticeData from "../notice/NoticeData";
import './Notice.css';

export default function Notice() {

    const data = NoticeData
    console.log(data);
    console.log(data.item);
    return (
        <section>

            <div>
                <h2>공지사항</h2>
                <ul>
                    <li>전체</li>
                    <li>공지사항</li>
                    <li>이벤트</li>
                    <li>배송</li>
                </ul>
                <div style={{display:'flex'}}>
                    <div>분류</div>
                    <div>제목</div>
                    <div>날짜</div>
                </div>
                <div className="noticeGrid">
                    {data.item.map((notice) => (
                        <>
                            <div>{notice.notice}</div>
                            <div>{notice.title}</div>
                            <div>{notice.date}</div>
                        </>
                    ))}
                </div>
            </div>
        </section>
    )
}