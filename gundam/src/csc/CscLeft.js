import { Link, useNavigate, useLocation } from 'react-router-dom';


export default function CscLeft() {
    return (
        <>
            <h2>고객센터</h2>
            <ul>
                <li>자주묻는질문</li>
                <li>공지사항</li>
                <li><Link to={`/Csc/Inquiry`} >1:1 문의</Link></li>
                <li>건프라 가이드</li>
                <li>완구 설명서</li>
                <li>A/S안내</li>
            </ul>
        </>
    )
}