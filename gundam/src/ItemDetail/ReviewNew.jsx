import React from "react";

const ReviewNew = () => {

    const reviewPop = () => {
        if(isLoggedIn){     // 로그인 상태가 true 일때 팝업 호출할것
            
        } else {
            alert('리뷰작성은 로그인 후에 작성할수있습니다.');
            <Login />
        }
    }

    const closeModal = () => {
        setModalIsOpen(false);
    };

    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
    >
        <h2>Hello</h2>
        <button type="button" onClick={closeModal}>Close Modal</button>
    </Modal>

    return(

    );
}

export default ReviewNew;