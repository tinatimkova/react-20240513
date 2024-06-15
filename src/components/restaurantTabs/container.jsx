import { useSelector } from 'react-redux';
import { RestaurantTabs } from './component';
import { selectRestaurantIds } from '../../redux/entities/restaurant/selectors';


export const RestaurantTabsContainer = ({ onTabClick, activeTab }) => {
    const restaurantIds = useSelector(selectRestaurantIds);

    return <RestaurantTabs 
            ids={restaurantIds}
            onTabClick={onTabClick} 
            activeTab={activeTab}
             />

};