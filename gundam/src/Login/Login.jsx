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
    console.log(`** users.length=${importedUsers.length}`)

    const navigate = useNavigate();
    let result = null;

    const onLogin = (event) => {
        event.preventDefault(); // 페이지 새로고침 방지
        result = importedUsers.find((user) => {
            return user.email === email && user.password === password;
        });
        if (result != null) {
            const loginInfo = {
                name: result.name,
                email: result.email,
                inquiry: [
                ]
            }
            localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
            navigate('/');
        } else {
            alert('로그인실패')
        }
    }
    //onLogin


    return (
        <div className="container">
            <div className="container-login">
                <img className='imd' src='./image/gamn.png' alt="Gundam Logo" />
                <img className='imc' src='./image/gamm.png' alt="Gundam Logo" />


                <div className="wrap-login">
                    <form className="login-form">
                        <a href="/"><img className='img' src='./image/logo.png' alt="Gundam Logo" /></a>


                        {/* <span className="login-form-title"> 출격 준비</span> */}

                        <span className="login-form-title">
                            {/* <img src={jpIMG} alt="Jovem Programador" /> */}
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
                            <IdFindingModal href="./Login/Findingid" />
                            &nbsp;
                            <SecurityModal href="./Login/Security" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Login;