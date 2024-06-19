// 'use strict';
import Button from "./Button";
import Menu from "./Menu";
import { BrowserRouter } from 'react-router-dom';
import './Header.css'



export default function Header() {


    return (
        <>
            <Button />
            <header>
                <BrowserRouter>
                    <Menu />
                </BrowserRouter>
            </header>
        </>
    )
}