import { Tab } from '../tab/component.jsx';

export const Tabs = ({ restaurants, setActive }) => {
    return (
        restaurants.map(restaurant => 
            !!restaurant && <Tab restaurant={restaurant} setActive={setActive} />)
        )
};