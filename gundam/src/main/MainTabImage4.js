export default function MainTabImage4 () {

    const tabImage4 = [
        { id: 'tabImage13', name: './image/tabImage13.jpg', price: '72,000', won: '원', realName: 'HGUC 크시 건담', explanation: '기동전사 건담 섬광의 하사웨이' },
        { id: 'tabImage14', name: './image/tabImage14.jpg', price: '38,400', won: '원', realName: 'RG 윙 건담', explanation: '신기동전기 건담W' },
        { id: 'tabImage15', name: './image/tabImage15.jpg', price: '54,000', won: '원', realName: 'RG 사자비', explanation: '기동전사 건담 역습의 샤아' },
        { id: 'tabImage16', name: './image/tabImage16.jpg', price: '60,000', won: '원', realName: 'MG 건담 어스트레이 레드 프라임 카이', explanation: '기동전사 건담 SEED' },
    ];

    return (
        <>
        {tabImage4.map((image, i) => <li className="tabImage"><div className="tabImageFlex"><img alt={i} src={image.name} className="tabImg" /><p className='reservationBuy'><span className="revBuy">예약구매</span></p><p className="productExplanation">{image.explanation}</p><p className="productName">{image.realName}</p><p className="productPrice"><span>{image.price}</span><span>{image.won}</span></p></div></li>)}
        </>
    )
}