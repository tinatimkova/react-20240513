import { Layout } from './components/layout/component.jsx';
import { ThemeContextProvider } from './contexts/theme/provider.jsx';
import { UserContextProvider } from './contexts/user/provider.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/index.js'; 
import { RestaurantsContainer } from './components/restaurants/container.jsx';

export const App = () => {
    return (
        <Provider store={store}>
        <ThemeContextProvider>
            <UserContextProvider>
                <Layout>
                <RestaurantsContainer />
                </Layout>
            </UserContextProvider>
        </ThemeContextProvider>
        </Provider>
    );
};