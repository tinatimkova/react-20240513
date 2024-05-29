import { useState, useEffect, useCallback } from 'react';

export const ScrollProgressBar = () => {
    const [pageScrollY, setPageScrollY] = useState(0);

    const onPageScrollY = useCallback(() => {
        const maxPageScrollY = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setPageScrollY(window.scrollY/(maxPageScrollY)*100);
    }, []); 

    useEffect(() => {
        window.addEventListener('scroll', onPageScrollY);
    }, []);

    return <div style={{backgroundColor: 'red', height: '5px', width: `${pageScrollY}%`}}></div>;
};