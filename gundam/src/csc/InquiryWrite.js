import { Link, useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CscData from "./CscData";
import InquiryList from './InquiryList';
import Csc from './Csc';
import CscMenu from './CscMenu';
import './Customerservice.css';
import './InquiryWrite.css';
import CscLeft from './CscLeft';

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

    const existingInquiries = JSON.parse(localStorage.getItem('loginInfo'))
    console.log(existingInquiries.id);
    // const id = axios.get('http://localhost:3001/users', id)
    // console.log(id);

    // const apiUrl = 'http://localhost:3001/users';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/users');
                console.log(response);
                console.log(response.data);
                console.log(response.data.users);
                const userisss = response.data.map(user => user.id)
                console.log(userisss);


                // 예상대로 데이터가 오는지 확인 후 로직을 추가하세요.
            } catch (error) {
                console.error('데이터를 가져오는 중 오류 발생:', error);
            }
        };

        fetchData();
    }, []);

    axios.get('http://localhost:3001/users')
        .then(response => {
            // 서버로부터 받은 데이터에서 id 값을 추출
            const users = response.data.users; // users 배열을 가져옴
            console.log(users);
            console.log(users.id);
            const userIds = users.map(user => user.id); // 각 사용자의 id 값을 추출하여 배열로 만듦
            console.log(userIds);

            console.log('사용자들의 id 배열:', userIds);

            // userIds를 원하는 방식으로 처리할 수 있음
            // 예를 들어, 상태에 저장하거나 다른 처리를 할 수 있음
        })
        .catch(error => {
            // 오류 처리
            console.error('데이터를 가져오는 중 오류 발생:', error);
        });


    const InquirySubmit = async (event) => {
        event.preventDefault();
        const inquiry = { inquiryType, subject, message };

        try {
            const response = await axios.post('http://localhost:3001/inquries', inquiry);
            console.log(response.data);
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
