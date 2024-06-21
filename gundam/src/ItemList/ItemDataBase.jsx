// 상품 정보
const itemDetails = [
    { id: 1, name: '건담1호기', price: '99,000원', comment: '스게에', detail: '비싸요'},
    { id: 2, name: '건담2호기', price: '109,000원', comment: '', detail: '' },
    { id: 3, name: '건담3호기', price: '119,000원', comment: '', detail: '' },
    { id: 4, name: '건담4호기', price: '99,000원', comment: '', detail: '' },
    { id: 5, name: '건담5호기', price: '109,000원', comment: '', detail: '' },
    { id: 6, name: '건담6호기', price: '119,000원', comment: '', detail: '' },
    { id: 7, name: '건담7호기', price: '99,000원', comment: '', detail: '' },
    { id: 8, name: '건담8호기', price: '109,000원', comment: '', detail: '' },
    { id: 9, name: '건담9호기', price: '119,000원', comment: '', detail: '' },
    { id: 10, name: '건담10호기', price: '99,000원', comment: '', detail: '' },
    { id: 11, name: '건담11호기', price: '109,000원', comment: '', detail: '' },
    { id: 12, name: '건담12호기', price: '119,000원', comment: '', detail: '' },
    { id: 13, name: '건담13호기', price: '99,000원', comment: '', detail: '' },
    { id: 14, name: '건담14호기', price: '109,000원', comment: '', detail: '' },
    { id: 15, name: '건담15호기', price: '119,000원', comment: '', detail: '' },
    { id: 16, name: '건담16호기', price: '99,000원', comment: '', detail: '' },
    { id: 17, name: '건담17호기', price: '109,000원', comment: '', detail: '' },
    { id: 18, name: '건담18호기', price: '119,000원', comment: '', detail: '' },
    { id: 19, name: '건담19호기', price: '99,000원', comment: '', detail: '' },
    { id: 20, name: '건담20호기', price: '109,000원', comment: '', detail: '' },
    // 추가 아이템 정보를 여기에 늘리면 됨.
];

const ItemDataBase = itemDetails.map((item, index) => ({
    ...item,
    image: `${process.env.PUBLIC_URL}/image/gundam${String(index + 1).padStart(2, '0')}.jpg`
}));

export default ItemDataBase;
