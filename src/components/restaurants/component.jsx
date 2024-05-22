import { useState } from 'react';
import { Restaurant } from '../restaurant/component.jsx';

export const Restaurants = ( { restaurants } ) => {

    const [active, setActive] = useState(0);

    return (
        <main>
            {restaurants.map((restaurant, index) => 
            !!restaurant && 
            <Restaurant 
            restaurant={restaurant} 
            index={index} 
            setActive={setActive} 
            active={active} /> 
          )}
        </main>
    );
}