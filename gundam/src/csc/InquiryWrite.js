// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import CscData from "./CscData";
// import InquiryList from './InquiryList';
// import Csc from './Csc';
// import CscMenu from './CscMenu';
// import './Customerservice.css';
// import './InquiryWrite.css';
// import CscLeft from './CscLeft';
// export default function InquiryWrite() {
//     const [subject, setSubject] = useState('');
//     const [message, setMessage] = useState('');
//     const [inquiryType, setInquiryType] = useState('');
//     const navigate = useNavigate();
//     const handleInquiryChange = (event) => {
//         const labelElement = document.querySelector(`label[for=${event.target.id}]`);
//         if (labelElement) {
//             setInquiryType(labelElement.innerHTML);
//         }
//     };
//     const InquirySubmit = async (event) => {
//         event.preventDefault();
//         const inquiry = { inquiryType, subject, message };
//         try {
//             const response = await axios.post('http://localhost:3001/users', inquiry);
//             console.log(response.data);
//             navigate('/Csc/Inquiry');
//         } catch (error) {
//             console.error('Error:', error.response ? error.response.data : error.message);
//         }
//         const existingInquiries = JSON.parse(localStorage.getItem('loginInfo')) || { inquiries: [] };
//         const inquiriesArray = Array.isArray(existingInquiries.inquiries) ? existingInquiries.inquiries : [];
//         const updatedInquiries = { ...existingInquiries, inquiries: [...inquiriesArray, inquiry] };
//         localStorage.setItem('loginInfo', JSON.stringify(updatedInquiries));
//         setSubject('');
//         setMessage('');
//         setInquiryType('');
//     };
//     return (
//         <section className="cscContainer">
//             <CscLeft />
//             <form className="cscMain" onSubmit={InquirySubmit}>
//                 <h2 className="cscTitle">1:1문의 작성</h2>
//                 <div className="inquiryGrid">
//                     <div>문의유형</div>
//                     <div>
//                         <input name="inquirySelect" id="inquiryNum1" type="radio" onChange={handleInquiryChange} />
//                         <label htmlFor="inquiryNum1">배송</label>
//                         <input name="inquirySelect" id="inquiryNum2" type="radio" onChange={handleInquiryChange} />
//                         <label htmlFor="inquiryNum2">상품</label>
//                         <input name="inquirySelect" id="inquiryNum3" type="radio" onChange={handleInquiryChange} />
//                         <label htmlFor="inquiryNum3">반품</label>
//                         <input name="inquirySelect" id="inquiryNum4" type="radio" onChange={handleInquiryChange} />
//                         <label htmlFor="inquiryNum4">교환</label>
//                         <input name="inquirySelect" id="inquiryNum5" type="radio" onChange={handleInquiryChange} />
//                         <label htmlFor="inquiryNum5">완구A/S</label>
//                         <input name="inquirySelect" id="inquiryNum6" type="radio" onChange={handleInquiryChange} />
//                         <label htmlFor="inquiryNum6">주문/결제</label>
//                         <input name="inquirySelect" id="inquiryNum7" type="radio" onChange={handleInquiryChange} />
//                         <label htmlFor="inquiryNum7">이벤트</label>
//                         <input name="inquirySelect" id="inquiryNum8" type="radio" onChange={handleInquiryChange} />
//                         <label htmlFor="inquiryNum8">회원</label>
//                         <input name="inquirySelect" id="inquiryNum9" type="radio" onChange={handleInquiryChange} />
//                         <label htmlFor="inquiryNum9">시스템장애</label>
//                         <input name="inquirySelect" id="inquiryNum10" type="radio" onChange={handleInquiryChange} />
//                         <label htmlFor="inquiryNum10">기타</label>
//                     </div>
//                     <div>문의제목</div>
//                     <div>
//                         <label htmlFor="subject">Subject</label>
//                         <input
//                             id="subject"
//                             type="text"
//                             value={subject}
//                             onChange={(e) => setSubject(e.target.value)}
//                             required
//                         />
//                     </div>
//                     <div>문의내용</div>
//                     <div>
//                         <label htmlFor="message">Message</label>
//                         <textarea
//                             id="message"
//                             value={message}
//                             onChange={(e) => setMessage(e.target.value)}
//                             required
//                         ></textarea>
//                     </div>
//                     <button type="submit">Submit Inquiry</button>
//                 </div>
//             </form>
//         </section>
//     );
// }

