import { ThemeContext } from '../../contexts/theme.js';
import { ScrollProgressBar } from '../scrollProgressBar/component.jsx';
import { useContext } from 'react';

export const Header = () => { 

    const { darkTheme, toggleDarkTheme} = useContext(ThemeContext);

    return <header style={{'position': 'sticky', 'top': '0'}}>
          <ScrollProgressBar />
          <button onClick={() => toggleDarkTheme()} style={{backgroundColor: darkTheme ? 'grey' : null}}>Toggle Theme</button>
    </header>;
}