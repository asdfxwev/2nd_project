// // // // import React, { useEffect, useState } from 'react';
// // // // import './InquiryList.css'
// // // // import { v4 as uuidv4 } from 'uuid';
// // // // import axios from 'axios';


// // // // export default function InquiryList() {
// // // //     const [inquiries, setInquiries] = useState([]);
// // // //     const [visibleInquiry, setVisibleInquiry] = useState(null);
// // // //     const existingInquiries = JSON.parse(localStorage.getItem('loginInfo'));
// // // //     const userId = existingInquiries.id;


// // // //     useEffect(() => {
// // // //         const fetchData = async () => {
// // // //             try {
// // // //                 const response = await axios.get('http://localhost:3001/users');
// // // //                 // console.log(response);
// // // //                 // console.log(response.data);
// // // //                 if (response.data) return null;
// // // //                 const userisss = response.data.map(user => user.id)
// // // //                 // console.log(userisss);
// // // //                 const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
// // // //                 console.log(userResponse);
// // // //                 const userData = userResponse.data;
// // // //                 // console.log(userData);
// // // //                 setInquiries(userData.inquries)
// // // //             } catch (error) {
// // // //                 console.error('데이터를 가져오는 중 오류 발생:', error);
// // // //             }
// // // //         };
// // // //         fetchData();
// // // //     }, [userId]);
// // // //     console.log(inquiries);
// // // //     // console.log(inquiry);

// // // //     function onInquriyTitle(inquiryId) {
// // // //         setVisibleInquiry(inquiryId === visibleInquiry ? null : inquiryId)
// // // //     }

// // // //     const inquiryDelete = async (inquiryId) => {
// // // //         try {
// // // //             // Fetch the current user data
// // // //             const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
// // // //             const userData = userResponse.data;

// // // //             // Filter out the inquiry to be deleted
// // // //             const updatedInquiries = userData.inquries.filter(inquiry => inquiry.id !== inquiryId);
// // // //             console.log(updatedInquiries);
// // // //             // Update the user data on the server
// // // //             await axios.put(`http://localhost:3001/users/${userId}`, { ...userData, inquries: updatedInquiries });

// // // //             // Update the local state
// // // //             setInquiries(updatedInquiries);
// // // //         } catch (error) {
// // // //             console.error('Error deleting inquiry:', error.response ? error.response.data : error.message);
// // // //         }
// // // //     };

// // // //     return (
// // // //         <>
// // // //             {inquiries.map((inquiry) => (
// // // //                 <>
// // // //                     <div className="CscInquiryList">
// // // //                         <div style={{ width: '100px' }}>{inquiry.inquiryType}</div>
// // // //                         <div onClick={() => onInquriyTitle(inquiry.id)} style={{ width: '500px' }}>{inquiry.subject}</div>
// // // //                         <div onClick={inquiryDelete} className="inquiryDelete" style={{width:'100px'}}>삭제</div>
// // // //                     </div>
// // // //                     {visibleInquiry === inquiry.ud &&
// // // //                         <div className="inquiryData inquiryBlock">{inquiry.message}</div>
// // // //                     }
// // // //                 </>
// // // //             ))}
// // // //         </>
// // // //     );
// // // // }



// // import React, { useEffect, useState } from 'react';
// // import './InquiryList.css';
// // import axios from 'axios';

// // export default function InquiryList() {
// //     const [inquiries, setInquiries] = useState([]);
// //     const [visibleInquiry, setVisibleInquiry] = useState(null);
// //     const existingInquiries = JSON.parse(localStorage.getItem('loginInfo'));
// //     const userId = existingInquiries.id;

// //     useEffect(() => {
// //         const fetchData = async () => {
// //             try {
// //                 const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
// //                 const userData = userResponse.data;
// //                 setInquiries(userData.inquries);
// //             } catch (error) {
// //                 console.error('데이터를 가져오는 중 오류 발생:', error);
// //             }
// //         };
// //         fetchData();
// //     }, [userId]);

// //     const onInquriyTitle = (inquiryId) => {
// //         setVisibleInquiry(inquiryId === visibleInquiry ? null : inquiryId);
// //     };

// //     const inquiryDelete = async (inquiryId) => {
// //         try {
// //             // Fetch the current user data
// //             const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
// //             const userData = userResponse.data;

// //             // console.log(userData);

