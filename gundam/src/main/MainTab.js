import './MainTab.css'

export default function MainTab() {

    const tabImage1 = [
        { id: 'tabImage1', name: './image/tabImage1.jpg', price:'70,200', won:'원' , realName:'슈퍼 미니프라 특급무장 라이너보이', explanation:'구급전대 고고파이브' },
        { id: 'tabImage2', name: './image/tabImage2.jpg', price:'66,000', won:'원' , realName:'MG 건담 TR-1 어드밴스드 헤이즐 [프리미엄 반다이]', explanation:'Advanced of Z 티탄즈의 깃발아래에서' },
        { id: 'tabImage3', name: './image/tabImage3.jpg', price:'12,000', won:'원' , realName:'HGUC 베이스자바 유니콘 지온 컬리 VER.[프리미엄 반다이]', explanation:'기동전사 건담 UC' },
        { id: 'tabImage4', name: './image/tabImage4.jpg', price:'48,000', won:'원' , realName:'MG 건담 F91 VER.2.0(잔상 이미지컬러)[프리미엄 반다이]', explanation:'기동전사 건담 F91' },
    ];

    const tabImage2 = [
        { id: 'tabImage5', name: './image/tabImage5.jpg', price:'514,800', won:'원' , realName:'DX초합금혼 메카고질라 1974', explanation:'고질라 X 메카고질라' },
        { id: 'tabImage6', name: './image/tabImage6.jpg', price:'43,200', won:'원' , realName:'S.H.피규아트 오공 블랙 -초사이언 로제-', explanation:'드래곤볼 슈퍼' },
        { id: 'tabImage7', name: './image/tabImage7.jpg', price:'23,000', won:'원' , realName:'나루토 질풍전 PANEL SPECTACLE 우즈마키 나루토(시간을 초월한 출진', explanation:'나루토' },
        { id: 'tabImage8', name: './image/tabImage8.jpg', price:'21,000', won:'원' , realName:'SDCS 마이티 스트라이크 프리덤 건담', explanation:'기동전사 건담 SEED FREEDOM' },
    ];

    const tabImage3 = [
        { id: 'tabImage9', name: './image/tabImage9.jpg', price:'89,900', won:'원' , realName:'DX 티라노 킹', explanation:'파워레인저 다이노포스' },
        { id: 'tabImage10', name: './image/tabImage10.jpg', price:'54,000', won:'원' , realName:'DX 애니멀킹', explanation:'파워레인저 애니멀포스' },
        { id: 'tabImage11', name: './image/tabImage11.jpg', price:'63,000', won:'원' , realName:'DX 와일드킹', explanation:'파워레인저 애니멀포스' },
        { id: 'tabImage12', name: './image/tabImage12.jpg', price:'13,900', won:'원' , realName:'짱구는 못말려 붕붕카 짱구', explanation:'짱구는 못말려' },
    ];

    const tabImage4 = [
        { id: 'tabImage13', name: './image/tabImage13.jpg', price:'72,000', won:'원' , realName:'HGUC 크시 건담', explanation:'기동전사 건담 섬광의 하사웨이' },
        { id: 'tabImage14', name: './image/tabImage14.jpg', price:'38,400', won:'원' , realName:'RG 윙 건담', explanation:'신기동전기 건담W' },
        { id: 'tabImage15', name: './image/tabImage15.jpg', price:'54,000', won:'원' , realName:'RG 사자비', explanation:'기동전사 건담 역습의 샤아' },
        { id: 'tabImage16', name: './image/tabImage16.jpg', price:'60,000', won:'원' , realName:'MG 건담 어스트레이 레드 프라임 카이', explanation:'기동전사 건담 SEED' },
    ];

    const tabImage5 = [
        { id: 'tabImage17', name: './image/tabImage17.jpg', price:'43,200', won:'원' , realName:'S.H.피규아트 초사이언 갓 손오공 -올바른 마음이 이끌어내는 사이어인의 신-', explanation:'드래곤볼 슈퍼' },
        { id: 'tabImage18', name: './image/tabImage18.jpg', price:'108,000', won:'원' , realName:'S.H.피규아트 진골조제법 쿄류 진골조제법 쿄류 레드', explanation:'수전전대 쿄류저' },
        { id: 'tabImage19', name: './image/tabImage19.jpg', price:'84,000', won:'원' , realName:'S.H.피규아트 가면라이더 지오 헤이세이 제너레이션즈 에디션', explanation:'가면라이더 지오' },
        { id: 'tabImage20', name: './image/tabImage20.jpg', price:'36,000', won:'원' , realName:'건담 유니버스 ASW-G-08 건담 발바토스', explanation:'기동전사 건담 철혈의 오펀스' },
    ];



    return (
        <section style={{ height: '100vh' }}>
            <div className="tabButtonContainer">
                <ul className="tabButton">
                    <li>#마감임박! 종료예정 예약상품⏰</li>
                    <li>#시선집중! NEW 예약상품🎈</li>
                    <li>#잘나가는 인기완구🎁</li>
                    <li>#누구나 갖고싶은 프라모델🎇</li>
                    <li>#취향저격 피규어🔫</li>
                </ul>
            </div>
            <div className="tabImageContainer">
                <ul className='tabImageList'>
                    {tabImage1.map((image, i) => <li className="tabImage"><div className="tabImageFlex"><img alt={i} src={image.name} className={image.id} /><p>예약구매</p><p>{image.explanation}</p><p>{image.realName}</p><p><span>{image.price}</span><span>{image.won}</span></p></div></li>)}
                    {tabImage2.map((image, i) => <li className="tabImage nonVisible"><div className="tabImageFlex"><img alt={i} src={image.name} className={image.id} /><p></p></div></li>)}
                    {tabImage3.map((image, i) => <li className="tabImage nonVisible"><div className="tabImageFlex"><img alt={i} src={image.name} className={image.id} /><p></p></div></li>)}
                    {tabImage4.map((image, i) => <li className="tabImage nonVisible"><div className="tabImageFlex"><img alt={i} src={image.name} className={image.id} /><p></p></div></li>)}
                    {tabImage5.map((image, i) => <li className="tabImage nonVisible"><div className="tabImageFlex"><img alt={i} src={image.name} className={image.id} /><p></p></div></li>)}
                </ul>
            </div>
        </section>
    )
}