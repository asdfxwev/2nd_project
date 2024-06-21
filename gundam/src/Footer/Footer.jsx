import React from 'react';
import './Footer.css'; // 스타일을 위한 CSS 파일


// import gun_img from './public/image/Gundam_Logo_3.jpg';

function Footer() {
    return (
        <div className="footer">
            <div className='footer_top'>
                <button>  <a href="#home">고객센터</a></button>
                <button> <a href="#about">공지사항</a></button>


            </div>
            <div className='footer_bottom'>
                <img className='img' src='./image/logo1.jpg' alt="Gundam Logo" />
                <pre className='footer_p'> 법인명: 반다이남코코리아주식회사 | 주소: (04516) 서울 중구 서소문로 89 (순화동, 순화빌딩) 5층<br />
                    대표이사: 야마미치후미아키 | 사업자등록번호: 106-81-86950 | 통신판매업신고: 제2010-서울중구-1720호<br />
                    이메일문의: as@bandainamcoasia.com | 반다이남코코리아몰: mall@bandainamcoasia.com <br />
                    반다이남코코리아몰의 모든 콘텐츠는 무단 도용 시 법적인 제재를 받을 수 있습니다. <br /><br />

                    Bandainamcokorea ALL RIGHTS RESERVED.
                </pre>

                <pre>
                    <p>고객센터 : 1544-4607 
                        <br />

                        전화문의-평일 9:00 ~ 18:00 / 점심시간 12:30 ~ 13:30 <br /> ( 토,일및법정공휴일휴무 )</p> <br />
                    


                </pre>

            </div>

        </div>
    );
}

export default Footer;

