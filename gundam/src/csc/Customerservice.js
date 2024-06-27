import './Customerservice.css';


export default function Customerservice() {
    return (
        <section className="cscContainer">
            <div className="cscSection">
                <h2>고객센터</h2>
                <ul>
                    <li>자주묻는질문</li>
                    <li>고객센터</li>
                    <li>1:1 문의</li>
                    <li>건프라 가이드</li>
                    <li>완구 설명서</li>
                    <li>A/S안내</li>
                </ul>
            </div>
            <div className="cscMain">
                <h2 className="cscTitle"></h2>
                <div>
                    <form>
                        <input type="text" />
                        <button>검색</button>
                    </form>
                    <ul className="CscBtnMenu">
                        <li>쿠폰안내</li>
                        <li>포인트안내</li>
                        <li>배송안내</li>
                        <li>반품/교환안내</li>
                    </ul>
                    <ul className="CscMenu">
                        <li>FAQ TOP 10</li>
                        <li>결제/환불</li>
                        <li>교환/반품</li>
                        <li>쿠폰/포인트</li>
                        <li>배송</li>
                        <li>A/S</li>
                        <li>상품관련</li>
                        <li>회원/개인정보</li>
                        <li>직영점 및 기타</li>
                        <li>사이트 이용안내</li>
                    </ul>
                    <div className="CscListTitle">
                        <div style={{width:'100px'}}>분류</div>
                        <div style={{width:'100px'}}>제목</div>
                    </div>
                </div>
            </div>
        </section>
    )
}