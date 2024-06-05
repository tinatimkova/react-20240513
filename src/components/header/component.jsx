import { UserContext } from '../../contexts/user.js';
import { ScrollProgressBar } from '../scrollProgressBar/component.jsx';
import { ThemeToggler } from '../themeToggler/component.jsx';
import { Button } from '../button/component.jsx';
import { useContext } from 'react';

export const Header = () => { 
    const [ currentUser, onUserLoggedIn, onUserLoggedOut] = useContext(UserContext);

    return <header style={{'position': 'sticky', 'top': '0'}}>
            <ScrollProgressBar />  
            <ThemeToggler />
            {/* {currentUser?.name ? onUserLoggedIn(style) : onUserLoggedOut(style)} */}
            <Button onClick={() => openModal()}>Log In</Button>
        </header>;
}