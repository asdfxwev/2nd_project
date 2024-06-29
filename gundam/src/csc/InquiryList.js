// import React, { useEffect, useState } from 'react';

// export default function () {
//     const [inquries, setInquiries] = useState([]);

//     useEffect(() => {
//         const savedInquiries = localStorage.getItem('loginInfo');
//         if (savedInquiries) {
//             const parsedData = JSON.parse(savedInquiries);
//             if (parsedData.inquries) {
//                 setInquiries(parsedData.inquries)
//             }
//         }
//     }, []);

//     return (
//         <div style={{display:'flex'}} className="inquiry-list-container">
//             {/* <h2>Inquiries</h2> */}
//             {inquries.map((inquiry, index) => (
//                 <>
//                     <div style={{ width: '100px' }}>{inquiry.inquiryType}</div>
//                     <div style={{ width: '200px' }}>{inquiry.subject}</div>
//                     <div style={{ width: '400px' }}>{inquiry.message}</div>
//                 </>
//             ))}
//         </div>
//     );
// }


import React, { useEffect, useState } from 'react';
import './InquiryList.css'

export default function InquiryList() {
    const [inquiries, setInquiries] = useState([]);

    useEffect(() => {
        const savedInquiries = localStorage.getItem('loginInfo');
        if (savedInquiries) {
            const parsedData = JSON.parse(savedInquiries);
            if (Array.isArray(parsedData.inquiries)) {
                setInquiries(parsedData.inquiries);
            }
        }
    }, []);

    return (
        <>
            {inquiries.map((inquiry, index) => (
                <div className="CscInquiryList">
                    <div style={{ width: '100px' }}>{inquiry.inquiryType}</div>
                    <div style={{ width: '200px' }}>{inquiry.subject}</div>
                    <div style={{ width: '800px' }}>{inquiry.message}</div>
                </div>
            ))}
        </>
    );
}
