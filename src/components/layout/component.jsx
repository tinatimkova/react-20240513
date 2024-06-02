import { Header } from '../header/component.jsx';
import { Footer } from '../footer/component.jsx';

export const Layout = ({ children, onThemeChange }) => {
    return (
        <div>
            <Header toggleTheme={onThemeChange}/>
            { children }
            <Footer />
        </div>);
};