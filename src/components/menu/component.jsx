import { Dish } from '../dish/component.jsx';

export const Menu = ( { dishes } ) => {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                {dishes.map(dish => (
                    !!dish && <li><Dish dishId={dish} /></li>
                ))}
            </ul>
        </div>
    )
}