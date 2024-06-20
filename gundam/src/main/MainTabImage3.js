export default function MainTabImage3 () {

    const tabImage3 = [
        { id: 'tabImage9', name: './image/tabImage9.jpg', price: '89,900', won: '원', realName: 'DX 티라노 킹', explanation: '파워레인저 다이노포스' },
        { id: 'tabImage10', name: './image/tabImage10.jpg', price: '54,000', won: '원', realName: 'DX 애니멀킹', explanation: '파워레인저 애니멀포스' },
        { id: 'tabImage11', name: './image/tabImage11.jpg', price: '63,000', won: '원', realName: 'DX 와일드킹', explanation: '파워레인저 애니멀포스' },
        { id: 'tabImage12', name: './image/tabImage12.jpg', price: '13,900', won: '원', realName: '짱구는 못말려 붕붕카 짱구', explanation: '짱구는 못말려' },
    ];

    return (
        <>
        {tabImage3.map((image, i) => <li className="tabImage"><div className="tabImageFlex"><img alt={i} src={image.name} className="tabImg" /><p className='reservationBuy'><span className="revBuy">예약구매</span></p><p className="productExplanation">{image.explanation}</p><p className="productName">{image.realName}</p><p className="productPrice"><span>{image.price}</span><span>{image.won}</span></p></div></li>)}
        </>
    )
}