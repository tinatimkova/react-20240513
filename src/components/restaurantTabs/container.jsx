import { useSelector } from 'react-redux';
import { RestaurantTabs } from './component';
import { selectRestaurantIds } from '../../redux/entities/restaurant/selectors';
import { useDispatch } from 'react-redux';
import { getRestaurants } from '../../redux/entities/restaurant/thunks/getRestaurants.js';
import { useEffect } from 'react';
import { getUsers } from '../../redux/entities/user/thunks/getUsers.js';


export const RestaurantTabsContainer = ({ onTabClick, activeTab }) => {

    const restaurantIds = useSelector(selectRestaurantIds);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurants());
        dispatch(getUsers());
    }, [dispatch]);

    if (!restaurantIds) return;

    return <RestaurantTabs 
            ids={restaurantIds}
            onTabClick={onTabClick} 
            activeTab={activeTab}
             />

};