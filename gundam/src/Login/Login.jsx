import axios from 'axios'; // axios import 추가
import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import dbData from '../data/db.json';
import "./Findingid";
import IdFindingModal from './Idfindingid';
import SecurityModal from './Security';
const importedUsers = dbData.users; // 중복 제거 후 사용

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    console.log(`** users.length=${importedUsers.length}`);
    
    const navigate = useNavigate();
    let result = null;
    const handleSubmit = async (values) => {
        // 로그인 로직 처리
        try {
            // 예시: 로그인 API 호출
            const response = await axios.post('http://localhost:3001/Login', values);
            console.log(response.data);
            // 로그인 성공 후 이전 페이지로 리디렉션
            navigate(-1);
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const onLogin = (event) => {
        event.preventDefault(); // 페이지 새로고침 방지
        result = importedUsers.find((user) => {
            return user.email === email && user.password === password;
        });
        if (result != null) {  // 로컬스토리지에 저장
            const loginInfo = {
                name: result.name,
                email: result.email,
                phoneNumber: result.phoneNumber,
                address: result.address,
                id: result.id,
            }
            localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
            navigate(-1); // 변경: navigate('/') -> navigate(-1)
        } else {
            alert('로그인 실패')
        }
    }

    return (
        <div className="container_entire">
            <div className="container-login">
                <img className='leftimg' src='./image/gamn.png' alt="Gundam Logo" />
                <img className='rightimg' src='./image/gamm.png' alt="Gundam Logo" />

                <div className="wrap-login">
                    <form className="login-form">
                        <a href="/"><img className='img' src='./image/logo.png' alt="Gundam Logo" /></a>

                        <span className="login-form-title">
                        </span>

                        <div className="wrap-input">
                            <input
                                className={email !== "" ? "has-val input" : "input"}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Email"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={password !== "" ? "has-val input" : "input"}
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Password"></span>
                        </div>

                        <div className="container-login-form-btn">
                            <button onClick={onLogin} className="login-form-btn">Login</button>
                        </div>

                        <div className="text-center">
                            <span className="txt1">계정이 없으신가요? </span>
                            <a className="txt2" href="/Login/Join">
                                계정만들기
                            </a>
                        </div>
                        <div>
                           <IdFindingModal  href="./Login/Findingid" />
                            &nbsp;
                           <SecurityModal  href="./Login/Security" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Login;