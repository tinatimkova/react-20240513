import { Dish } from '../dish/component.jsx';

export const Menu = ( { dishes } ) => {
    return (
        <ul>
            {dishes.map(dish => (
                <li><Dish dish={dish} /></li>
            ))}
        </ul>
    )
}