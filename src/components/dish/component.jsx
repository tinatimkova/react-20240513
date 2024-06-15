import { Counter } from '../counter/component';
import { useCount } from '../../hooks/useCount';
import { useUser } from '../../contexts/user/hooks';


export const Dish = ( { dish } ) => {

    const { name, ingredients, price } = dish;

    const {count, decrement, increment} = useCount();
    const { user } = useUser();

    return (
        <div>
            { user && <Counter count={count} decrement={decrement} increment={increment} />}
            <span>{name}: {ingredients?.join(", ")} - ${price}</span>
        </div>
        );
}