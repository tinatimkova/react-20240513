import { restaurants } from './constants/mock';
import { Restaurants } from './components/restaurants/component.jsx';
import { Layout } from './components/layout/component.jsx';
import { ThemeContext } from './contexts/theme.js';
import { useState } from 'react';

export const App = () => {

    const [darkTheme, setDarkTheme] = useState(false);

    const toggleDarkTheme = () => {
        setDarkTheme(currentTheme => !currentTheme);
    }

    return (
        <ThemeContext.Provider value={{ darkTheme, toggleDarkTheme }}>
            <Layout>
            {!!restaurants?.length && <Restaurants restaurants={restaurants} />}
            </Layout>
        </ThemeContext.Provider>
    );
};