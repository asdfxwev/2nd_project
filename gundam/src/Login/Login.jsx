import { useState } from "react";

import jpIMG from "./jp.svg";

import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    return (
    <div className="container">
        <div className="container-login">
        <img className='imd' src='./image/KakaoTalk_20240615_155520356_04.jpg' alt="Gundam Logo" />
            
            <div className="wrap-login">
                <form className="login-form">
                    <span className="login-form-title"> Bem vindo </span>

                    <span className="login-form-title">
                        <img src={jpIMG} alt="Jovem Programador" />
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
                        <button className="login-form-btn">Login</button>
                    </div>

                    <div className="text-center">
                        <span className="txt1">Não possui conta? </span>
                        <a className="txt2" href="#">
                            Criar conta
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}
export default Login;