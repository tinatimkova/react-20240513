import { DishContainer } from '../dish/container';

export const Menu = ( { dishes } ) => {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                {dishes.map(dish => (
                    !!dish && <li><DishContainer dishId={dish} /></li>
                ))}
            </ul>
        </div>
    )
}