// 상품 정보
const itemDetails = [
    { id: 1, name: 'RG 윙 건담', price: 38400, comment: '건담무사', detail: '비싸요', brand: '건담', work: '건담 시리즈', src:['/image/gundam01.jpg'] },
    { id: 2, name: 'MG 윙 건담 제로(EW) Ver.Ka', price: 66000, comment: '건담 브레이커 배틀로그', detail: '헤헷', brand: '건담', work: '건담 시리즈', src:['/image/gundam08.jpg', '/image/gundam09.jpg','/image/gundam10.jpg','/image/gundam13.jpg'] },
    { id: 3, name: 'SD 건담월드 히어로즈 오공 임펄스 건담', price: 7200, comment: '기동전사 건담 수성의 마녀', detail: '헤헷', brand: '건담', work: '건담 시리즈', src:['/image/gundam02.jpg', '/image/gundam08.jpg', '/image/gundam09.jpg'] },
    { id: 4, name: 'HGUC 크시 건담', price: 72000, comment: '기동전사 건담 복수의 레퀴엠', detail: '헤헷', brand: '건담', work: '건담 시리즈', src:['/image/gundam03.jpg', '/image/gundam05.jpg'] },
    { id: 5, name: 'MG 건담 어스트레이 데르 프레임 카이', price: 60000, comment: '신기동전사 건담W', detail: '헤헷', brand: '건담', work: '건담 시리즈', src:['/image/gundam16.jpg', '/image/gundam04.jpg'] },
    { id: 6, name: 'MG 건담 발바토스', price: 54000, comment: '건담무사', detail: '헤헷', brand: '건담', work: '건담 시리즈', src:['/image/gundam05.jpg', '/image/gundam11.jpg'] },
    { id: 7, name: 'ENTRY GRADE 건담', price: 8400, comment: '건담 브레이커 배틀로그', detail: '헤헷', brand: '건담', work: '건담 시리즈', src:['/image/gundam07.jpg', '/image/gundam1.jpg',  '/image/gundam2.jpg'] },
    { id: 8, name: 'SD 건담월드 히어로즈 조조 윙 건담 의성의 장', price: 9600, comment: '기동전사 건담 수성의 마녀', detail: '헤헷', brand: '건담', work: '건담 시리즈', src:['/image/gundam08.jpg', '/image/gundam9.jpg',  '/image/gundam10.jpg'] },
    { id: 9, name: 'RG 뉴 건담', price: 50400, comment: '기동전사 건담 복수의 레퀴엠', detail: '헤헷', brand: '건담', work: '건담 시리즈', src:['/image/gundam09.jpg', '/image/gundam10.jpg',  '/image/gundam11.jpg'] },
    { id: 10, name: 'SD 건담월드 히어로즈 워 호스', price: 6000, comment: '신기동전사 건담W', detail: '헤헷', brand: '건담', work: '건담 시리즈', src:['/image/gundam10.jpg', '/image/gundam11.jpg',  '/image/gundam12.jpg'] },
    { id: 11, name: 'MG 유니콘 건담 스크린 이미지 Ver.', price: 60000, comment: '건담무사', detail: '헤헷', brand: '건담', work: '건담 시리즈', src:['/image/gundam11.jpg', '/image/gundam12.jpg',  '/image/gundam13.jpg'] },
    { id: 12, name: 'MG 프리덤 건담 Ver.2.0', price: 54000, comment: '건담 브레이커 배틀로그', detail: '헤헷', brand: '건담', work: '건담 시리즈', src:['/image/gundam12.jpg', '/image/gundam13.jpg',  '/image/gundam14.jpg'] },
    { id: 13, name: 'SD 건담월드 히어로즈 노부나가 건담 에피온', price: 8400, comment: '기동전사 건담 수성의 마녀', detail: '헤헷', brand: '건담', work: '건담 시리즈', src:['/image/gundam013.jpg', '/image/gundam14.jpg',  '/image/gundam15.jpg'] },
    { id: 14, name: 'MG 뉴 건담 Ver.Ka', price: 84000, comment: '기동전사 건담 복수의 레퀴엠', detail: '헤헷', brand: '건담', work: '건담 시리즈', src:['/image/gundam14.jpg', '/image/gundam15.jpg',  '/image/gundam16.jpg'] },
    { id: 15, name: 'MG 건담 엑시아', price: 45600, comment: '신기동전사 건담W', detail: '헤헷', brand: '건담', work: '건담 시리즈', src:['/image/gundam15.jpg', '/image/gundam16.jpg',  '/image/gundam17.jpg'] },
    { id: 16, name: 'MG 건담 Ver.3.0', price: 54000, comment: '건담무사', detail: '헤헷', brand: '건담', work: '건담 시리즈', src:['/image/gundam16.jpg', '/image/gundam17.jpg',  '/image/gundam18.jpg'] },
    { id: 17, name: 'RG 더블오라이저', price: 36000, comment: '건담 브레이커 배틀로그', detail: '헤헷', brand: '건담', work: '건담 시리즈', src:['/image/gundam17.jpg', '/image/gundam18.jpg',  '/image/gundam19.jpg'] },
    { id: 18, name: 'RG 포스 임펄스 건담', price: 36000, comment: '기동전사 건담 수성의 마녀', detail: '헤헷', brand: '건담', work: '건담 시리즈', src:['/image/gundam18.jpg', '/image/gundam19.jpg',  '/image/gundam20.jpg'] },
    { id: 19, name: 'MG 시난주 애니메이션 컬러 Ver.', price: 90000, comment: '기동전사 건담 복수의 레퀴엠', detail: '헤헷', brand: '건담', work: '건담 시리즈', src:['/image/gundam19.jpg', '/image/gundam20.jpg',  '/image/gundam1.jpg'] },
    { id: 20, name: 'HGAC 건담 데스사이즈', price: 18000, comment: '신기동전사 건담W', detail: '헤헷', brand: '건담', work: '건담 시리즈', src:['/image/gundam20.jpg', '/image/gundam1.jpg',  '/image/gundam2.jpg'] },
    // 추가 아이템 정보를 여기에 늘리면 됨.
];

// 이미지와 함께 brand와 work 속성 추가
const ItemDataBase = itemDetails.map((item, index) => ({
    ...item,
    image: `${process.env.PUBLIC_URL}/image/gundam${String(index + 1).padStart(2, '0')}.jpg`
}));

export default ItemDataBase;
