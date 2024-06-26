// 상품 정보
const itemDetails = [
    { id: 1, name: 'RG 윙 건담', price: 38400, comment: '건담 무사', detail: '건담 최초로 오리지널 스토리 극장판으로써 제작된 작품. 아무로와 샤아 두 캐릭터에 초점을 두어 기동전사 건담에서 이어지는 스토리의 완결을 그린 작품이다.', brand: '1/100', src:['/image/gundam01.jpg'] },
    { id: 2, name: 'MG 윙 건담 제로(EW) Ver.Ka', price: 66000, comment: '건담 브레이커 배틀로그', detail: '영웅들로 인하여 균형이 유지되고 있는 세계. 그중 하나인 네오 월드에 갑자기 적열 운석이 날아온다. 낙하지점에 나타난 건 자칭 "오공 임펄스 건담"이라는 기억을 상실한 소년.', brand: 'FG', src:['/image/gundam08.jpg', '/image/gundam09.jpg','/image/gundam10.jpg','/image/gundam13.jpg'] },
    { id: 3, name: 'SD 건담월드 히어로즈 오공 임펄스 건담', price: 7200, comment: '기동전사 건담 수성의 마녀', detail: '건담 시리즈의 기념비적인 첫 번째 작품. 스페이스 콜로니와 같이 최첨단 과학기술을 배경으로, 치밀하면서도 리얼한 세계관을 구축하여 인기를 얻었다', brand: 'FIGURE-RISE MECHANICS', src:['/image/gundam02.jpg', '/image/gundam08.jpg', '/image/gundam09.jpg'] },
    { id: 4, name: 'HGUC 크시 건담', price: 72000, comment: '기동전사 건담 복수의 레퀴엠', detail: '21세기의 첫 TV 시리즈 작품. 자프트와 지구 연합군의 전쟁에, 친구들을 구하기 위해 지구군으로서 참전한 코디네이터 키라의 고뇌와 성장을 그렸다.', brand: 'FIGURE-RISE STANDARD', src:['/image/gundam03.jpg', '/image/gundam05.jpg'] },
    { id: 5, name: 'MG 건담 어스트레이 데르 프레임 카이', price: 60000, comment: '신기동전사 건담W', detail: '비우주세기의 건담 시리즈 2탄으로 등장한 TV 작품. 건담 5기가 돌연 거대 세력을 급습하는 다이나믹한 장면으로부터 숨막히는 전개가 이어지는 작품이다.', brand: 'FIGURE-RISE', src:['/image/gundam16.jpg', '/image/gundam04.jpg'] },
    { id: 6, name: 'MG 건담 발바토스', price: 54000, comment: '건담 무사', detail: '건담 최초로 오리지널 스토리 극장판으로써 제작된 작품. 아무로와 샤아 두 캐릭터에 초점을 두어 기동전사 건담에서 이어지는 스토리의 완결을 그린 작품이다.', brand: '1/100', src:['/image/gundam05.jpg', '/image/gundam11.jpg'] },
    { id: 7, name: 'ENTRY GRADE 건담', price: 8400, comment: '건담 브레이커 배틀로그', detail: '영웅들로 인하여 균형이 유지되고 있는 세계. 그중 하나인 네오 월드에 갑자기 적열 운석이 날아온다. 낙하지점에 나타난 건 자칭 "오공 임펄스 건담"이라는 기억을 상실한 소년.', brand: 'FG', src:['/image/gundam07.jpg', '/image/gundam1.jpg',  '/image/gundam2.jpg'] },
    { id: 8, name: 'SD 건담월드 히어로즈 조조 윙 건담 의성의 장', price: 9600, comment: '기동전사 건담 수성의 마녀', detail: '건담 시리즈의 기념비적인 첫 번째 작품. 스페이스 콜로니와 같이 최첨단 과학기술을 배경으로, 치밀하면서도 리얼한 세계관을 구축하여 인기를 얻었다', brand: 'FIGURE-RISE MECHANICS', src:['/image/gundam08.jpg', '/image/gundam9.jpg',  '/image/gundam10.jpg'] },
    { id: 9, name: 'RG 뉴 건담', price: 50400, comment: '기동전사 건담 복수의 레퀴엠', detail: '21세기의 첫 TV 시리즈 작품. 자프트와 지구 연합군의 전쟁에, 친구들을 구하기 위해 지구군으로서 참전한 코디네이터 키라의 고뇌와 성장을 그렸다.', brand: 'FIGURE-RISE STANDARD', src:['/image/gundam09.jpg', '/image/gundam10.jpg',  '/image/gundam11.jpg'] },
    { id: 10, name: 'SD 건담월드 히어로즈 워 호스', price: 6000, comment: '신기동전사 건담W', detail: '비우주세기의 건담 시리즈 2탄으로 등장한 TV 작품. 건담 5기가 돌연 거대 세력을 급습하는 다이나믹한 장면으로부터 숨막히는 전개가 이어지는 작품이다.', brand: 'FIGURE-RISE', src:['/image/gundam10.jpg', '/image/gundam11.jpg',  '/image/gundam12.jpg'] },
    { id: 11, name: 'MG 유니콘 건담 스크린 이미지 Ver.', price: 60000, comment: '건담 무사', detail: '건담 최초로 오리지널 스토리 극장판으로써 제작된 작품. 아무로와 샤아 두 캐릭터에 초점을 두어 기동전사 건담에서 이어지는 스토리의 완결을 그린 작품이다.', brand: '1/100', src:['/image/gundam11.jpg', '/image/gundam12.jpg',  '/image/gundam13.jpg'] },
    { id: 12, name: 'MG 프리덤 건담 Ver.2.0', price: 54000, comment: '건담 브레이커 배틀로그', detail: '영웅들로 인하여 균형이 유지되고 있는 세계. 그중 하나인 네오 월드에 갑자기 적열 운석이 날아온다. 낙하지점에 나타난 건 자칭 "오공 임펄스 건담"이라는 기억을 상실한 소년.', brand: 'FG', src:['/image/gundam12.jpg', '/image/gundam13.jpg',  '/image/gundam14.jpg'] },
    { id: 13, name: 'SD 건담월드 히어로즈 노부나가 건담 에피온', price: 8400, comment: '기동전사 건담 수성의 마녀', detail: '건담 시리즈의 기념비적인 첫 번째 작품. 스페이스 콜로니와 같이 최첨단 과학기술을 배경으로, 치밀하면서도 리얼한 세계관을 구축하여 인기를 얻었다', brand: 'FIGURE-RISE MECHANICS', src:['/image/gundam013.jpg', '/image/gundam14.jpg',  '/image/gundam15.jpg'] },
    { id: 14, name: 'MG 뉴 건담 Ver.Ka', price: 84000, comment: '기동전사 건담 복수의 레퀴엠', detail: '21세기의 첫 TV 시리즈 작품. 자프트와 지구 연합군의 전쟁에, 친구들을 구하기 위해 지구군으로서 참전한 코디네이터 키라의 고뇌와 성장을 그렸다.', brand: 'FIGURE-RISE STANDARD', src:['/image/gundam14.jpg', '/image/gundam15.jpg',  '/image/gundam16.jpg'] },
    { id: 15, name: 'MG 건담 엑시아', price: 45600, comment: '신기동전사 건담W', detail: '비우주세기의 건담 시리즈 2탄으로 등장한 TV 작품. 건담 5기가 돌연 거대 세력을 급습하는 다이나믹한 장면으로부터 숨막히는 전개가 이어지는 작품이다.', brand: 'FIGURE-RISE', src:['/image/gundam15.jpg', '/image/gundam16.jpg',  '/image/gundam17.jpg'] },
    { id: 16, name: 'MG 건담 Ver.3.0', price: 54000, comment: '건담 무사', detail: '건담 최초로 오리지널 스토리 극장판으로써 제작된 작품. 아무로와 샤아 두 캐릭터에 초점을 두어 기동전사 건담에서 이어지는 스토리의 완결을 그린 작품이다.', brand: '1/100', src:['/image/gundam16.jpg', '/image/gundam17.jpg',  '/image/gundam18.jpg'] },
    { id: 17, name: 'RG 더블오라이저', price: 36000, comment: '건담 브레이커 배틀로그', detail: '영웅들로 인하여 균형이 유지되고 있는 세계. 그중 하나인 네오 월드에 갑자기 적열 운석이 날아온다. 낙하지점에 나타난 건 자칭 "오공 임펄스 건담"이라는 기억을 상실한 소년.', brand: 'FG', src:['/image/gundam17.jpg', '/image/gundam18.jpg',  '/image/gundam19.jpg'] },
    { id: 18, name: 'RG 포스 임펄스 건담', price: 36000, comment: '기동전사 건담 수성의 마녀', detail: '건담 시리즈의 기념비적인 첫 번째 작품. 스페이스 콜로니와 같이 최첨단 과학기술을 배경으로, 치밀하면서도 리얼한 세계관을 구축하여 인기를 얻었다', brand: 'FIGURE-RISE MECHANICS', src:['/image/gundam18.jpg', '/image/gundam19.jpg',  '/image/gundam20.jpg'] },
    { id: 19, name: 'MG 시난주 애니메이션 컬러 Ver.', price: 90000, comment: '기동전사 건담 복수의 레퀴엠', detail: '21세기의 첫 TV 시리즈 작품. 자프트와 지구 연합군의 전쟁에, 친구들을 구하기 위해 지구군으로서 참전한 코디네이터 키라의 고뇌와 성장을 그렸다.', brand: 'FIGURE-RISE STANDARD', src:['/image/gundam19.jpg', '/image/gundam20.jpg',  '/image/gundam1.jpg'] },
    { id: 20, name: 'HGAC 건담 데스사이즈', price: 18000, comment: '신기동전사 건담W', detail: '비우주세기의 건담 시리즈 2탄으로 등장한 TV 작품. 건담 5기가 돌연 거대 세력을 급습하는 다이나믹한 장면으로부터 숨막히는 전개가 이어지는 작품이다.', brand: 'FIGURE-RISE', src:['/image/gundam20.jpg', '/image/gundam1.jpg',  '/image/gundam2.jpg'] },
    // 추가 아이템 정보를 여기에 늘리면 됨.
];

// 이미지와 함께 brand와 work 속성 추가
const ItemDataBase = itemDetails.map((item, index) => ({
    ...item,
    image: `${process.env.PUBLIC_URL}/image/gundam${String(index + 1).padStart(2, '0')}.jpg`
}));

export default ItemDataBase;
