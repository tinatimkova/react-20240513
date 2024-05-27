import { Menu } from '../menu/component.jsx';
import { Reviews } from '../reviews/component.jsx';

export const Restaurant = ({ restaurant }) => {

    const { name, menu, reviews } = restaurant;

    return (
        <div>
            <h2>{name || 'Unknown'}</h2>
            {!!menu?.length && <Menu dishes={menu} />}
            {!!reviews?.length && <Reviews reviews={reviews}/>}
        </div>
    );
}