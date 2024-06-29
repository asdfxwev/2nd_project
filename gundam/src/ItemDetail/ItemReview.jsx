import React, { useState } from "react";
import './ItemDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

const ItemReview = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);  // 로그인 상태 저장 변수
    const [modalIsOpen, setModalIsOpen] = useState(false); // 리뷰작성 모달팝업 호출 변수
    const [modalOpenPop, setModalOpenPop] = useState(false); // 비로그인 시 안내모달팝업 호출 변수
    const navigate = useNavigate();

    // 1. 브라우져의 localStorage에서 로그인정보 확인
    if (!isLoggedIn) {
        const loginCheck = JSON.parse(localStorage.getItem("loginInfo"));
        if (loginCheck !== null) {
            setIsLoggedIn(true);
        }
    }

    const reviewPop = () => {
        if (isLoggedIn) {     // 로그인 상태가 true 일때 팝업 호출할것
            setModalIsOpen(true);
        } else {
            // alert('리뷰작성은 로그인 후에 작성할수있습니다.');
            // navigate('/Login');
            setModalOpenPop(true);

        }
    }



    const closeModal = () => {
        setModalIsOpen(false);
    };

    const closePopModal = () => {
        setModalOpenPop(false);
    };


    return (
        <>
            <div className="info_top_box" id="REVIEW_TAB">
                <div className="info_top_left">상품리뷰</div>
                <div className="info_top_right">
                    <FontAwesomeIcon className="iconsize" icon={faPenToSquare} onClick={reviewPop} />
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                    >
                        <h2>리뷰작성</h2>
                        <div style={{ width: '100%' }}>

                        </div>
                        <button type="button" onClick={closeModal}>Close Modal</button>
                    </Modal>

                    <Modal
                        isOpen={modalOpenPop}
                        onRequestClose={closePopModal}
                        contentLabel="Example Modal"
                    >
                        <div>
                            <h2>로그인 후 이용 가능합니다.</h2>
                            <button type="button" onClick={() => {navigate('/Login')}}>로그인</button>
                            <button type="button" onClick={closePopModal}>닫기</button>
                        </div>
                    </Modal>
                </div>
            </div>
            <div className="review_list">
                <div>
                    <span>제목</span>
                    <p>내용</p>
                </div>
            </div>
        </>
    );
}

export default ItemReview;