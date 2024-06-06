import { ThemeContext } from './context.js';
import { useState, useMemo } from 'react';
import { THEMES } from './constants.js';

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(THEMES.default);

    const themeContextValue = useMemo(() => ({
        theme,
        toggleTheme: () => setTheme(theme === THEMES.default ? THEMES.alternative : THEMES.default)
    }), [theme])

    return <ThemeContext.Provider value={themeContextValue}>
            { children }
           </ThemeContext.Provider>;
};