// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import CscData from "./CscData";
// import InquiryList from './InquiryList';
// import Csc from './Csc';
// import CscMenu from './CscMenu';
// import './Customerservice.css';
// import './InquiryWrite.css';

// export default function InquiryWrite() {
//     const [subject, setSubject] = useState('');
//     const [message, setMessage] = useState('');
//     const [inquiryType, setInquiryType] = useState('');

//     const handleInquiryChange = (event) => {
//         console.log(event.target.id);
//         const label = document.querySelectorAll(`#${event.target.id}`);
//         console.log(label);
//         console.log(label[1]);
//         console.log(label[1].innerHTML);
//         if (label) {
//             setInquiryType(label[1].innerHTML);
//         }
//     };

//     const InquirySubmit = (event) => {
//         event.preventDefault();
//         const newInquiry = { subject, message, inquiryType };
//         const existingInquiries = JSON.parse(localStorage.getItem('loginInfo')) || [];
//         const updatedInquiries = {...existingInquiries, newInquiry};
//         localStorage.setItem('loginInfo', JSON.stringify(updatedInquiries));
//         setSubject('');
//         setMessage('');
//         setInquiryType('');
//     };

//     return (
//         <section className="cscContainer">
//             <div className="cscSection">
//                 <h2>고객센터</h2>
//                 <ul>
//                     <li>자주묻는질문</li>
//                     <li>고객센터</li>
//                     <li>1:1 문의</li>
//                     <li>건프라 가이드</li>
//                     <li>완구 설명서</li>
//                     <li>A/S안내</li>
//                 </ul>
//             </div>
//             <form className="cscMain" onSubmit={InquirySubmit}>
//                 <h2 className="cscTitle">1:1문의 작성</h2>
//                 <div className="inquiryGrid">
//                     <div>문의유형</div>
//                     <div>
//                         <input name="inquirySelect" id="inquiryNum1" type="radio" onChange={handleInquiryChange} />
//                         <label id="inquiryNum1" htmlFor="inquiryNum1">배송</label>
//                         <input name="inquirySelect" id="inquiryNum2" type="radio" onChange={handleInquiryChange} />
//                         <label id="inquiryNum2" htmlFor="inquiryNum2">상품</label>
//                         <input name="inquirySelect" id="inquiryNum3" type="radio" onChange={handleInquiryChange} />
//                         <label id="inquiryNum3" htmlFor="inquiryNum3">반품</label>
//                         <input name="inquirySelect" id="inquiryNum4" type="radio" onChange={handleInquiryChange} />
//                         <label id="inquiryNum4" htmlFor="inquiryNum4">교환</label>
//                         <input name="inquirySelect" id="inquiryNum5" type="radio" onChange={handleInquiryChange} />
//                         <label id="inquiryNum5" htmlFor="inquiryNum5">완구A/S</label>
//                         <input name="inquirySelect" id="inquiryNum6" type="radio" onChange={handleInquiryChange} />
//                         <label id="inquiryNum6" htmlFor="inquiryNum6">주문/결제</label>
//                         <input name="inquirySelect" id="inquiryNum7" type="radio" onChange={handleInquiryChange} />
//                         <label id="inquiryNum7" htmlFor="inquiryNum7">이벤트</label>
//                         <input name="inquirySelect" id="inquiryNum8" type="radio" onChange={handleInquiryChange} />
//                         <label id="inquiryNum8" htmlFor="inquiryNum8">회원</label>
//                         <input name="inquirySelect" id="inquiryNum9" type="radio" onChange={handleInquiryChange} />
//                         <label id="inquiryNum9" htmlFor="inquiryNum9">시스템장애</label>
//                         <input name="inquirySelect" id="inquiryNum10" type="radio" onChange={handleInquiryChange} />
//                         <label id="inquiryNum10" htmlFor="inquiryNum10">기타</label>
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


