const NoticeData = {
    // item: [
    //     { id:'noticeNumm1', notice: '공지사항', title: '개인정보처리방침변경안내(24.04.24 시행)', date: '2024.04.24', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
    //     { id:'noticeNumm2', notice: '공지사항', title: 'BNKR멤버십[오프라인 실물카드 등록]서비스 종료 안내(23.03.26 `)', date: '2024.03.13', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
    //     { id:'noticeNumm3', notice: '공지사항', title: '멤버십 이용약관 안내(23.02.17 시행)', date: '2023.02.10', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
    //     { id:'noticeNumm4', notice: '공지사항', title: '이용약관 변경 안내(23.02.17 시행)', date: '2023.02.10', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
    //     { id:'noticeNumm5', notice: '공지사항', title: '구매확정 이후 주문에 대한 교환/반품처리 제한 안내', date: '2022.08.26', data:'안녕하세요. 반다이남코코리아몰입니다. 더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
    // ],
    item1:[
        { id:'noticeNumm1', notice: '공지사항', title: '개인정보처리방침변경안내(24.04.24 시행)', date: '2024.04.24', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm2', notice: '공지사항', title: 'BNKR멤버십[오프라인 실물카드 등록]서비스 종료 안내(23.03.26 `)', date: '2024.03.13', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm3', notice: '공지사항', title: '멤버십 이용약관 안내(23.02.17 시행)', date: '2023.02.10', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm4', notice: '공지사항', title: '이용약관 변경 안내(23.02.17 시행)', date: '2023.02.10', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm5', notice: '공지사항', title: '구매확정 이후 주문에 대한 교환/반품처리 제한 안내', date: '2022.08.26', data:'안녕하세요. 반다이남코코리아몰입니다. 더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum1', notice: '배송', title: '캔디PB예약 출고연기 안내', date: '2024.06.25', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum2', notice: '배송', title: '하비PB예약 출고안내', date: '2024.06.24', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum3', notice: '배송', title: '반프레스토 에약 출고 안내', date: '2024.06.24', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum4', notice: '배송', title: '캡슐 예약 출고 안내', date: '2024.06.24',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum5', notice: '배송', title: '하비 예약 출고 안내', date: '2024.06.24',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum6', notice: '배송', title: '하비PB 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum7', notice: '배송', title: '캔디토이 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum8', notice: '배송', title: '반프레스토 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum9', notice: '배송', title: '완성품 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum10', notice: '배송', title: '하비 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm1', notice: '공지사항', title: '개인정보처리방침변경안내(24.04.24 시행)', date: '2024.04.24', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm2', notice: '공지사항', title: 'BNKR멤버십[오프라인 실물카드 등록]서비스 종료 안내(23.03.26 `)', date: '2024.03.13', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm3', notice: '공지사항', title: '멤버십 이용약관 안내(23.02.17 시행)', date: '2023.02.10', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm4', notice: '공지사항', title: '이용약관 변경 안내(23.02.17 시행)', date: '2023.02.10', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm5', notice: '공지사항', title: '구매확정 이후 주문에 대한 교환/반품처리 제한 안내', date: '2022.08.26', data:'안녕하세요. 반다이남코코리아몰입니다. 더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum1', notice: '배송', title: '반프레스토 예약 출고연기 안내', date: '2024.06.14',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum2', notice: '배송', title: '반프레스토 예약 출고연기 안내', date: '2024.06.14',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum3', notice: '배송', title: '하비PB 예약 출고 안내', date: '2024.06.10',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum4', notice: '배송', title: '캔디토이 예약 출고 안내', date: '2024.06.10',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum5', notice: '배송', title: '완구 프리미엄 예약 출고 안내', date: '2024.06.04',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum6', notice: '배송', title: '하비PB 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum7', notice: '배송', title: '완구 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum8', notice: '배송', title: '캡슐 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum9', notice: '배송', title: '완성품 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum10', notice: '배송', title: '하비 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm1', notice: '공지사항', title: '개인정보처리방침변경안내(24.04.24 시행)', date: '2024.04.24', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm2', notice: '공지사항', title: 'BNKR멤버십[오프라인 실물카드 등록]서비스 종료 안내(23.03.26 `)', date: '2024.03.13', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm3', notice: '공지사항', title: '멤버십 이용약관 안내(23.02.17 시행)', date: '2023.02.10', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm4', notice: '공지사항', title: '이용약관 변경 안내(23.02.17 시행)', date: '2023.02.10', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm5', notice: '공지사항', title: '구매확정 이후 주문에 대한 교환/반품처리 제한 안내', date: '2022.08.26', data:'안녕하세요. 반다이남코코리아몰입니다. 더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum1', notice: '배송', title: '캔디PB예약 출고연기 안내', date: '2024.06.25', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum2', notice: '배송', title: '하비PB예약 출고안내', date: '2024.06.24', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum3', notice: '배송', title: '반프레스토 에약 출고 안내', date: '2024.06.24', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum4', notice: '배송', title: '캡슐 예약 출고 안내', date: '2024.06.24',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum5', notice: '배송', title: '하비 예약 출고 안내', date: '2024.06.24',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum6', notice: '배송', title: '하비PB 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum7', notice: '배송', title: '캔디토이 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum8', notice: '배송', title: '반프레스토 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum9', notice: '배송', title: '완성품 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum10', notice: '배송', title: '하비 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm1', notice: '공지사항', title: '개인정보처리방침변경안내(24.04.24 시행)', date: '2024.04.24', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm2', notice: '공지사항', title: 'BNKR멤버십[오프라인 실물카드 등록]서비스 종료 안내(23.03.26 `)', date: '2024.03.13', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm3', notice: '공지사항', title: '멤버십 이용약관 안내(23.02.17 시행)', date: '2023.02.10', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm4', notice: '공지사항', title: '이용약관 변경 안내(23.02.17 시행)', date: '2023.02.10', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm5', notice: '공지사항', title: '구매확정 이후 주문에 대한 교환/반품처리 제한 안내', date: '2022.08.26', data:'안녕하세요. 반다이남코코리아몰입니다. 더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum1', notice: '배송', title: '반프레스토 예약 출고연기 안내', date: '2024.06.14',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum2', notice: '배송', title: '반프레스토 예약 출고연기 안내', date: '2024.06.14',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum3', notice: '배송', title: '하비PB 예약 출고 안내', date: '2024.06.10',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum4', notice: '배송', title: '캔디토이 예약 출고 안내', date: '2024.06.10',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum5', notice: '배송', title: '완구 프리미엄 예약 출고 안내', date: '2024.06.04',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum6', notice: '배송', title: '하비PB 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum7', notice: '배송', title: '완구 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum8', notice: '배송', title: '캡슐 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum9', notice: '배송', title: '완성품 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum10', notice: '배송', title: '하비 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm1', notice: '공지사항', title: '개인정보처리방침변경안내(24.04.24 시행)', date: '2024.04.24', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm2', notice: '공지사항', title: 'BNKR멤버십[오프라인 실물카드 등록]서비스 종료 안내(23.03.26 `)', date: '2024.03.13', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm3', notice: '공지사항', title: '멤버십 이용약관 안내(23.02.17 시행)', date: '2023.02.10', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm4', notice: '공지사항', title: '이용약관 변경 안내(23.02.17 시행)', date: '2023.02.10', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm5', notice: '공지사항', title: '구매확정 이후 주문에 대한 교환/반품처리 제한 안내', date: '2022.08.26', data:'안녕하세요. 반다이남코코리아몰입니다. 더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum1', notice: '배송', title: '캔디PB예약 출고연기 안내', date: '2024.06.25', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum2', notice: '배송', title: '하비PB예약 출고안내', date: '2024.06.24', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum3', notice: '배송', title: '반프레스토 에약 출고 안내', date: '2024.06.24', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum4', notice: '배송', title: '캡슐 예약 출고 안내', date: '2024.06.24',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum5', notice: '배송', title: '하비 예약 출고 안내', date: '2024.06.24',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum6', notice: '배송', title: '하비PB 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum7', notice: '배송', title: '캔디토이 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum8', notice: '배송', title: '반프레스토 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum9', notice: '배송', title: '완성품 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum10', notice: '배송', title: '하비 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm1', notice: '공지사항', title: '개인정보처리방침변경안내(24.04.24 시행)', date: '2024.04.24', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm2', notice: '공지사항', title: 'BNKR멤버십[오프라인 실물카드 등록]서비스 종료 안내(23.03.26 `)', date: '2024.03.13', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm3', notice: '공지사항', title: '멤버십 이용약관 안내(23.02.17 시행)', date: '2023.02.10', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm4', notice: '공지사항', title: '이용약관 변경 안내(23.02.17 시행)', date: '2023.02.10', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm5', notice: '공지사항', title: '구매확정 이후 주문에 대한 교환/반품처리 제한 안내', date: '2022.08.26', data:'안녕하세요. 반다이남코코리아몰입니다. 더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum1', notice: '배송', title: '반프레스토 예약 출고연기 안내', date: '2024.06.14',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum2', notice: '배송', title: '반프레스토 예약 출고연기 안내', date: '2024.06.14',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum3', notice: '배송', title: '하비PB 예약 출고 안내', date: '2024.06.10',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum4', notice: '배송', title: '캔디토이 예약 출고 안내', date: '2024.06.10',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum5', notice: '배송', title: '완구 프리미엄 예약 출고 안내', date: '2024.06.04',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum6', notice: '배송', title: '하비PB 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum7', notice: '배송', title: '완구 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum8', notice: '배송', title: '캡슐 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum9', notice: '배송', title: '완성품 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum10', notice: '배송', title: '하비 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm1', notice: '공지사항', title: '개인정보처리방침변경안내(24.04.24 시행)', date: '2024.04.24', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm2', notice: '공지사항', title: 'BNKR멤버십[오프라인 실물카드 등록]서비스 종료 안내(23.03.26 `)', date: '2024.03.13', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm3', notice: '공지사항', title: '멤버십 이용약관 안내(23.02.17 시행)', date: '2023.02.10', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm4', notice: '공지사항', title: '이용약관 변경 안내(23.02.17 시행)', date: '2023.02.10', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm5', notice: '공지사항', title: '구매확정 이후 주문에 대한 교환/반품처리 제한 안내', date: '2022.08.26', data:'안녕하세요. 반다이남코코리아몰입니다. 더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum1', notice: '배송', title: '캔디PB예약 출고연기 안내', date: '2024.06.25', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum2', notice: '배송', title: '하비PB예약 출고안내', date: '2024.06.24', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum3', notice: '배송', title: '반프레스토 에약 출고 안내', date: '2024.06.24', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum4', notice: '배송', title: '캡슐 예약 출고 안내', date: '2024.06.24',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum5', notice: '배송', title: '하비 예약 출고 안내', date: '2024.06.24',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum6', notice: '배송', title: '하비PB 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum7', notice: '배송', title: '캔디토이 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum8', notice: '배송', title: '반프레스토 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum9', notice: '배송', title: '완성품 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum10', notice: '배송', title: '하비 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm1', notice: '공지사항', title: '개인정보처리방침변경안내(24.04.24 시행)', date: '2024.04.24', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm2', notice: '공지사항', title: 'BNKR멤버십[오프라인 실물카드 등록]서비스 종료 안내(23.03.26 `)', date: '2024.03.13', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm3', notice: '공지사항', title: '멤버십 이용약관 안내(23.02.17 시행)', date: '2023.02.10', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm4', notice: '공지사항', title: '이용약관 변경 안내(23.02.17 시행)', date: '2023.02.10', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm5', notice: '공지사항', title: '구매확정 이후 주문에 대한 교환/반품처리 제한 안내', date: '2022.08.26', data:'안녕하세요. 반다이남코코리아몰입니다. 더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum1', notice: '배송', title: '반프레스토 예약 출고연기 안내', date: '2024.06.14',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum2', notice: '배송', title: '반프레스토 예약 출고연기 안내', date: '2024.06.14',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum3', notice: '배송', title: '하비PB 예약 출고 안내', date: '2024.06.10',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum4', notice: '배송', title: '캔디토이 예약 출고 안내', date: '2024.06.10',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum5', notice: '배송', title: '완구 프리미엄 예약 출고 안내', date: '2024.06.04',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum6', notice: '배송', title: '하비PB 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum7', notice: '배송', title: '완구 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum8', notice: '배송', title: '캡슐 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum9', notice: '배송', title: '완성품 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum10', notice: '배송', title: '하비 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm1', notice: '공지사항', title: '개인정보처리방침변경안내(24.04.24 시행)', date: '2024.04.24', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm2', notice: '공지사항', title: 'BNKR멤버십[오프라인 실물카드 등록]서비스 종료 안내(23.03.26 `)', date: '2024.03.13', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm3', notice: '공지사항', title: '멤버십 이용약관 안내(23.02.17 시행)', date: '2023.02.10', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm4', notice: '공지사항', title: '이용약관 변경 안내(23.02.17 시행)', date: '2023.02.10', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm5', notice: '공지사항', title: '구매확정 이후 주문에 대한 교환/반품처리 제한 안내', date: '2022.08.26', data:'안녕하세요. 반다이남코코리아몰입니다. 더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum1', notice: '배송', title: '캔디PB예약 출고연기 안내', date: '2024.06.25', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum2', notice: '배송', title: '하비PB예약 출고안내', date: '2024.06.24', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum3', notice: '배송', title: '반프레스토 에약 출고 안내', date: '2024.06.24', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum4', notice: '배송', title: '캡슐 예약 출고 안내', date: '2024.06.24',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum5', notice: '배송', title: '하비 예약 출고 안내', date: '2024.06.24',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum6', notice: '배송', title: '하비PB 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum7', notice: '배송', title: '캔디토이 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum8', notice: '배송', title: '반프레스토 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum9', notice: '배송', title: '완성품 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum10', notice: '배송', title: '하비 예약 출고 안내', date: '2024.06.17',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm1', notice: '공지사항', title: '개인정보처리방침변경안내(24.04.24 시행)', date: '2024.04.24', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm2', notice: '공지사항', title: 'BNKR멤버십[오프라인 실물카드 등록]서비스 종료 안내(23.03.26 `)', date: '2024.03.13', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm3', notice: '공지사항', title: '멤버십 이용약관 안내(23.02.17 시행)', date: '2023.02.10', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm4', notice: '공지사항', title: '이용약관 변경 안내(23.02.17 시행)', date: '2023.02.10', data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNumm5', notice: '공지사항', title: '구매확정 이후 주문에 대한 교환/반품처리 제한 안내', date: '2022.08.26', data:'안녕하세요. 반다이남코코리아몰입니다. 더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum1', notice: '배송', title: '반프레스토 예약 출고연기 안내', date: '2024.06.14',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum2', notice: '배송', title: '반프레스토 예약 출고연기 안내', date: '2024.06.14',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum3', notice: '배송', title: '하비PB 예약 출고 안내', date: '2024.06.10',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum4', notice: '배송', title: '캔디토이 예약 출고 안내', date: '2024.06.10',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum5', notice: '배송', title: '완구 프리미엄 예약 출고 안내', date: '2024.06.04',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum6', notice: '배송', title: '하비PB 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum7', notice: '배송', title: '완구 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum8', notice: '배송', title: '캡슐 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum9', notice: '배송', title: '완성품 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
        { id:'noticeNum10', notice: '배송', title: '하비 예약 출고 안내', date: '2024.06.03',data:'안녕하세요. 반다이남코코리아몰입니다.더 나은 서비스 제공을 위해 개인정보처리방침이 일부 변경될 예정입니다.' },
    ],
}

export default NoticeData