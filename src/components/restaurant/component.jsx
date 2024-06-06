import { Menu } from '../menu/component.jsx';
import { Reviews } from '../reviews/component.jsx';
import { useSelector } from 'react-redux';

export const Restaurant = ({ restaurantId }) => {

    const {name , menu, reviews} = useSelector(state => state.restaurant.entities[restaurantId]);

    return (
        <div>
            <h2>{name || 'Unknown'}</h2>
            {!!menu?.length && <Menu dishes={menu} />}
            {!!reviews?.length && <Reviews reviews={reviews}/>}
        </div>
    );
}