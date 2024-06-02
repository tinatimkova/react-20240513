import { ThemeContext } from '../../contexts/theme.js';
import { UserContext } from '../../contexts/user.js';
import { ScrollProgressBar } from '../scrollProgressBar/component.jsx';
import { useContext } from 'react';

export const Header = () => { 

    const { toggleDarkTheme, isDarkTheme } = useContext(ThemeContext);
    const [ currentUser, login, logout] = useContext(UserContext);

    const style = isDarkTheme ? {backgroundColor: 'grey'} : null; 

    return <header style={{'position': 'sticky', 'top': '0'}}>
            <ScrollProgressBar />
            <button onClick={() => toggleDarkTheme()} style={style}>Toggle Theme</button>
            {currentUser?.name ? login(currentUser, style) : logout(style)}
        </header>;
}