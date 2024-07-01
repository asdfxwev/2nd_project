import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './SignupForm.css';
import { useNavigate } from 'react-router-dom';

const checkEmailExists = async (email) => {
    try {
        const response = await axios.get(`http://localhost:3001/users?email=${email}`);
        return response.data.length > 0;
    } catch (error) {
        console.error('Error checking email:', error);
        return false;
    }
};

const SignupForm = () => {
    const navigate = useNavigate();

    const handleSubmit = async (values) => {
        const { email, address, dtl_address, ...otherValues } = values;
        const combinedAddress = `${address} ${dtl_address}`;
        const emailExists = await checkEmailExists(email);

        if (emailExists) {
            alert('이미 사용 중인 이메일입니다.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/users', { email, address: combinedAddress, ...otherValues });
            console.log(response.data);
            navigate('/Login');
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    };

    const checkPhoneNumberExists = async (phoneNumber) => {
        try {
            const response = await axios.get(`http://localhost:3001/users?phoneNumber=${phoneNumber}`);
            return response.data.length > 0;
        } catch (error) {
            console.error('Error checking phone number:', error);
            return false;
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

        <div className='join_box'>
            <form onSubmit={formik.handleSubmit} className="signup-form">

                <h1 className='logo2'>
                    <a href="/"><img src='../../image/logo.png' alt='/' /></a>
                </h1>

                <div className="form-group">
                    <label htmlFor="name"></label>
                    <input
                        id="name"
                        name="name"
                        type="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        placeholder="이름을 입력하세요"
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="error">{formik.errors.name}</div>
                    ) : null}
                </div>
                <div className="form-group">
                    <label htmlFor="email"></label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        placeholder="이메일을 입력하세요"
                    />
                    <button type="button" onClick={async () => {
                        const emailExists = await checkEmailExists(formik.values.email);
                        if (emailExists) {
                            alert('이미 사용 중인 이메일입니다.');
                        } else {
                            alert('사용 가능한 이메일입니다.');
                        }
                    }}>중복 확인</button>
                    {formik.touched.email && formik.errors.email ? (
                        <div className="error">{formik.errors.email}</div>
                    ) : null}

                </div>
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
                    <button type="button" onClick={async () => {
                        const phoneNumberExists = await checkPhoneNumberExists(formik.values.phoneNumber);
                        if (phoneNumberExists) {
                            alert('이미 사용 중인 핸드폰 번호입니다.');
                        } else {
                            alert('사용 가능한 핸드폰 번호입니다.');
                        }
                    }}>중복 확인</button>
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                        <div className="error">{formik.errors.phoneNumber}</div>
                    ) : null}
                </div>

                <div className="form-group">
                    <label htmlFor="password"></label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        placeholder="비밀번호를 입력하세요"
                    />
                    {formik.touched.password && formik.errors.password ? (
                        <div className="error">{formik.errors.password}</div>
                    ) : null}
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword"></label>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                        placeholder="비밀번호를 다시 입력하세요"
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                        <div className="error">{formik.errors.confirmPassword}</div>
                    ) : null}
                </div>

                <div className="form-group">
                    <label htmlFor="address"></label>
                    {/* <AddressSearch setAddress={(address) => formik.setFieldValue('address', address)} /> */}
                    <input
                        id="address_kakao"
                        name="address"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                        placeholder="주소를 입력하세요"
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




                


                <button type="submit" className="submit-button">회원가입</button>
            </form>
        </div>
    );
};

export default SignupForm;