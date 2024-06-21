// import './Header.css'
import './HeaderMenu.css'
import HeaderMenuSmallTop from "./HeaderMenuSmallTop"


export default function HeaderMenu3(props) {
    const menuSmallTop = HeaderMenuSmallTop();

    return (
        <div className={`detailMenu ${menuSmallTop ? 'smallMenu' : ''}`}>
            <div className="reservation"><a href="/">예약</a></div>
            <div className="popular"><a href="/">인기</a></div>
            <div className="every"><a href="/">전체상품</a></div>
            <div className="brand"><a href="/">브랜드별</a></div>
            <div className="art"><a href="/">작품별</a></div>
            {props.brand3.map((item, i) => <div key={i} className={item.id}><a href="/">{item.name}</a></div>)}
            {props.brand13.map((item, i) => <div key={i} className={item.id}><a href="/">{item.name}</a></div>)}
            {props.art3.map((item, i) => <div key={i} className={item.id}><a href="/">{item.name}</a></div>)}
            {props.art13.map((item, i) => <div key={i} className={item.id}><a href="/">{item.name}</a></div>)}
            <div className="brands"><a href="/"></a>브랜드별</div>
            <div className="arts"><a href="/"></a>작품별</div>
            <div className="img5"><a href="/"></a></div>
            <div className="img55"><a href="/">피규아트 미니 귀멸의칼날 카마도 네즈코</a></div>
            <div className="img6"><a href="/"></a></div>
            <div className="img66"><a href="/">피규아트 제로 솜사탕을 좋아하는 쵸파</a></div>
        </div>
    )
}

