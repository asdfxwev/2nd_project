import React, { useEffect, useState } from 'react';
import './InquiryList.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

// InquiryList 컴포넌트를 정의합니다.
export default function InquiryList({ inquiries, existingInquiries, totalNumberOfPages }) {
    const [inquiriesState, setInquiriesState] = useState([]); // 문의 데이터 상태
    const [visibleInquiry, setVisibleInquiry] = useState(null); // 현재 표시 중인 문의

    // inquiries prop이 변경될 때마다 상태를 업데이트합니다.
    useEffect(() => {
        setInquiriesState(inquiries);
    }, [inquiries]);

    // 문의 제목을 클릭하면 해당 문의 내용을 토글합니다.
    const onInquiryTitle = (inquiryId) => {
        setVisibleInquiry(inquiryId === visibleInquiry ? null : inquiryId);
    };

    // 문의를 삭제하는 함수
    const inquiryDelete = async (inquiryId) => {
        try {
            const userResponse = await axios.get(`http://localhost:3001/users/${existingInquiries.id}`);
            const userData = userResponse.data;

            // 선택된 문의를 제외한 나머지 문의를 필터링합니다.
            const updatedInquiries = userData.inquries.filter(inquiry => inquiry.id !== inquiryId);

            // 서버에 업데이트된 데이터를 전송합니다.
            await axios.put(`http://localhost:3001/users/${existingInquiries.id}`, { ...userData, inquries: updatedInquiries });

            // 로컬 상태를 업데이트합니다.
            setInquiriesState(updatedInquiries);
            console.log(updatedInquiries);
        } catch (error) {
            console.error('Error deleting inquiry:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <>
            {inquiriesState.map((inquiry) => (
                <React.Fragment key={inquiry.id}>
                    <div className="CscInquiryList">
                        <div style={{ width: '100px' }}>{inquiry.inquiryType}</div>
                        <div onClick={() => onInquiryTitle(inquiry.id)} style={{ width: '500px', cursor: 'pointer' }}>{inquiry.subject}</div>
                        <div onClick={() => inquiryDelete(inquiry.id)} className="inquiryDelete" style={{ width: '100px' }}>삭제</div>
                    </div>
                    <div className={`inquiryDataContainer ${visibleInquiry === inquiry.id ? 'active' : ''}`}>
                        <div style={{ width: '100px', justifyContent: 'center', display: 'flex' }}>내용:</div>
                        <div className="inquiryData">{inquiry.message}</div>
                        <div style={{ width: '100px' }}></div>
                    </div>
                </React.Fragment>
            ))}
        </>
    );
}
