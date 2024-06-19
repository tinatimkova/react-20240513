import { useState } from 'react';
import { Restaurant } from '../restaurant/component.jsx';
import { RestaurantTab } from '../restaurantTab/component.jsx';
import { useSelector } from 'react-redux';

export const Restaurants = () => {

    const restaurantIds = useSelector(state => state.restaurant.ids);
    const [activeRestaurant, setActiveRestaurant] = useState(restaurantIds[0]);

    return (
        <div>
             {!!restaurantIds?.length && restaurantIds.map(restaurantId => 
                <RestaurantTab 
                restaurantId={restaurantId} 
                onTabClick={setActiveRestaurant} 
                activeTab={activeRestaurant}
                 />
              )}
                <Restaurant restaurantId={
                restaurantIds.find(restaurantId => restaurantId == activeRestaurant)
              } />
        </div>
    );
}