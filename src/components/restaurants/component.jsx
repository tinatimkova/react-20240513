import { Restaurant } from '../restaurant/component.jsx';

export const Restaurants = ( { restaurants } ) => {

    return (
        <main>
            {restaurants.map(restaurant => 
            !!restaurant && <Restaurant restaurant={restaurant} />
          )}
        </main>
    );
}