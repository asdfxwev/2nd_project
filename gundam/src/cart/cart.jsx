// import React, { useState, useEffect } from 'react';
// import './Cart.css';
// import axios from 'axios';

// const CartItem = ({ item, onQuantityChange, onCheckboxChange, isChecked }) => {
//     const handleChange = (event) => {
//         onQuantityChange(item.id, parseInt(event.target.value));
//     };

//     return (
//         <div className="cart-item">
//             <div><input type="checkbox" checked={isChecked} onChange={() => onCheckboxChange(item.id)} /></div>
//             <div><img src={item.image} alt={item.name} /></div>
//             <div>{item.name}</div>
//             <div><input type="number" value={item.quantity} min="1" onChange={handleChange} /></div>
//             <div>{item.price.toLocaleString()}원</div>
//             <div>{(item.price * item.quantity).toLocaleString()}원</div>
//         </div>
//     );
// };

// const Cart = () => {
//     const [cartItems, setCartItems] = useState([]);
//     const [checkedItems, setCheckedItems] = useState([]);
    
//     const existingInquiries = JSON.parse(localStorage.getItem('loginInfo'));
//     const userId = existingInquiries.id;

//     // useEffect(() => {
//     //     const storedItems = JSON.parse(localStorage.getItem('cartItems')) || []; // 기본 값 설정
//     //     setCartItems(storedItems);
//     //     setCheckedItems(storedItems.map(item => item.id));
//     // }, []);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
//                 console.log(userResponse);
//                 const userData = userResponse.data;
//                 console.log(userData);

//                 setCheckedItems(userData.cart.map(item => item.id));
//                 console.log(checkedItems);
//             } catch (error) {
//                 console.error('데이터를 가져오는 중 오류 발생:', error);
//             }
//         };
//         fetchData();
//     }, [userId]);

//     const handleQuantityChange = (id, quantity) => {
//         const updatedItems = cartItems.map(item =>
//             item.id === id ? { ...item, quantity } : item
//         );
//         setCartItems(updatedItems);
//         localStorage.setItem('cartItems', JSON.stringify(updatedItems));
//     };

//     const handleCheckboxChange = (id) => {
//         setCheckedItems(prevCheckedItems =>
//             prevCheckedItems.includes(id)
//                 ? prevCheckedItems.filter(itemId => itemId !== id)
//                 : [...prevCheckedItems, id]
//         );
//     };

//     const handleRemoveCheckedItems = () => {
//         const updatedItems = cartItems.filter(item => !checkedItems.includes(item.id));
//         setCartItems(updatedItems);
//         setCheckedItems([]);
//         localStorage.setItem('cartItems', JSON.stringify(updatedItems));
//     };

//     const handleRemoveAllItems = () => {
//         setCartItems([]);
//         setCheckedItems([]);
//         localStorage.removeItem('cartItems');
//     };

//     const total = cartItems
//         .filter(item => checkedItems.includes(item.id))
//         .reduce((sum, item) => sum + item.price * item.quantity, 0);
//         console.log(checkedItems);

//     return (
//         <div>
//             <h1 className='h1-name'>장바구니</h1>
//             <div className="cart-container">
//                 <div className="cart-header">
//                     <div>선택</div>
//                     <div>상품 이미지</div>
//                     <div>상품 이름</div>
//                     <div>수량</div>
//                     <div>가격</div>
//                     <div>총 가격</div>
//                 </div>
//                 {cartItems.map(item => (
//                     <CartItem
//                         key={item.id}
//                         item={item}
//                         onQuantityChange={handleQuantityChange}
//                         onCheckboxChange={handleCheckboxChange}
//                         isChecked={checkedItems.includes(item.id)}
//                     />
//                 ))}
//                 <button className='button-size' onClick={handleRemoveCheckedItems}>선택한 상품 삭제</button>
//                 <button className='button-size' onClick={handleRemoveAllItems}>전체 상품 삭제</button>
//                 <div className="cart-total">
//                     총 합계: {total.toLocaleString()}원
//                 </div>
//                 <div className="cart-actions">
//                     <button>결제하기</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Cart;


import React, { useState, useEffect } from 'react';
import './Cart.css';
import axios from 'axios';

const CartItem = ({ item, onQuantityChange, onCheckboxChange, isChecked }) => {
    const handleChange = (event) => {
        onQuantityChange(item.id, parseInt(event.target.value));
    };

    return (
        <div className="cart-item">
            <div><input type="checkbox" checked={isChecked} onChange={() => onCheckboxChange(item.id)} /></div>
            <div><img src={item.image} alt={item.name} /></div>
            <div>{item.name}</div>
            <div><input type="number" value={item.quantity} min="1" onChange={handleChange} /></div>
            <div>{item.price.toLocaleString()}원</div>
            <div>{(item.price * item.quantity).toLocaleString()}원</div>
        </div>
    );
};

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [checkedItems, setCheckedItems] = useState([]);

    const existingInquiries = JSON.parse(localStorage.getItem('loginInfo'));
    const userId = existingInquiries.id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await axios.get(`http://localhost:3001/users/${userId}`);
                const userData = userResponse.data;

                // Assuming the cart data is in the 'cart' field of the userData
                setCartItems(userData.cart);
                setCheckedItems(userData.cart.map(item => item.id));
            } catch (error) {
                console.error('데이터를 가져오는 중 오류 발생:', error);
            }
        };
        fetchData();
    }, [userId]);

    const handleQuantityChange = (id, quantity) => {
        const updatedItems = cartItems.map(item =>
            item.id === id ? { ...item, quantity } : item
        );
        setCartItems(updatedItems);
        // Optional: You can also update the backend with the new quantity
        // axios.put(`http://localhost:3001/users/${userId}/cart`, updatedItems);
    };

    const handleCheckboxChange = (id) => {
        setCheckedItems(prevCheckedItems =>
            prevCheckedItems.includes(id)
                ? prevCheckedItems.filter(itemId => itemId !== id)
                : [...prevCheckedItems, id]
        );
    };

    const handleRemoveCheckedItems = () => {
        const updatedItems = cartItems.filter(item => !checkedItems.includes(item.id));
        setCartItems(updatedItems);
        setCheckedItems([]);
        // Optional: You can also update the backend with the new cart items
        // axios.put(`http://localhost:3001/users/${userId}/cart`, updatedItems);
    };

    const handleRemoveAllItems = () => {
        setCartItems([]);
        setCheckedItems([]);
        // Optional: You can also update the backend with an empty cart
        // axios.put(`http://localhost:3001/users/${userId}/cart`, []);
    };

    const total = cartItems
        .filter(item => checkedItems.includes(item.id))
        .reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h1 className='h1-name'>장바구니</h1>
            <div className="cart-container">
                <div className="cart-header">
                    <div>선택</div>
                    <div>상품 이미지</div>
                    <div>상품 이름</div>
                    <div>수량</div>
                    <div>가격</div>
                    <div>총 가격</div>
                </div>
                {cartItems.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onQuantityChange={handleQuantityChange}
                        onCheckboxChange={handleCheckboxChange}
                        isChecked={checkedItems.includes(item.id)}
                    />
                ))}
                <button className='button-size' onClick={handleRemoveCheckedItems}>선택한 상품 삭제</button>
                <button className='button-size' onClick={handleRemoveAllItems}>전체 상품 삭제</button>
                <div className="cart-total">
                    총 합계: {total.toLocaleString()}원
                </div>
                <div className="cart-actions">
                    <button>결제하기</button>
                </div>
            </div>
        </div>
    ); 
};

export default Cart;