import { useState } from 'react';
import { RestaurantTabsContainer } from '../restaurantTabs/container.jsx';
import { RestaurantContainer } from '../restaurant/container.jsx';

export const Restaurants = () => {

    const [activeRestaurantId, setActiveRestaurantId] = useState();

    return (
        <div>
                <RestaurantTabsContainer
                activeTab={activeRestaurantId}
                onTabClick={setActiveRestaurantId} />
                {activeRestaurantId && <RestaurantContainer restaurantId={activeRestaurantId} />}
        </div>
    );
}