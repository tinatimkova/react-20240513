import { restaurants } from './constants/mock';
import { Restaurants } from './components/restaurants/component.jsx';
import { Layout } from './components/layout/component.jsx';
import { useState } from 'react';
import { ThemeContext, light, dark } from './contexts/theme.js';


export const App = () => {

    const [theme, setTheme] = useState(light);

    return (
        <ThemeContext.Provider value={theme}>
            <Layout onThemeChange={() => setTheme(theme === light ? dark : light)}>
            {!!restaurants?.length && <Restaurants restaurants={restaurants} theme={theme}/>}
            </Layout>
        </ThemeContext.Provider>
    );
};