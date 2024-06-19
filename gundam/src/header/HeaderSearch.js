import './HeaderSearch.css'
import { useState } from 'react';
export default function HeaderSearch() {

    const [content, setContent]  = useState('');

    function onChangeContent (e) {
        setContent(e.target.value);
    }

    function onSubmit (e) {
        e.preventDefault();
        setContent('');
    }

    function onKeyDownContent (e) {
        if (e.keyCode === 13) {
            onSubmit(e);
        }
    }

    return (
        <div className="searchMenu">
            <form className="headerForm">
                <input className="headerSearchInput" type="text" value={content} onChange={onChangeContent} onKeyDown={onKeyDownContent} placeholder='검색어를 입력해라' />
                <button className="header_Search" onClick={onSubmit}><i class="fa-solid fa-magnifying-glass" /></button>

            </form>
        </div>
    )
}