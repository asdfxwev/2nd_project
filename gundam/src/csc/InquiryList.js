// // import React, { useEffect, useState } from 'react';
// // import './InquiryList.css'
// // import { v4 as uuidv4 } from 'uuid';
// // import axios from 'axios';


// // export default function InquiryList() {
// //     const [inquiries, setInquiries] = useState([]);
// //     const [visibleInquiry, setVisibleInquiry] = useState(null);
// //     const existingInquiries = JSON.parse(localStorage.getItem('loginInfo'));
// //     const userId = existingInquiries.id;


// //     useEffect(() => {
// //         const fetchData = async () => {
// //             try {
// //                 const response = await axios.get('http://localhost:3001/users');
// //                 // console.log(response);
// //                 // console.log(response.data);
// //                 if (response.data) return null;
// //                 const userisss = response.data.map(user => user.id)
// //                 // console.log(userisss);
// //                 const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
// //                 console.log(userResponse);
// //                 const userData = userResponse.data;
// //                 // console.log(userData);
// //                 setInquiries(userData.inquries)
// //             } catch (error) {
// //                 console.error('데이터를 가져오는 중 오류 발생:', error);
// //             }
// //         };
// //         fetchData();
// //     }, [userId]);
// //     console.log(inquiries);
// //     // console.log(inquiry);

// //     function onInquriyTitle(inquiryId) {
// //         setVisibleInquiry(inquiryId === visibleInquiry ? null : inquiryId)
// //     }

// //     const inquiryDelete = async (inquiryId) => {
// //         try {
// //             // Fetch the current user data
// //             const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
// //             const userData = userResponse.data;

// //             // Filter out the inquiry to be deleted
// //             const updatedInquiries = userData.inquries.filter(inquiry => inquiry.id !== inquiryId);
// //             console.log(updatedInquiries);
// //             // Update the user data on the server
// //             await axios.put(`http://localhost:3001/users/${userId}`, { ...userData, inquries: updatedInquiries });

// //             // Update the local state
// //             setInquiries(updatedInquiries);
// //         } catch (error) {
// //             console.error('Error deleting inquiry:', error.response ? error.response.data : error.message);
// //         }
// //     };

// //     return (
// //         <>
// //             {inquiries.map((inquiry) => (
// //                 <>
// //                     <div className="CscInquiryList">
// //                         <div style={{ width: '100px' }}>{inquiry.inquiryType}</div>
// //                         <div onClick={() => onInquriyTitle(inquiry.id)} style={{ width: '500px' }}>{inquiry.subject}</div>
// //                         <div onClick={inquiryDelete} className="inquiryDelete" style={{width:'100px'}}>삭제</div>
// //                     </div>
// //                     {visibleInquiry === inquiry.ud &&
// //                         <div className="inquiryData inquiryBlock">{inquiry.message}</div>
// //                     }
// //                 </>
// //             ))}
// //         </>
// //     );
// // }



import React, { useEffect, useState } from 'react';
import './InquiryList.css';
import axios from 'axios';

export default function InquiryList() {
    const [inquiries, setInquiries] = useState([]);
    const [visibleInquiry, setVisibleInquiry] = useState(null);
    const existingInquiries = JSON.parse(localStorage.getItem('loginInfo'));
    const userId = existingInquiries.id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
                const userData = userResponse.data;
                setInquiries(userData.inquries);
            } catch (error) {
                console.error('데이터를 가져오는 중 오류 발생:', error);
            }
        };
        fetchData();
    }, [userId]);

    const onInquriyTitle = (inquiryId) => {
        setVisibleInquiry(inquiryId === visibleInquiry ? null : inquiryId);
    };

    const inquiryDelete = async (inquiryId) => {
        try {
            // Fetch the current user data
            const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
            const userData = userResponse.data;

            // console.log(userData);

            // Filter out the inquiry to be deleted
            const updatedInquiries = userData.inquries.filter(inquiry => inquiry.id !== inquiryId);
            console.log(updatedInquiries);
            // console.log(updatedInquiries.inquiryNum);

            // Update the user data on the server
            await axios.put(`http://localhost:3001/users/${userId}`, { ...userData, inquries: updatedInquiries });

            // Update the local state
            setInquiries(updatedInquiries);
        } catch (error) {
            console.error('Error deleting inquiry:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <>
            {inquiries.map((inquiry) => (
                <React.Fragment key={inquiry.id}>
                    <div className="CscInquiryList">
                        <div style={{ width: '100px' }}>{inquiry.inquiryType}</div>
                        <div onClick={() => onInquriyTitle(inquiry.id)} style={{ width: '500px' }}>{inquiry.subject}</div>
                        <div onClick={() => inquiryDelete(inquiry.id)} className="inquiryDelete" style={{ width: '100px' }}>삭제</div>
                    </div>
                    <div className={`inquiryDataContainer ${visibleInquiry === inquiry.id ? 'active' : ''}`}>
                        <div style={{ width: '100px', justifyContent: 'center', display: 'flex' }}>내용:</div>
                        <div className="inquiryData">{inquiry.message}</div>
                        <div style={{width:'100px'}}></div>
                    </div>
                </React.Fragment>
            ))}
        </>
    );
}
