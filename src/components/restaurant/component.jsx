import { Menu } from '../menu/component.jsx';
import { Reviews } from '../reviews/component.jsx';

export const Restaurant = ({ restaurant }) => {
    return (
        <div>
            <h2>{restaurant.name}</h2>
            <h3>Menu</h3>
            <Menu dishes={restaurant.menu} />
            <h3>Reviews</h3>
            <Reviews reviews={restaurant.reviews}/>
        </div>
    );
}