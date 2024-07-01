import { Routes, Route, NavLink } from 'react-router-dom';
import MainComponent from './MainComponent';
import ItemList from '../ItemList/ItemList';
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemDataBase from '../ItemList/ItemDataBase';
import React,{useState, useEffect} from 'react';
import Login from '../Login/Login';
import Join from '../join/join';
import Findingid from '../Login/Findingid';
import Notice from '../csc/Notice';
import Customerservice from '../csc/Customerservice';
import NoticeDelivery from '../csc/NoticeDelivery';
import Inquiry from '../csc/Inquiry';
import InquiryWrite from '../csc/InquiryWrite';
import MyPage from '../MyPage/MyPage';
import Cart from '../Cart/Cart'




export default function Main() {
    const [items, setItems] = useState([]);

    useEffect(() => {

        setItems(ItemDataBase);
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<MainComponent />} />
                <Route path="/ItemList" element={<ItemList />} />
                <Route path="/ItemList/ItemDetail/:id" element={<ItemDetail />} />
                <Route path="/Login/*" element={<Login/>} />
                <Route path="/Login/Join" element={<Join/>} />
                <Route path="/MyPage" element={<MyPage/>} />
                <Route path="/Login/Findingid" element={<Findingid/>} />
                {/* <Route path="/Notice" element={<Notice />} /> */}
                <Route path="/Notice" element={<Notice />} />
                <Route path="/Notice/*" element={<NoticeDelivery />} />
                {/* <Route path="/Notice" element={<Notice />} /> */}
                <Route path="/Csc/" element={<Customerservice />} />
                <Route path="/Csc/Inquiry" element={<Inquiry />} />
                <Route path="/Csc/Inquiry/InquiryWrite" element={<InquiryWrite />} />
                <Route path="/Cart/*" element={<Cart/>} />
            </Routes>
        </>
    )
}