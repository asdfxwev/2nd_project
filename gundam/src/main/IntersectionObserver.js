import './IntersectionObserver.css'

export default function IntersectionObserver() {
    const intersectionImage = [
        { id:'vertical1', name: './image/vertical1.png' },
        { id:'vertical2', name: './image/vertical2.png' },
        { id:'vertical3', name: './image/vertical3.png' },
        { id:'vertical4', name: './image/vertical4.png' },
    ];
    return (
        <div style={{ height: '100vh', backgroundColor: 'red' }}>
            <span>intersectionobserver</span>
            <div className="tabImageContainer">
                {intersectionImage.map((image) => <div><a href="/"><img className="verticalImage" src={image.name} alt={image.id} /></a></div>)}
            </div>
        </div>
    )
}