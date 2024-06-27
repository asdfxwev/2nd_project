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
        <div className="inquiry-list-container">
            <h2>Inquiries</h2>
            <ul>
                {inquiries.map((inquiry, index) => (
                    <li key={index}>
                        <h3>{inquiry.subject}</h3>
                        <p>{inquiry.message}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}


