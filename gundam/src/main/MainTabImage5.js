export default function MainTabImage5 () {

    const tabImage5 = [
        { id: 'tabImage17', name: './image/tabImage17.jpg', price: '43,200', won: '원', realName: 'S.H.피규아트 초사이언 갓 손오공 -올바른 마음이 이끌어내는 사이어인의 신-', explanation: '드래곤볼 슈퍼' },
        { id: 'tabImage18', name: './image/tabImage18.jpg', price: '108,000', won: '원', realName: 'S.H.피규아트 진골조제법 쿄류 진골조제법 쿄류 레드', explanation: '수전전대 쿄류저' },
        { id: 'tabImage19', name: './image/tabImage19.jpg', price: '84,000', won: '원', realName: 'S.H.피규아트 가면라이더 지오 헤이세이 제너레이션즈 에디션', explanation: '가면라이더 지오' },
        { id: 'tabImage20', name: './image/tabImage20.jpg', price: '36,000', won: '원', realName: '건담 유니버스 ASW-G-08 건담 발바토스', explanation: '기동전사 건담 철혈의 오펀스' },
    ];

    return (
        <>
        {tabImage5.map((image, i) => <li className="tabImage"><div className="tabImageFlex"><img alt={i} src={image.name} className="tabImg" /><p className='reservationBuy'><span className="revBuy">예약구매</span></p><p className="productExplanation">{image.explanation}</p><p className="productName">{image.realName}</p><p className="productPrice"><span>{image.price}</span><span>{image.won}</span></p></div></li>)}
        </>
    )
}