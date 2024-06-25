import React from 'react';
import './Footer.css'; // 스타일을 위한 CSS 파일
import { useLocation } from 'react-router-dom';


// import gun_img from './public/image/Gundam_Logo_3.jpg';

function Footer() {

    const location = useLocation();
    const isLoginPage = location.pathname === '/Login';
    const isSignupPage = location.pathname === '/Login/Join'; // Check for Signup page

    // Return null if on Login or Signup page
    if (isLoginPage || isSignupPage) {
        return null;
    }


    return (
        <div className={`footer  ${isLoginPage ? 'isLoginPage' : ''}`}>
            {/* <div className='footer_top'>


            </div> */}
            <div className='footer_bottom'>
                <img className='img' src='./image/logo.png' alt="Gundam Logo" />
                <pre className='footer_p'> 법인명: 코딩의 목적 | 주소: 경기도 분당구 성남시<br />
                    대표이사: 코딩의목적 | 사업자등록번호: 000-000-0000 | 통신판매업신고: 제2020-서울중구-1520호<br />
                    이메일문의: dydejr852@naver.com | 코리아몰: dydejr852@naver.com <br />
                    코딩의 목적의 모든 콘텐츠는 무단 도용 시 사랑을 받을 수 있습니다. <br /><br />

                    Bandainamcokorea ALL RIGHTS RESERVED.
                </pre>

                <pre>
                    <p>고객센터 : 1544-4607
                        <br />

                        전화문의-평일 9:00 ~ 18:00 / 점심시간 12:30 ~ 13:30 <br /> ( 토,일및법정공휴일휴무 )</p> <br />

                    <button>  <a href="#home">고객센터</a></button>
                    <button> <a href="/Notice">공지사항</a></button>


                </pre>

            </div>
        </div>
    );
}

export default Footer;
