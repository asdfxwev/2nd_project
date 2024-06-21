// import './Header.css'
import './HeaderMenu.css'
import HeaderMenuSmallTop from "./HeaderMenuSmallTop"


export default function HeaderMenu2(props) {
    const menuSmallTop = HeaderMenuSmallTop();

    return (
        <div className={`detailMenu ${menuSmallTop ? 'smallMenu' : ''}`}>
            <div className="reservation"><a href="/">예약</a></div>
            <div className="popular"><a href="/">인기</a></div>
            <div className="every"><a href="/">전체상품</a></div>
            <div className="brand"><a href="/">브랜드별</a></div>
            <div className="art"><a href="/">작품별</a></div>
            {props.brand2.map((item, i) => <div key={i} className={item.id}><a href="/">{item.name}</a></div>)}
            {props.art2.map((item, i) => <div key={i} className={item.id}><a href="/">{item.name}</a></div>)}
            <div className="img3"><a href="/"></a></div>
            <div className="img33"><a href="/">포켓프라 컬랙션 QUICK!!18 나오하</a></div>
            <div className="img4"><a href="/"></a></div>
            <div className="img44"><a href="/">그랜드쉽 콜렉션 고잉 메리</a></div>
        </div>
    )
}

