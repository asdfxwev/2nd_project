export default function MainTabImage2 () {

    const tabImage2 = [
        { id: 'tabImage5', name: './image/tabImage5.jpg', price: '514,800', won: '원', realName: 'DX초합금혼 메카고질라 1974', explanation: '고질라 X 메카고질라' },
        { id: 'tabImage6', name: './image/tabImage6.jpg', price: '43,200', won: '원', realName: 'S.H.피규아트 오공 블랙 -초사이언 로제-', explanation: '드래곤볼 슈퍼' },
        { id: 'tabImage7', name: './image/tabImage7.jpg', price: '23,000', won: '원', realName: '나루토 질풍전 PANEL SPECTACLE 우즈마키 나루토(시간을 초월한 출진', explanation: '나루토' },
        { id: 'tabImage8', name: './image/tabImage8.jpg', price: '21,000', won: '원', realName: 'SDCS 마이티 스트라이크 프리덤 건담', explanation: '기동전사 건담 SEED FREEDOM' },
    ];

    return (
        <>
        {tabImage2.map((image, i) => <li className="tabImage"><div className="tabImageFlex"><img alt={i} src={image.name} className="tabImg" /><p className='reservationBuy'><span className="revBuy">예약구매</span></p><p className="productExplanation">{image.explanation}</p><p className="productName">{image.realName}</p><p className="productPrice"><span>{image.price}</span><span>{image.won}</span></p></div></li>)}
        </>
    )
}