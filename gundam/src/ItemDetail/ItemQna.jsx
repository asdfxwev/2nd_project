import React, { useState, useEffect } from "react";
import './ItemDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import qnaData from '../data/db.json';
import axios from 'axios';

const ItemQna = ({item}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);  // 로그인 상태 저장 변수
    const [modalIsOpen, setModalIsOpen] = useState(false); // Qna작성 모달팝업 호출 변수
    const [modalOpenPop, setModalOpenPop] = useState(false); // 비로그인 시 안내모달팝업 호출 변수
    const [qnas, setQnas] = useState([]); // 리뷰 데이터를 저장할 상태 변수
    const navigate = useNavigate();
    const [comment, setQnaValue] = useState('');

    useEffect(() => {
        setQnas(qnaData.qna);
    }, []);

    // 브라우저의 localStorage에서 로그인 정보 확인
    if (!isLoggedIn) {
        const loginCheck = JSON.parse(localStorage.getItem("loginInfo"));
        if (loginCheck !== null) {
            setIsLoggedIn(true);
        }
    }

    const qnaPop = () => {
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

    const filteredQnas = qnas.filter(qna => qna.productId === item);

    function onQnaMessage (e) {
        setQnaValue(e.target.value)
    }

    const submitQna = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3001/qna`);
            const qnaList = response.data;
            const date = new Date().toLocaleDateString();

            // 리뷰 아이디 생성
            const qna_Id = qnaList.length ? qnaList[qnaList.length - 1].qna_Id + 1 : 1;

            const productId = item;
            const existingInquiries = JSON.parse(localStorage.getItem('loginInfo'));
            const userId = existingInquiries.id;

            const newQna = { qna_Id, productId, userId, comment, date };

            // 서버에 새로운 리뷰 추가
            await axios.post(`http://localhost:3001/qna`, newQna);

            setQnaValue('');
            closeModal();
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    }

    return(
        <>
            <div className="info_top_box" id="QNA">
                <div className="info_top_left">Q&A</div>
                <div className="info_top_right">
                    <FontAwesomeIcon className="iconsize" icon={faPenToSquare} onClick={qnaPop} />
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                    >
                        <div className="review_pop">
                            <h2>Qna작성</h2>
                            <div className="qnaBox">
                                내용 : <textarea value={comment} onChange={onQnaMessage} type="text" id="comment" className="re_comment" />
                            </div>
                            <div className="re_button_box">
                                <button type="button" className="re_button" onClick={submitQna}>저장</button>
                                <button type="button" className="re_button" onClick={closeModal}>닫기</button>
                            </div>
                        </div>
                    </Modal>

                    <Modal
                        isOpen={modalOpenPop}
                        onRequestClose={closePopModal}
                        contentLabel="Example Modal"
                    >
                        <div className="review_pop">
                            <h2>로그인 후 이용 가능합니다.</h2>
                            <div className="re_button_box">
                                <button type="button" className="re_button" onClick={() => { navigate('/Login') }}>로그인</button>
                                <button type="button" className="re_button" onClick={closePopModal}>닫기</button>
                            </div>
                        </div>
                    </Modal>
                    
                </div>
            </div>
            <div className="qna_list">
                {filteredQnas.length > 0 ? (
                    filteredQnas.map(qna => {
                        const qnaStateText = qna.qna_State == '' ? "문의중" : "문의중";
                        return (
                            <div className="qna_list_row" key={qna.qna_Id}>
                                <div className="qna_state">{qnaStateText}</div>
                                <div>{qna.comment}</div>
                                <div>{qna.qna_date}</div>
                            </div>
                        );
                    })
                ) : (
                    <div className="no_qna">
                        <div>등록된 Q&A가 없습니다.</div>
                    </div>
                )}
            </div>
        </>
    );
}

export default ItemQna;