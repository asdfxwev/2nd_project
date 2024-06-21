export default function MainTabImage1() {

    const tabImage1 = [
        { id: 'tabImage1', name: './image/tabImage1.jpg', price: '70,200', won: '원', realName: '슈퍼 미니프라 특급무장 라이너보이', explanation: '구급전대 고고파이브' },
        { id: 'tabImage2', name: './image/tabImage2.jpg', price: '66,000', won: '원', realName: 'MG 건담 TR-1 어드밴스드 헤이즐 [프리미엄 반다이]', explanation: 'Advanced of Z 티탄즈의 깃발아래에서' },
        { id: 'tabImage3', name: './image/tabImage3.jpg', price: '12,000', won: '원', realName: 'HGUC 베이스자바 유니콘 지온 컬리 VER.[프리미엄 반다이]', explanation: '기동전사 건담 UC' },
        { id: 'tabImage4', name: './image/tabImage4.jpg', price: '48,000', won: '원', realName: 'MG 건담 F91 VER.2.0(잔상 이미지컬러)[프리미엄 반다이]', explanation: '기동전사 건담 F91' },
    ];

    return (
        <>
            {tabImage1.map((image, i) =>
                <li className="tabImage">
                    <div className="tabImageFlex">
                        <img alt={i} src={image.name} className="tabImg" />
                        <p className='reservationBuy'><span className="revBuy">예약구매</span></p>
                        <p className="productExplanation">{image.explanation}</p>
                        <p className="productName">{image.realName}</p>
                        <p className="productPrice"><span>{image.price}</span><span>{image.won}</span></p>
                    </div>
                </li>)}
        </>
    )
}