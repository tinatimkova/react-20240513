import { useState } from 'react';
import { Restaurant } from '../restaurant/component.jsx';
import { Tabs } from '../tabs/component.jsx';

export const Restaurants = ( { restaurants } ) => {

    const [active, setActive] = useState(restaurants[0].id);

    return (
        <div>
             <Tabs restaurants={restaurants} setActive={setActive} />
             <Restaurant restaurant={
              restaurants.find(restaurant => restaurant.id == active)
              } /> 
        </div>
    );
}