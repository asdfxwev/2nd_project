import './App.css';
import Header from './header/Header'
import Main from './main/Main';
import Footer from './Footer/Footer';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // 로그인 상태 저장 변수
  const [loginInfo, setLoginInfo] = useState(""); // 회원 로그인 정보

  // *** useNavigate 활용 Page 이동
  // => useNavigate() 로 navigate 함수 취득후 적용
  const navigate = useNavigate();
  const onRequestPage = (url) => { navigate(url); } 
  
  // 1. 로그인 확인
  // => 브라우져의 sessionStorage에서 로그인정보 확인
  if ( !isLoggedIn ) {
    const loginCheck =JSON.parse(localStorage.getItem("loginInfo"));
    
  if (loginCheck !== null) {   
      alert(`** sessionStorage 로그인 확인 username=${loginCheck.username}`);
      setIsLoggedIn(true);
      setLoginInfo(loginCheck);
    } 
  } 

  // 2. 로그인 함수
  const onLoginSubmit = (userId, userName) => {
    const loginData = { id:userId, userName:userName };
    if ( userId !=null && userId.length > 0 ) {
      localStorage.setItem("loginInfo", JSON.stringify(loginData));  
      alert('** 로그인 성공 **');
      setIsLoggedIn(true);
      setLoginInfo(loginData);
      navigate("/");
    } else {
      alert('~~ userId, userName 을 정확하게 입력 하세요 ~~');
      setIsLoggedIn(false);
      setLoginInfo('');
      navigate("/login");
    }
  } //onLoginSubmit

  // 3. 로그아웃
  const onLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setLoginInfo('');
    navigate("/");
  }; //onLogout

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
