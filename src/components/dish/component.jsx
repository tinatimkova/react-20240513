import { Counter } from '../counter/component';
import { useCount } from '../../hooks/useCount';
import { useUser } from '../../contexts/user/hooks';
import { useSelector } from 'react-redux';

export const Dish = ( { dishId } ) => {

    const {count, decrement, increment} = useCount();
    const { user } = useUser();

    const { name, ingredients, price } = useSelector(state => state.dish.entities[dishId]);

    return (
        <div>
            { user && <Counter count={count} decrement={decrement} increment={increment} />}
            <span>{name}: {ingredients?.join(", ")} - ${price}</span>
        </div>
        );
}