import { useState, useEffect, useCallback } from 'react';

export const ScrollProgressBar = () => {
    const [pageScrollY, setPageScrollY] = useState(0);

    const onScroll = () => {
        const maxPageScrollY = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        
        setPageScrollY(window.scrollY/(maxPageScrollY)*100);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    }, []);

    return <div style={{backgroundColor: 'red', height: '5px', width: `${pageScrollY}%`, transition: 'width 250ms ease'}}></div>;
};