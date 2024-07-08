import React from 'react';

function PhoneNumberForm({ formik, checkPhoneNumberExists }) {
    // 핸드폰 번호 유효성 검사 함수
    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberRegex = /^[0-9]{10,11}$/; // 한국 핸드폰 번호 형식 (10~11자리 숫자)
        return phoneNumberRegex.test(phoneNumber);
    };

    return (
        <div className="form-group">
            <label htmlFor="phoneNumber"></label>
            <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                placeholder="핸드폰 번호를 입력하세요"
            />
            <button
                type="button"
                onClick={async () => {
                    const phoneNumber = formik.values.phoneNumber;

                    // 핸드폰 번호가 입력되지 않았을 때
                    if (!phoneNumber) {
                        alert('핸드폰 번호를 입력하세요.');
                        return;
                    }

                    // 핸드폰 번호가 유효하지 않을 때
                    if (!validatePhoneNumber(phoneNumber)) {
                        alert('입력한 번호가 유효하지 않습니다.');
                        return;
                    }

                    // 핸드폰 번호 중복 검사
                    const phoneNumberExists = await checkPhoneNumberExists(phoneNumber);
                    if (phoneNumberExists) {
                        alert('이미 사용 중인 핸드폰 번호입니다.');
                    } else {
                        alert('사용 가능한 핸드폰 번호입니다.');
                    }
                }}
            >
                중복 확인
            </button>
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="error">{formik.errors.phoneNumber}</div>
            ) : null}
        </div>
    );
}

export default PhoneNumberForm;
