
import './Customerservice.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react'

export default function CscLeft() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    // if (JSON.parse(localStorage.getItem('loginInfo')) === null) {
    //     setIsLogin(false)
    // } else {
    //     setIsLogin(true)
    // }

    if (!isLoggedIn) {
        const loginCheck = JSON.parse(localStorage.getItem("loginInfo"));
        if (loginCheck !== null) {
            setIsLoggedIn(true);
            // setLoginInfo(loginCheck);
        }
    }

    return (
        <div className="cscSection">
            <h2>고객센터</h2>
            {isLoggedIn ? (
                <ul>
                    <li><Link to={`/Csc?page=1&category=ALL`}>자주묻는질문</Link></li>
                    <li><Link to={`/Notice?page=1`}>공지사항</Link></li>
                    <li><Link to={`/Csc/Inquiry`} >1:1 문의</Link></li>
                    <li>건프라 가이드</li>
                    <li>완구 설명서</li>
                    <li>A/S안내</li>
                </ul>
            ) : (
                <ul>
                    <li><Link to={`/Csc?page=1&category=ALL`}>자주묻는질문</Link></li >
                    <li><Link to={`/Notice?page=1`}>공지사항</Link></li>
                    <li><Link to={`/Login`} >1:1 문의</Link></li>
                    <li>건프라 가이드</li>
                    <li>완구 설명서</li>
                    <li>A/S안내</li>
                </ul >
            )
            }

        </div >
    )
}