import './MyPage.css';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { fetchUserInfo as fetchUserInfoFromUtils } from '../utils/fetchUserInfo.js';

const fetchUserInfoLocal = () => {
    // 함수 로직
};

const MyPageleft = () => {
    return (
        <div className='mypage_container'>
            <div className='mypage_menu'>
                <h2 className='MyPage_h2'>마이페이지</h2>
                <ul>
                    <li><a href="/Cart">장바구니</a></li>
                    <li><a href="/review">리뷰관리</a></li>
                    <li><a href="/profile">회원정보변경</a></li>
                    <li><a href="/Order">구매내역</a></li>
                    <li>알림신청</li>
                </ul>
                <h2 className='MyPage_h2'>나의 혜택관리</h2>
                <ul>
                    <li>회원등급</li>
                    <li>구매실적</li>
                    <li>포인트내역</li>
                    <li>쿠폰내역</li>
                </ul>
            </div>
        </div>
    );
};

export default MyPageleft;