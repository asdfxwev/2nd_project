import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './SignupForm.css';
import { useNavigate } from 'react-router-dom';
// import AddressSearch from './AddressSearch';

const SignupForm = () => {

    const navigate = useNavigate();

    const handleSubmit = async (values) => {

        const { name, email, password, confirmPassword, address, dtl_address, phoneNumber } = values;
        const combinedAddress = `${address} ${dtl_address}`; // address와 dtl_address 값을 공백으로 구분하여 연결
        const formData = { name, email, password, address: combinedAddress, phoneNumber, inquries:[]};

        try {
            const response = await axios.post('http://localhost:3001/users', formData);
            console.log(response.data);
            navigate('/Login');
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
        script.onload = () => {
            const addressKakao = document.getElementById("address_kakao");
            if (addressKakao) {
                addressKakao.addEventListener("click", function () {
                    new window.daum.Postcode({
                        oncomplete: function (data) {
                            // formik.setFieldValue를 사용하여 주소 필드 업데이트
                            formik.setFieldValue('address', data.address);
                            document.querySelector("input[name='address']").focus();
                        }
                    }).open();
                });
            }
        };

        document.body.appendChild(script);

        // 스크립트 제거를 위한 정리 함수
        return () => {
            document.body.removeChild(script);
        };
    }, []);


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            address: '',
            dtl_address: '',
            phoneNumber: '',
            securityQuestion: '',
            securityAnswer: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('이름을 입력해주세요.'),
            email: Yup.string().email('올바른 이메일 주소를 입력하세요.').required('이메일 주소는 필수 항목입니다.'),
            password: Yup.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다.').required('비밀번호는 필수 항목입니다.'),
            confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다.').required('비밀번호 확인은 필수 항목입니다.'),
            address: Yup.string().required('주소는 필수 항목입니다.'),
            dtl_address: Yup.string(),
            phoneNumber: Yup.string().matches(/^[0-9]{10,11}$/, '유효한 핸드폰 번호를 입력하세요.').required('핸드폰 번호는 필수 항목입니다.')
            
        }),
        onSubmit: handleSubmit
    });

    return (

        <form onSubmit={formik.handleSubmit} className="signup-form">

            <div className="form-group">
                <label htmlFor="name">이름</label>
                <input
                    id="name"
                    name="name"
                    type="name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                    <div className="error">{formik.errors.name}</div>
                ) : null}
            </div>
            <div className="form-group">
                <label htmlFor="email">이메일</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className="error">{formik.errors.email}</div>
                ) : null}
            </div>

            <div className="form-group">
                <label htmlFor="password">비밀번호</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div className="error">{formik.errors.password}</div>
                ) : null}
            </div>

            <div className="form-group">
                <label htmlFor="confirmPassword">비밀번호 확인</label>
                <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div className="error">{formik.errors.confirmPassword}</div>
                ) : null}
            </div>

            <div className="form-group">
                <label htmlFor="address">주소</label>
                {/* <AddressSearch setAddress={(address) => formik.setFieldValue('address', address)} /> */}
                <input
                    id="address_kakao"
                    name="address"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                />
                <input
                    id="del_address_kakao"
                    name="dtl_address"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.dtl_address}
                />


                {formik.touched.address && formik.errors.address ? (
                    <div className="error">{formik.errors.address}</div>
                ) : null}

            </div>




            <div className="form-group">
                <label htmlFor="phoneNumber">핸드폰 번호</label>
                <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phoneNumber}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div className="error">{formik.errors.phoneNumber}</div>
                ) : null}
            </div>


            <button type="submit" className="submit-button">회원가입</button>
        </form>
    );
};

export default SignupForm;



