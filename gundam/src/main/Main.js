import { Routes, Route, NavLink } from 'react-router-dom';
import MainComponent from './MainComponent';
import ItemList from '../ItemList/ItemList';
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemDataBase from '../ItemList/ItemDataBase';
import React,{useState, useEffect} from 'react';
import Login from '../Login/Login';
import Join from '../join/join';
import Notice from '../notice/Notice';
import Customerservice from '../csc/Customerservice'






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
                <Route path="/Login" element={<Login/>} />
                <Route path="/Login/Join" element={<Join/>} />
                {/* <Route path="/Notice" element={<Notice />} /> */}
                <Route path="/Notice" element={<Notice />} />
                <Route path="/Csc" element={<Customerservice />} />
            </Routes>
        </>
    )
}