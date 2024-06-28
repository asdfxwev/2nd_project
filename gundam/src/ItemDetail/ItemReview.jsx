import React, { useState } from "react";
import './ItemDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

{/* 리뷰작성 조건
    1. 로그인 되어있을것. (Local Storage)
*/}

const ItemReview = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);  // 로그인 상태 저장 변수
    // const [loginInfo, setLoginInfo] = useState(""); // 회원 로그인 정보
    const [modalIsOpen, setModalIsOpen] = useState(false); // 리뷰작성 모달팝업 호출 변수
    const navigate = useNavigate();

    // 1. 로그인 확인
    // => 브라우져의 localStorage에서 로그인정보 확인
    if (!isLoggedIn) {
        const loginCheck = JSON.parse(localStorage.getItem("loginInfo"));

        if (loginCheck !== null) {
            // alert(`** localStorage 로그인 확인 username=${loginCheck.name}`);
            setIsLoggedIn(true);
        }
    }

    const reviewPop = () => {
        if (isLoggedIn) {     // 로그인 상태가 true 일때 팝업 호출할것
            setModalIsOpen(true);
        } else {
            alert('리뷰작성은 로그인 후에 작성할수있습니다.');
            navigate('/Login');
        }
    }

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <div className="info_top_box">
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
                </div>
            </div>
            <div className="review_list">

            </div>
        </>
    );
}

export default ItemReview;