import { ScrollProgressBar } from '../scrollProgressBar/component.jsx';
import { ThemeToggler } from '../themeToggler/component.jsx';
import { AuthorizationButton } from '../authorizationButton/component.jsx';

export const Header = () => { 

    return <header style={{'position': 'sticky', 'top': '0'}}>
            <ScrollProgressBar />  
            <ThemeToggler />
            <AuthorizationButton />
        </header>;
}