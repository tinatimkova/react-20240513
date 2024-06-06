import { restaurants } from './constants/mock';
import { Restaurants } from './components/restaurants/component.jsx';
import { Layout } from './components/layout/component.jsx';
import { ThemeContextProvider } from './contexts/theme/provider.jsx';
import { UserContextProvider } from './contexts/user/provider.jsx';

export const App = () => {
    return (
        <ThemeContextProvider>
            <UserContextProvider>
                <Layout>
                {!!restaurants?.length && <Restaurants restaurants={restaurants} />}
                </Layout>
            </UserContextProvider>
        </ThemeContextProvider>
    );
};