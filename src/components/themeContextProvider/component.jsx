import { ThemeContext } from '../../contexts/theme.js';
import { useState } from 'react';

export const ThemeContextProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleDarkTheme = () => {
        setIsDarkTheme(currentTheme => !currentTheme);
    }

    return <ThemeContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
            { children }
           </ThemeContext.Provider>;
};