import { Link, useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CscData from "./CscData";
import InquiryList from './InquiryList';
import Csc from './Csc';
import CscMenu from './CscMenu';
import './Customerservice.css';
import './InquiryWrite.css';

export default function InquiryWrite() {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [inquiryType, setInquiryType] = useState('');
    const navigate = useNavigate();

    const handleInquiryChange = (event) => {
        console.log(event.target.id);
        const label = document.querySelectorAll(`#${event.target.id}`);
        console.log(label);
        console.log(label[1]);
        console.log(label[1].innerHTML);
        if (label) {
            setInquiryType(label[1].innerHTML);
        }
    };

    const InquirySubmit = async (event) => {
        event.preventDefault();
        const inquries = { inquiryType, subject, message };
        try {
            const response = await axios.post('http://localhost:3001/inquiries', inquries);
            console.log(response.data);
            navigate('/Csc/Inquiry')
        } catch (error) {
            console.error('error', error.response ? error.response.data : error.message);
        }
        let addInquiry = [];
        const existingInquiries = JSON.parse(localStorage.getItem('loginInfo')) || [];
        if (existingInquiries.inquiry.inquiryType === null) {
            addInquiry = inquries;
        } else {
            addInquiry = [...existingInquiries.inquiry,inquries]
        }
        // const addInquiry = [...existingInquiries.inquiry,inquries];
        console.log(addInquiry);
        const updatedInquiries = {...existingInquiries, inquiry:addInquiry };

        localStorage.setItem('loginInfo', JSON.stringify(updatedInquiries));
        setSubject('');
        setMessage('');
        setInquiryType('');
    };

    return (
        <section className="cscContainer">
            <div className="cscSection">
                <h2>고객센터</h2>
                <ul>
                    <li>자주묻는질문</li>
                    <li>고객센터</li>
                    <li>1:1 문의</li>
                    <li>건프라 가이드</li>
                    <li>완구 설명서</li>
                    <li>A/S안내</li>
                </ul>
            </div>
            <form className="cscMain" onSubmit={InquirySubmit}>
                <h2 className="cscTitle">1:1문의 작성</h2>
                <div className="inquiryGrid">
                    <div>문의유형</div>
                    <div>
                        <input name="inquirySelect" id="inquiryNum1" type="radio" onChange={handleInquiryChange} />
                        <label id="inquiryNum1" htmlFor="inquiryNum1">배송</label>
                        <input name="inquirySelect" id="inquiryNum2" type="radio" onChange={handleInquiryChange} />
                        <label id="inquiryNum2" htmlFor="inquiryNum2">상품</label>
                        <input name="inquirySelect" id="inquiryNum3" type="radio" onChange={handleInquiryChange} />
                        <label id="inquiryNum3" htmlFor="inquiryNum3">반품</label>
                        <input name="inquirySelect" id="inquiryNum4" type="radio" onChange={handleInquiryChange} />
                        <label id="inquiryNum4" htmlFor="inquiryNum4">교환</label>
                        <input name="inquirySelect" id="inquiryNum5" type="radio" onChange={handleInquiryChange} />
                        <label id="inquiryNum5" htmlFor="inquiryNum5">완구A/S</label>
                        <input name="inquirySelect" id="inquiryNum6" type="radio" onChange={handleInquiryChange} />
                        <label id="inquiryNum6" htmlFor="inquiryNum6">주문/결제</label>
                        <input name="inquirySelect" id="inquiryNum7" type="radio" onChange={handleInquiryChange} />
                        <label id="inquiryNum7" htmlFor="inquiryNum7">이벤트</label>
                        <input name="inquirySelect" id="inquiryNum8" type="radio" onChange={handleInquiryChange} />
                        <label id="inquiryNum8" htmlFor="inquiryNum8">회원</label>
                        <input name="inquirySelect" id="inquiryNum9" type="radio" onChange={handleInquiryChange} />
                        <label id="inquiryNum9" htmlFor="inquiryNum9">시스템장애</label>
                        <input name="inquirySelect" id="inquiryNum10" type="radio" onChange={handleInquiryChange} />
                        <label id="inquiryNum10" htmlFor="inquiryNum10">기타</label>
                    </div>
                    <div>문의제목</div>
                    <div>
                        <label htmlFor="subject">Subject</label>
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
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Submit Inquiry</button>
                </div>
            </form>
        </section>
    );
}
