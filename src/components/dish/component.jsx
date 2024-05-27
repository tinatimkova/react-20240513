import { Counter } from '../counter/component';
import { useCount } from '../../hooks/useCount';

export const Dish = ( { dish } ) => {

    const {count, decrement, increment} = useCount();

    const { name, ingredients, price } = dish;

    return (
        <div>
            <Counter count={count} decrement={decrement} increment={increment} />
            <span>{name}: {ingredients?.join(", ")} - ${price}</span>
        </div>
        );
}