import { MenuContainer } from '../menu/container.jsx';
import { ReviewsContainer } from '../reviews/container.jsx';

export const Restaurant = ({ restaurant }) => {

    const { name, id } = restaurant;

    return (
        <div>
            <h2>{name || 'Unknown'}</h2>
            <MenuContainer restaurantId={ id } />
            <ReviewsContainer restaurantId={ id } />
        </div>
    );
}