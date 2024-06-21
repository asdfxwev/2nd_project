// import HeaderMenuSmallTop from "./HeaderMenuSmallTop"
// import './HeaderMenu.css'


// export default function HeaderMenu4(props) {
//     const menuSmallTop = HeaderMenuSmallTop();

//     return (
//         <div className={`detailMenu ${menuSmallTop ? 'smallMenu' : ''}`}>
//             <div className="reservation"><a href="/">예약</a></div>
//             <div className="popular"><a href="/">인기</a></div>
//             <div className="every"><a href="/">전체상품</a></div>
//             <div className="brand"><a href="/">공구/데칼/베이스</a></div>
//             <div className="art"><a href="/">캔디/캡슐토이</a></div>
//             {props.brand4.map((item, i) => <div key={i} className={item.id}><a href="/">{item.name}</a></div>)}
//             {props.art4.map((item, i) => <div key={i} className={item.id}><a href="/">{item.name}</a></div>)}
//             {props.brand14.map((item, i) => <div key={i} className={item.id}><a href="/">{item.name}</a></div>)}
//             <div className="brands"><a href="/">그 외</a></div>
//             <div className="img7"><a href="/"></a></div>
//             <div className="img77"><a href="/">원피스 카드게임 - 밀짚모자 일당</a></div>
//             <div className="img8"><a href="/"></a></div>
//             <div className="img88"><a href="/">G-MAKER상품</a></div>
//         </div>
//     )
// }
import React from 'react';
import HeaderMenuSmallTop from "./HeaderMenuSmallTop"


const HeaderMenu = ({ data }) => {
    const menuSmallTop = HeaderMenuSmallTop();

    return (
        <>
            {data.map((section, index) => (
                <div className={`detailMenu ${menuSmallTop ? 'smallMenu' : ''}`}>
                    <div className="reservation" > <a href="/">예약</a></ div>
                    <div className="popular"><a href="/">인기</a></div>
                    <div className="every"><a href="/">전체상품</a></div>
                    <div className="brand"><a href="/">브랜드별</a></div>
                    <div className="art"><a href="/">작품별</a></div>
                    {section.items.map((item, idx) => (
                        <div key={idx} className={`brand${idx+1}`}><a href="/">{item.name}</a></div>
                        // <div key={idx} className={`brand${idx+1}`}><a href="/">{item.name}</a></div>
                    ))}
                    <div className={index}><a href="/"></a></div>
                    <div className={index+1}><a href="/">HG 블랙 나이트 스쿼드 루드라 (그리핀 알바레스트 전용기)</a></div>
                    <div className={index}><a href="/"></a></div>
                    <div className={index+1}><a href="/">건프라가이드 바로가기</a></div>
                </div>
            ))}
        </>
    );
};

export default HeaderMenu;
