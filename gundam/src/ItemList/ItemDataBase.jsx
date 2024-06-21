// 상품 정보
const itemDetails = [
    { id: 1, name: '건담1호기', price: '99,000원', comment: '건담정보1', detail: '비싸요', src:['/image/gundam01.jpg'] },
    { id: 2, name: '건담2호기', price: '109,000원', comment: '건담정보2', detail: '', src:['/image/gundam08.jpg', '/image/gundam09.jpg','/image/gundam10.jpg','/image/gundam13.jpg'] },
    { id: 3, name: '건담3호기', price: '119,000원', comment: '건담정보3', detail: '', src:[] },
    { id: 4, name: '건담4호기', price: '99,000원', comment: '건담정보4', detail: '', src:[] },
    { id: 5, name: '건담5호기', price: '109,000원', comment: '건담정보5', detail: '', src:[] },
    { id: 6, name: '건담6호기', price: '119,000원', comment: '건담정보6', detail: '', src:[] },
    { id: 7, name: '건담7호기', price: '99,000원', comment: '건담정보7', detail: '', src:[] },
    { id: 8, name: '건담8호기', price: '109,000원', comment: '건담정보8', detail: '', src:[] },
    { id: 9, name: '건담9호기', price: '119,000원', comment: '건담정보9', detail: '', src:[] },
    { id: 10, name: '건담10호기', price: '99,000원', comment: '건담정보10', detail: '', src:[] },
    { id: 11, name: '건담11호기', price: '109,000원', comment: '건담정보11', detail: '', src:[] },
    { id: 12, name: '건담12호기', price: '119,000원', comment: '건담정보12', detail: '', src:[] },
    { id: 13, name: '건담13호기', price: '99,000원', comment: '건담정보13', detail: '', src:[] },
    { id: 14, name: '건담14호기', price: '109,000원', comment: '건담정보14', detail: '', src:[] },
    { id: 15, name: '건담15호기', price: '119,000원', comment: '건담정보15', detail: '', src:[] },
    { id: 16, name: '건담16호기', price: '99,000원', comment: '건담정보16', detail: '', src:[] },
    { id: 17, name: '건담17호기', price: '109,000원', comment: '건담정보17', detail: '', src:[] },
    { id: 18, name: '건담18호기', price: '119,000원', comment: '건담정보18', detail: '', src:[] },
    { id: 19, name: '건담19호기', price: '99,000원', comment: '건담정보19', detail: '', src:[] },
    { id: 20, name: '건담20호기', price: '109,000원', comment: '건담정보20', detail: '', src:[] },
    // 추가 아이템 정보를 여기에 늘리면 됨.
];

const ItemDataBase = itemDetails.map((item, index) => ({
    ...item,
    image: `${process.env.PUBLIC_URL}/image/gundam${String(index + 1).padStart(2, '0')}.jpg`
}));

export default ItemDataBase;
