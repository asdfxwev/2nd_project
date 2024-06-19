import './MainTab.css'

export default function MainTab() {

    const tabImage1 = [
        { id: 'tabImage1', name: './image/tabImage1.jpg' },
        { id: 'tabImage2', name: './image/tabImage2.jpg' },
        { id: 'tabImage3', name: './image/tabImage3.jpg' },
        { id: 'tabImage4', name: './image/tabImage4.jpg' },
    ];

    const tabImage2 = [
        { id: 'tabImage5', name: './image/tabImage5.jpg' },
        { id: 'tabImage6', name: './image/tabImage6.jpg' },
        { id: 'tabImage7', name: './image/tabImage7.jpg' },
        { id: 'tabImage8', name: './image/tabImage8.jpg' },
    ];

    const tabImage3 = [
        { id: 'tabImage9', name: './image/tabImage9.jpg' },
        { id: 'tabImage10', name: './image/tabImage10.jpg' },
        { id: 'tabImage11', name: './image/tabImage11.jpg' },
        { id: 'tabImage12', name: './image/tabImage12.jpg' },
    ];

    const tabImage4 = [
        { id: 'tabImage13', name: './image/tabImage13.jpg' },
        { id: 'tabImage14', name: './image/tabImage14.jpg' },
        { id: 'tabImage15', name: './image/tabImage15.jpg' },
        { id: 'tabImage16', name: './image/tabImage16.jpg' },
    ];

    const tabImage5 = [
        { id: 'tabImage17', name: './image/tabImage17.jpg' },
        { id: 'tabImage18', name: './image/tabImage18.jpg' },
        { id: 'tabImage19', name: './image/tabImage19.jpg' },
        { id: 'tabImage20', name: './image/tabImage20.jpg' },
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
                    {tabImage1.map((image, i) => <li className="tabImage"><div className="tabImageFlex"><img alt={i} src={image.name} className={image.id} /><p>예약구매</p></div></li>)}
                    {tabImage2.map((image, i) => <li className="tabImage nonVisible"><div className="tabImageFlex"><img alt={i} src={image.name} className={image.id} /><p></p></div></li>)}
                    {tabImage3.map((image, i) => <li className="tabImage nonVisible"><div className="tabImageFlex"><img alt={i} src={image.name} className={image.id} /><p></p></div></li>)}
                    {tabImage4.map((image, i) => <li className="tabImage nonVisible"><div className="tabImageFlex"><img alt={i} src={image.name} className={image.id} /><p></p></div></li>)}
                    {tabImage5.map((image, i) => <li className="tabImage nonVisible"><div className="tabImageFlex"><img alt={i} src={image.name} className={image.id} /><p></p></div></li>)}
                </ul>
            </div>
        </section>
    )
}