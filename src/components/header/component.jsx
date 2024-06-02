import { ThemeContext } from '../../contexts/theme.js';
import { ScrollProgressBar } from '../scrollProgressBar/component.jsx';
import { useContext } from 'react';

export const Header = ({ toggleTheme }) => { 

    const theme = useContext(ThemeContext);

    return <header style={{'position': 'sticky', 'top': '0'}}>
          <ScrollProgressBar />
          <button onClick={() => toggleTheme()} style={theme}>Toggle Theme</button>
    </header>;
}