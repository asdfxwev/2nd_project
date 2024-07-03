import { useState } from 'react';
import './Csc.css';


    

export default function Csc({ item }) {

    const [visibleNotice, setVisibleNotice] = useState(null);
    const [cscAnimating, setcscAnimating] = useState(false);
    const [cscClosing, setcscClosing] = useState(false);

    const onNoticeTitle = (noticeId) => {
        if (noticeId === visibleNotice) {
            setcscClosing(true);
            setTimeout(() => {
                setVisibleNotice(null);
                setcscClosing(false);
            }, 500); // Match the duration of the CSS animation
        } else {
            setVisibleNotice(noticeId);
            setcscAnimating(true);
            setTimeout(() => {
                setcscAnimating(false);
            }, 500); // Match the duration of the CSS animation
        }
    };
    

    return (
        <>
            <div className="CscListTitles">
                <div style={{ width: '100px'}}>{item.classification}</div>
                <div style={{ width: '800px'}} onClick={() => onNoticeTitle(item.id)}>{item.title}</div>
            </div>

            <div  className={`nonVisible ${visibleNotice !== item.id ? '' : 'Cscblock'} 
                ${cscAnimating ? 'menuAnimation' : ''} ${cscClosing ? 'cscClosing' : ''}`}>
                {item.detail}
            </div>
        </>
    )
}