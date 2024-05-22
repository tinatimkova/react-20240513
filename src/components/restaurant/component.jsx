import { Menu } from '../menu/component.jsx';
import { Reviews } from '../reviews/component.jsx';

export const Restaurant = ({ restaurant }) => {

    const { name, menu, reviews } = restaurant;

    return (
        <div>
            {name ? <h2>{name}</h2> : <h2>Unknown</h2>}
            {!!menu?.length && <Menu dishes={menu} />}
            {!!reviews?.length && <Reviews reviews={reviews}/>}
        </div>
    );
}