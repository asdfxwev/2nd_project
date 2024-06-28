import React, { useEffect, useState } from 'react';

export default function () {
    const [inquiries, setInquiries] = useState([]);

    useEffect(() => {
        const savedInquiries = localStorage.getItem('inquiries');
        if (savedInquiries) {
            setInquiries(JSON.parse(savedInquiries));
        }
    }, []);

    return (
        <div style={{display:'flex'}} className="inquiry-list-container">
            {/* <h2>Inquiries</h2> */}
            {inquiries.map((inquiry, index) => (
                <>
                    <div style={{ width: '100px' }}>{inquiry.inquiryType}</div>
                    <div style={{ width: '200px' }}>{inquiry.subject}</div>
                    <div style={{ width: '400px' }}>{inquiry.message}</div>
                </>
            ))}
        </div>
    );
}


