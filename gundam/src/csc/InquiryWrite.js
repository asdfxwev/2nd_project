import { Link, useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Customerservice.css';
import './InquiryWrite.css';
import CscLeft from './CscLeft';

export default function InquiryWrite() {
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [inquiryType, setInquiryType] = useState('배송');
    const navigate = useNavigate();
    
    const existingInquiries = JSON.parse(localStorage.getItem('loginInfo'));
    const userId = existingInquiries.id; // Assuming the user ID is stored here

    const handleInquiryChange = (event) => {
        const labelElement = document.querySelector(`label[for=${event.target.id}]`);
        if (labelElement) {
            setInquiryType(labelElement.innerHTML);
        }
    };

    const InquirySubmit = async (event) => {
        event.preventDefault();

        try {
            // Fetch the current user data
            const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
            const userData = userResponse.data;

            const id = userData.inquiryCounter || 1;

            const newInquiry = { id, inquiryType, subject, message };
            
            // Add the new inquiry to the user's inquiries list
            userData.inquries = userData.inquries ? [...userData.inquries, newInquiry] : [newInquiry];
            userData.inquiryCounter = id + 1;
            // Update the user data on the server
            await axios.put(`http://localhost:3001/users/${userId}`, userData);

            navigate('/Csc/Inquiry?page=1');
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }

        setSubject('');
        setMessage('');
        setInquiryType('배송');
    };

    function onSubjectChange(e) {
        setSubject(e.target.value)
        // setInquiryNum(e => e + 1)
    }

    return (
        <section className="cscContainer">
            <CscLeft />
            <form className="cscMain" onSubmit={InquirySubmit}>
                <h2 className="cscTitle">1:1문의 작성</h2>
                <div className="inquiryGrid">
                    <div className="inquiryType">문의유형</div>
                    <div className="inquiryTypeList">
                        <div >
                            <input name="inquirySelect" id="inquiryNum1" type="radio" onChange={handleInquiryChange} defaultChecked />
                            <label For="inquiryNum1">배송</label>
                        </div>
                        <div>
                            <input name="inquirySelect" id="inquiryNum2" type="radio" onChange={handleInquiryChange} />
                            <label For="inquiryNum2">상품</label>
                        </div>
                        <div>
                            <input name="inquirySelect" id="inquiryNum3" type="radio" onChange={handleInquiryChange} />
                            <label For="inquiryNum3">반품</label>
                        </div>
                        <div>
                            <input name="inquirySelect" id="inquiryNum4" type="radio" onChange={handleInquiryChange} />
                            <label For="inquiryNum4">교환</label>
                        </div>
                        <div>
                            <input name="inquirySelect" id="inquiryNum5" type="radio" onChange={handleInquiryChange} />
                            <label For="inquiryNum5">완구A/S</label>
                        </div>
                        <div>
                            <input name="inquirySelect" id="inquiryNum6" type="radio" onChange={handleInquiryChange} />
                            <label For="inquiryNum6">주문/결제</label>
                        </div>
                        <div>
                            <input name="inquirySelect" id="inquiryNum7" type="radio" onChange={handleInquiryChange} />
                            <label For="inquiryNum7">이벤트</label>
                        </div>
                        <div>
                            <input name="inquirySelect" id="inquiryNum8" type="radio" onChange={handleInquiryChange} />
                            <label For="inquiryNum8">회원</label>
                        </div>
                        <div>
                            <input name="inquirySelect" id="inquiryNum9" type="radio" onChange={handleInquiryChange} />
                            <label For="inquiryNum9">시스템장애</label>
                        </div>
                        <div>
                            <input name="inquirySelect" id="inquiryNum10" type="radio" onChange={handleInquiryChange} />
                            <label For="inquiryNum10">기타</label>
                        </div>
                    </div>
                    <div className="inquiryType"><label For="subject">문의제목</label>
                    </div>
                    <div>
                        <input className="inquriySubject"
                            id="subject"
                            type="text"
                            value={subject}
                            onChange={onSubjectChange}
                            required
                        />
                    </div>
                    <div className="inquiryType"><label For="message">문의내용</label></div>
                    <div>
                        <textarea className="inquiryMessage"
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="inquiryTypeBtn">
                        <button className="inquiryBtn" type="submit">문의작성</button>
                    </div>
                </div>
            </form>
        </section>
    );
}


// import { Link, useNavigate, useLocation } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './Customerservice.css';
// import './InquiryWrite.css';
// import CscLeft from './CscLeft';

// // InquiryWrite 컴포넌트를 정의합니다.
// export default function InquiryWrite() {
//     const [subject, setSubject] = useState(''); // 문의 제목 상태
//     const [message, setMessage] = useState(''); // 문의 내용 상태
//     const [inquiryType, setInquiryType] = useState('배송'); // 문의 유형 상태
//     const navigate = useNavigate();
    
//     const existingInquiries = JSON.parse(localStorage.getItem('loginInfo')); // 로컬 스토리지에서 로그인 정보를 가져옴
//     const userId = existingInquiries.id; // 사용자 ID

//     // 작성된 문의를 제출하는 함수
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!subject || !message) {
//             alert('제목과 내용을 입력하세요.');
//             return;
//         }
//     };
//     const location = useLocation();  // 현재 페이지의 URL을 가져옴
//     console.log('location.pathname='+location.pathname);  // 현재 페이지의 URL을 출력 location.pathname=/ItemList/ItemDetail/1
//     localStorage.setItem('currentUrl', location.pathname);  // 현재 페이지의 URL을 로컬스토리지에 저장


//     const InquirySubmit = async (event) => {
//         event.preventDefault();

//         try {
//             const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
//             const userData = userResponse.data;

//             const newInquiry = {
//                 id: userData.inquries.length + 1,
//                 subject,
//                 message,
//                 inquiryType
//             };

//             const updatedInquiries = [...userData.inquries, newInquiry];

//             await axios.put(`http://localhost:3001/users/${userId}`, { ...userData, inquries: updatedInquiries });

//             setSubject('');
//             setMessage('');
//             setInquiryType('배송');

//             alert('문의가 성공적으로 작성되었습니다.');
//             navigate('/Csc/Inquiry');
//         } catch (error) {
//             console.error('Error submitting inquiry:', error.response ? error.response.data : error.message);
//         }
//     };

//     return (
//         <section className="cscContainer">
//             <div className="cscSection">
//                 <CscLeft />
//             </div>
//             <div className="cscMain">
//                 <h2 className="cscTitle h2Notice">문의하기</h2>
//                 <form onSubmit={InquirySubmit} className="inquiryWriteForm">
//                     <label>
//                         제목:
//                         <input
//                             type="text"
//                             value={subject}
//                             onChange={(e) => setSubject(e.target.value)}
//                             required
//                         />
//                     </label>
//                     <label>
//                         내용:
//                         <textarea
//                             value={message}
//                             onChange={(e) => setMessage(e.target.value)}
//                             required
//                         />
//                     </label>
//                     <label>
//                         유형:
//                         <select
//                             value={inquiryType}
//                             onChange={(e) => setInquiryType(e.target.value)}
//                         >
//                             <option value="배송">배송</option>
//                             <option value="환불">환불</option>
//                             <option value="제품">제품</option>
//                         </select>
//                     </label>
//                     <button type="submit">제출</button>
//                 </form>
//             </div>
//         </section>
//     );
// }