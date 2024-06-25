import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './SignupForm.css';
import { useNavigate } from 'react-router-dom';

// const handleSubmit = async (values) => {
//     const { name,email, password,confirmPassword,address, phoneNumber,securityQuestion,securityAnswer} = values;
//     const formData = {name,email, password,confirmPassword,address, phoneNumber,securityQuestion,securityAnswer };

//     try {
//       const response = await axios.post('http://localhost:3001/users', formData);
//       console.log(response.data);
//       // 회원가입 성공 처리

//     } catch (error) {
//       console.error('Error:', error.response ? error.response.data : error.message);
//       // 회원가입 실패 처리
//     }
// };

const SignupForm = () => {
    const navigate = useNavigate();
    const handleSubmit = async (values) => {
        const { name, email, password, confirmPassword, address, phoneNumber, securityQuestion, securityAnswer } = values;
        const formData = { name, email, password, confirmPassword, address, phoneNumber, securityQuestion, securityAnswer };

        try {
            const response = await axios.post('http://localhost:3001/users', formData);
            console.log(response.data);
            // 회원가입 성공 처리
            navigate('/Login');
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            // 회원가입 실패 처리
        }
    };






    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            address: '',
            phoneNumber: '',
            securityQuestion: '',
            securityAnswer: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('이름을 입력해주세요.'),

            email: Yup.string()
                .email('올바른 이메일 주소를 입력하세요.')
                .required('이메일 주소는 필수 항목입니다.'),
            password: Yup.string()
                .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
                .required('비밀번호는 필수 항목입니다.'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
                .required('비밀번호 확인은 필수 항목입니다.'),
            address: Yup.string()
                .required('주소는 필수 항목입니다.'),
            phoneNumber: Yup.string()
                .matches(/^[0-9]{10,11}$/, '유효한 핸드폰 번호를 입력하세요.')
                .required('핸드폰 번호는 필수 항목입니다.'),
            securityQuestion: Yup.string()
                .required('비밀번호 찾기 질문을 선택하세요.'),
            securityAnswer: Yup.string()
                .required('비밀번호 찾기 답변을 입력하세요.')
        }),
        onSubmit: handleSubmit,
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
                <input
                    id="address"
                    name="address"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
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

            <div className="form-group">
                <label htmlFor="securityQuestion">비밀번호 찾기 질문</label>
                <select
                    id="securityQuestion"
                    name="securityQuestion"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.securityQuestion}
                >
                    <option value="">질문을 선택하세요</option>
                    <option value="첫 번째 반려동물의 이름은?">첫 번째 반려동물의 이름은?</option>
                    <option value="태어난 도시의 이름은?">태어난 도시의 이름은?</option>
                    <option value="가장 친한 친구의 이름은?">가장 친한 친구의 이름은?</option>
                </select>
                {formik.touched.securityQuestion && formik.errors.securityQuestion ? (
                    <div className="error">{formik.errors.securityQuestion}</div>
                ) : null}
            </div>

            <div className="form-group">
                <label htmlFor="securityAnswer">비밀번호 찾기 답변</label>
                <input
                    id="securityAnswer"
                    name="securityAnswer"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.securityAnswer}
                />
                {formik.touched.securityAnswer && formik.errors.securityAnswer ? (
                    <div className="error">{formik.errors.securityAnswer}</div>
                ) : null}
            </div>

            <button type="submit" className="submit-button">회원가입</button>
        </form>
    );
};

export default SignupForm;