import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import CscLeft from './CscLeft';
import './Customerservice.css';
import './InquiryWrite.css';

export default function InquiryWrite() {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [inquiryType, setInquiryType] = useState('');
    const navigate = useNavigate();

    const handleInquiryChange = (event) => {
        const labelElement = document.querySelector(`label[for=${event.target.id}]`);
        if (labelElement) {
            setInquiryType(labelElement.innerHTML);
        }
    };

    const InquirySubmit = async (event) => {
        event.preventDefault();
        const inquiry = { inquiryType, subject, message };

        // 로컬 스토리지에서 로그인 정보 가져오기
        const loginInfo = JSON.parse(localStorage.getItem('loginInfo')) || {};
        const userId = loginInfo.id;  // 사용자의 고유 ID 가져오기
        const inquiries = loginInfo.inquiries || [];

        try {
            // 문의 내용을 서버에 전송
            const response = await axios.post('http://localhost:3001/inquiries', { userId, ...inquiry });
            console.log(response.data);

            // 로그인 정보의 inquiries 배열에 문의 내용 추가
            const updatedLoginInfo = { ...loginInfo, inquiry };
            localStorage.setItem('loginInfo', JSON.stringify({ ...loginInfo, inquiries: updatedLoginInfo  }));

            // 페이지 이동
            navigate('/Csc/Inquiry');
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }


        setSubject('');
        setMessage('');
        setInquiryType('');
    };

    return (
        <section className="cscContainer">
            <CscLeft />
            <form className="cscMain" onSubmit={InquirySubmit}>
                <h2 className="cscTitle">1:1문의 작성</h2>
                <div className="inquiryGrid">
                    <div>문의유형</div>
                    <div>
                        <input name="inquirySelect" id="inquiryNum1" type="radio" onChange={handleInquiryChange} />
                        <label htmlFor="inquiryNum1">배송</label>
                        <input name="inquirySelect" id="inquiryNum2" type="radio" onChange={handleInquiryChange} />
                        <label htmlFor="inquiryNum2">상품</label>
                        <input name="inquirySelect" id="inquiryNum3" type="radio" onChange={handleInquiryChange} />
                        <label htmlFor="inquiryNum3">반품</label>
                        <input name="inquirySelect" id="inquiryNum4" type="radio" onChange={handleInquiryChange} />
                        <label htmlFor="inquiryNum4">교환</label>
                        <input name="inquirySelect" id="inquiryNum5" type="radio" onChange={handleInquiryChange} />
                        <label htmlFor="inquiryNum5">완구A/S</label>
                        <input name="inquirySelect" id="inquiryNum6" type="radio" onChange={handleInquiryChange} />
                        <label htmlFor="inquiryNum6">주문/결제</label>
                        <input name="inquirySelect" id="inquiryNum7" type="radio" onChange={handleInquiryChange} />
                        <label htmlFor="inquiryNum7">이벤트</label>
                        <input name="inquirySelect" id="inquiryNum8" type="radio" onChange={handleInquiryChange} />
                        <label htmlFor="inquiryNum8">회원</label>
                        <input name="inquirySelect" id="inquiryNum9" type="radio" onChange={handleInquiryChange} />
                        <label htmlFor="inquiryNum9">시스템장애</label>
                        <input name="inquirySelect" id="inquiryNum10" type="radio" onChange={handleInquiryChange} />
                        <label htmlFor="inquiryNum10">기타</label>
                    </div>
                    <div>문의제목</div>
                    <div>
                        <label htmlFor="subject">제목</label>
                        <input
                            id="subject"
                            type="text"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </div>
                    <div>문의내용</div>
                    <div>
                        <label htmlFor="message">내용</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">문의 제출</button>
                </div>
            </form>
        </section>
    );
}
