import React, { useState, useEffect } from "react";
import './ItemDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import reviewData from '../data/review.json';

const ItemReview = ( {item} ) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);  // 로그인 상태 저장 변수
    const [modalIsOpen, setModalIsOpen] = useState(false); // 리뷰작성 모달팝업 호출 변수
    const [modalOpenPop, setModalOpenPop] = useState(false); // 비로그인 시 안내모달팝업 호출 변수
    const [reviews, setReviews] = useState([]); // 리뷰 데이터를 저장할 상태 변수
    const navigate = useNavigate();

    useEffect(() => {
        setReviews(reviewData.review);
    }, []);


    // 브라우저의 localStorage에서 로그인 정보 확인
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
            setModalOpenPop(true);
        }
    }

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const closePopModal = () => {
        setModalOpenPop(false);
    };

    // 선택된 상품의 리뷰만 필터링
    const filteredReviews = reviews.filter(review => review.productId === item);

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
                        <div>
                            <h2>리뷰작성</h2>
                            <div>
                                <div className="re_comment_title">리뷰등록</div>
                                <input type="text" className="re_comment" />
                            </div>
                            {/* <button type="button" onClick={save}>저장</button> */}
                            <button type="button">저장</button>
                            <button type="button" onClick={closeModal}>닫기</button>
                        </div>
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
                <div className="re_list_top">
                    <div>No.</div><div>내용</div>
                </div>
                <div className="re_list_data">
                    {filteredReviews.map(review => (
                        <div className="re_list_row">
                            <div>{review.reviewId}</div>
                            <div>{review.comment}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default ItemReview;