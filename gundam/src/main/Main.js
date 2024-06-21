import { Routes, Route, NavLink } from 'react-router-dom';
import MainComponent from './MainComponent';
import ItemList from '../ItemList/ItemList';
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemDataBase from '../ItemList/ItemDataBase'
import React,{useState, useEffect} from 'react'
import Login from '../Login/Login';

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
                <Route path="/ItemDetail" element={<ItemDetail />} />
                <Route path="/Login" element={<Login/>} />
            </Routes>
        </>
    )
}