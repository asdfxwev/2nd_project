// import './Header.css'


export default function HeaderMenu1(props) {

    return (
        <div className="detailMenu">
            <div className="reservation"><a href="/">예약</a></div>
            <div className="popular"><a href="/">인기</a></div>
            <div className="every"><a href="/">전체상품</a></div>
            <div className="brand"><a href="/">브랜드별</a></div>
            <div className="art"><a href="/">작품별</a></div>
            {props.brand1.map((item, i) => <div key={i} className={item.id}><a href="/">{item.name}</a></div>)}
            {props.art1.map((item, i) => <div key={i} className={item.id}><a href="/">{item.name}</a></div>)}
            <div className="img1"><a href="/"></a></div>
            <div className="img11"><a href="/">HG 블랙 나이트 스쿼드 루드라 (그리핀 알바레스트 전용기)</a></div>
            <div className="img2"><a href="/"></a></div>
            <div className="img22"><a href="/">건프라가이드 바로가기</a></div>
        </div>
    )
}

