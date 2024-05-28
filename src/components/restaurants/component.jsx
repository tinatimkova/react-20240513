import { useState } from 'react';
import { Restaurant } from '../restaurant/component.jsx';
import { RestaurantTab } from '../restaurantTab/component.jsx';

export const Restaurants = ( { restaurants } ) => {

    const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]?.id);

    return (
        <div>
             {restaurants.map(restaurant => 
                <RestaurantTab 
                restaurant={restaurant} 
                onTabClick={setActiveRestaurant} 
                activeTab={activeRestaurant} />
              )}
                <Restaurant restaurant={
                restaurants.find(restaurant => restaurant?.id == activeRestaurant)
              } /> 
        </div>
    );
}