import { Restaurants } from './components/restaurants/component.jsx';
import { Layout } from './components/layout/component.jsx';
import { ThemeContextProvider } from './contexts/theme/provider.jsx';
import { UserContextProvider } from './contexts/user/provider.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/index.js'; 

export const App = () => {
    return (
        <Provider store={store}>
        <ThemeContextProvider>
            <UserContextProvider>
                <Layout>
                <Restaurants />
                </Layout>
            </UserContextProvider>
        </ThemeContextProvider>
        </Provider>
    );
};