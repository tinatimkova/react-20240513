import { restaurants } from './constants/mock';
import { Restaurants } from './components/restaurants/component.jsx';
import { Layout } from './components/layout/component.jsx';

export const App = () => {
    return (
            <Layout>
            <Restaurants restaurants={restaurants} />
            </Layout>
    );
};