import { Header } from './components/header/component.jsx';
import { Footer } from './components/footer/component.jsx';

export const Layout = ({ children }) => {
    return (
    <div>
        <Header />
        { children }
        <Footer />
    </div>);
};