// //             // Filter out the inquiry to be deleted
// //             const updatedInquiries = userData.inquries.filter(inquiry => inquiry.id !== inquiryId);
// //             console.log(updatedInquiries);
// //             // console.log(updatedInquiries.inquiryNum);

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
// //                 <React.Fragment key={inquiry.id}>
// //                     <div className="CscInquiryList">
// //                         <div style={{ width: '100px' }}>{inquiry.inquiryType}</div>
// //                         <div onClick={() => onInquriyTitle(inquiry.id)} style={{ width: '500px' }}>{inquiry.subject}</div>
// //                         <div onClick={() => inquiryDelete(inquiry.id)} className="inquiryDelete" style={{ width: '100px' }}>삭제</div>
// //                     </div>
// //                     <div className={`inquiryDataContainer ${visibleInquiry === inquiry.id ? 'active' : ''}`}>
// //                         <div style={{ width: '100px', justifyContent: 'center', display: 'flex' }}>내용:</div>
// //                         <div className="inquiryData">{inquiry.message}</div>
// //                         <div style={{width:'100px'}}></div>
// //                     </div>
// //                 </React.Fragment>
// //             ))}
// //         </>
// //     );
// // }


// import React, { useEffect, useState } from 'react';
// import './InquiryList.css';
// import axios from 'axios';

// export default function InquiryList() {
//     const [inquiries, setInquiries] = useState([]);
//     const [visibleInquiry, setVisibleInquiry] = useState(null);
//     const existingInquiries = JSON.parse(localStorage.getItem('loginInfo'));
//     const userId = existingInquiries.id;

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
//                 const userData = userResponse.data;
//                 if (userData && userData.inquries) {
//                     setInquiries(userData.inquries);
//                 } else {
//                     setInquiries([]); // 안전하게 빈 배열로 초기화
//                 }
//             } catch (error) {
//                 console.error('데이터를 가져오는 중 오류 발생:', error);
//                 setInquiries([]); // 오류 발생 시 빈 배열로 초기화
//             }
//         };
//         fetchData();
//     }, [userId]);

//     const onInquriyTitle = (inquiryId) => {
//         setVisibleInquiry(inquiryId === visibleInquiry ? null : inquiryId);
//     };

//     const inquiryDelete = async (inquiryId) => {
//         try {
//             // Fetch the current user data
//             const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
//             const userData = userResponse.data;

//             // Filter out the inquiry to be deleted
//             const updatedInquiries = userData.inquries.filter(inquiry => inquiry.id !== inquiryId);

//             // Update the user data on the server
//             await axios.put(`http://localhost:3001/users/${userId}`, { ...userData, inquries: updatedInquiries });

//             // Update the local state
//             setInquiries(updatedInquiries);
//         } catch (error) {
//             console.error('Error deleting inquiry:', error.response ? error.response.data : error.message);
//         }
//     };

//     return (
//         <>
//             {inquiries.map((inquiry) => (
//                 <React.Fragment key={inquiry.id}>
//                     <div className="CscInquiryList">
//                         <div style={{ width: '100px' }}>{inquiry.inquiryType}</div>
//                         <div onClick={() => onInquriyTitle(inquiry.id)} style={{ width: '500px' }}>{inquiry.subject}</div>
//                         <div onClick={() => inquiryDelete(inquiry.id)} className="inquiryDelete" style={{ width: '100px' }}>삭제</div>
//                     </div>
//                     <div className={`inquiryDataContainer ${visibleInquiry === inquiry.id ? 'active' : ''}`}>
//                         <div style={{ width: '100px', justifyContent: 'center', display: 'flex' }}>내용:</div>
//                         <div className="inquiryData">{inquiry.message}</div>
//                         <div style={{width:'100px'}}></div>
//                     </div>
//                 </React.Fragment>
//             ))}
//         </>
//     );
// }


import React, { useEffect, useState } from 'react';
import './InquiryList.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

// InquiryList 컴포넌트를 정의합니다.
export default function InquiryList({inquiries, existingInquiries}) {
    const [inquries, setInquiries] = useState([inquiries]); // 문의 데이터 상태
    const [visibleInquiry, setVisibleInquiry] = useState(null); // 현재 표시 중인 문의
    // const existingInquiries = JSON.parse(localStorage.getItem('loginInfo')); // 로컬 스토리지에서 로그인 정보를 가져옴
    // const userId = existingInquiries.id; // 사용자 ID

    console.log(inquiries);

    // 데이터를 가져오는 useEffect 훅
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
    //             const userData = userResponse.data;
    //             if (userData && userData.inquries) {
    //                 setInquiries(userData.inquries);
    //             } else {
    //                 setInquiries([]); // 안전하게 빈 배열로 초기화
    //             }
    //         } catch (error) {
    //             console.error('데이터를 가져오는 중 오류 발생:', error);
    //             setInquiries([]); // 오류 발생 시 빈 배열로 초기화
    //         }
    //     };
    //     fetchData();
    // }, [userId]);


    // 문의 제목을 클릭하면 해당 문의 내용을 토글합니다.
    const onInquriyTitle = (inquiryId) => {
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