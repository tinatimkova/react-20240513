import { Counter } from '../counter/component';

export const Dish = ( { dish } ) => {

    const { name, ingredients, price } = dish;

    return (
        <div>
            <Counter />
            <span>{name}: {ingredients.join(", ")} - ${price}</span>
        </div>
        );
}