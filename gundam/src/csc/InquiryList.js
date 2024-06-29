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
import axios from 'axios';


export default function InquiryList() {
    const [inquiries, setInquiries] = useState([]);
    const existingInquiries = JSON.parse(localStorage.getItem('loginInfo'));
    const userId = existingInquiries.id;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/users');
                console.log(response);
                console.log(response.data);
                const userisss = response.data.map(user => user.id)
                console.log(userisss);
                const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
                const userData = userResponse.data;
                console.log(userData);
                setInquiries(userData.inquries)
            } catch (error) {
                console.error('데이터를 가져오는 중 오류 발생:', error);
            }
        };

        fetchData();
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
