import { Header } from '../header/component.jsx';
import { Footer } from '../footer/component.jsx';

export const Layout = ({ children }) => {
    return (
        <div>
            <div id='modal' style={{ position: 'relative', zIndex: 2 }}></div>
            <div style={{ zIndex: 1 }}>
                <Header />
                { children }
                <Footer />
            </div>
        </div>);
};