import { useState, useEffect } from 'react';

export const ScrollProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const maxScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            
            setScrollProgress(window.scrollY/(maxScroll)*100);
        }

            window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        }
    }, []);

    return <div style={{backgroundColor: 'red', height: '5px', width: `${scrollProgress}%`, transition: 'width 250ms ease'}}></div>;
};