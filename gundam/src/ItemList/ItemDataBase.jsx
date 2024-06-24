// 상품 정보
const itemDetails = [
    { id: 1, name: '건담1호기', price: '99000', comment: '스게에', detail: '비싸요', brand: '건담', work: '건담 시리즈' },
    { id: 2, name: '건담2호기', price: '109000', comment: '스고이', detail: '헤헷', brand: '건담', work: '건담 시리즈' },
    { id: 3, name: '건담3호기', price: '119000', comment: '스고이', detail: '헤헷', brand: '건담', work: '건담 시리즈' },
    { id: 4, name: '건담4호기', price: '99000', comment: '스고이', detail: '헤헷', brand: '건담', work: '건담 시리즈' },
    { id: 5, name: '건담5호기', price: '109000', comment: '스고이', detail: '헤헷', brand: '건담', work: '건담 시리즈' },
    { id: 6, name: '건담6호기', price: '119000', comment: '스고이', detail: '헤헷', brand: '건담', work: '건담 시리즈' },
    { id: 7, name: '건담7호기', price: '99000', comment: '스고이', detail: '헤헷', brand: '건담', work: '건담 시리즈' },
    { id: 8, name: '건담8호기', price: '109000', comment: '스고이', detail: '헤헷', brand: '건담', work: '건담 시리즈' },
    { id: 9, name: '건담9호기', price: '119000', comment: '스고이', detail: '헤헷', brand: '건담', work: '건담 시리즈' },
    { id: 10, name: '건담10호기', price: '99000', comment: '스고이', detail: '헤헷', brand: '건담', work: '건담 시리즈' },
    { id: 11, name: '건담11호기', price: '109000', comment: '스고이', detail: '헤헷', brand: '건담', work: '건담 시리즈' },
    { id: 12, name: '건담12호기', price: '119000', comment: '스고이', detail: '헤헷', brand: '건담', work: '건담 시리즈' },
    { id: 13, name: '건담13호기', price: '99000', comment: '스고이', detail: '헤헷', brand: '건담', work: '건담 시리즈' },
    { id: 14, name: '건담14호기', price: '109000', comment: '스고이', detail: '헤헷', brand: '건담', work: '건담 시리즈' },
    { id: 15, name: '건담15호기', price: '119000', comment: '스고이', detail: '헤헷', brand: '건담', work: '건담 시리즈' },
    { id: 16, name: '건담16호기', price: '99000', comment: '스고이', detail: '헤헷', brand: '건담', work: '건담 시리즈' },
    { id: 17, name: '건담17호기', price: '109000', comment: '스고이', detail: '헤헷', brand: '건담', work: '건담 시리즈' },
    { id: 18, name: '건담18호기', price: '119000', comment: '스고이', detail: '헤헷', brand: '건담', work: '건담 시리즈' },
    { id: 19, name: '건담19호기', price: '99000', comment: '스고이', detail: '헤헷', brand: '건담', work: '건담 시리즈' },
    { id: 20, name: '건담20호기', price: '109000', comment: '스고이', detail: '헤헷', brand: '건담', work: '건담 시리즈' },
    // 추가 아이템 정보를 여기에 늘리면 됨.
];

// 이미지와 함께 brand와 work 속성 추가
const ItemDataBase = itemDetails.map((item, index) => ({
    ...item,
    image: `${process.env.PUBLIC_URL}/image/gundam${String(index + 1).padStart(2, '0')}.jpg`
}));

export default ItemDataBase;
