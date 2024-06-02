import { useState } from 'react';
import { Restaurant } from '../restaurant/component.jsx';
import { RestaurantTab } from '../restaurantTab/component.jsx';


export const Restaurants = ( { restaurants, theme } ) => {

    const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0]?.id);

    return (
        <div>
             {restaurants.map(restaurant => 
                <RestaurantTab 
                restaurant={restaurant} 
                onTabClick={setActiveRestaurant} 
                activeTab={activeRestaurant}
                theme={theme} />
              )}
                <Restaurant restaurant={
                restaurants.find(restaurant => restaurant?.id == activeRestaurant)
              } /> 
                <Restaurant restaurant={restaurants[0]} />
                <Restaurant restaurant={restaurants[0]} />
                <Restaurant restaurant={restaurants[0]} />
                <Restaurant restaurant={restaurants[0]} />
                <Restaurant restaurant={restaurants[0]} />
        </div>
    );
}