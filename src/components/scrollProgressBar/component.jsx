import { useState, useEffect } from 'react';

export const ScrollProgressBar = () => {
    const [scroll, setScroll] = useState(0);

    const onScroll = () => {
        const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScroll(window.scrollY/(maxScroll)*100);
    };

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    }, [onScroll]);

    return <div style={{backgroundColor: 'red', height: '5px', width: `${scroll}%`}}></div>;
};