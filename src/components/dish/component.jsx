import { Counter } from '../counter/component';
import { useCount } from '../../hooks/useCount';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.js';

export const Dish = ( { dish } ) => {

    const {count, decrement, increment} = useCount();

    const { name, ingredients, price } = dish;
    const [ currentUser ] = useContext( UserContext);

    return (
        <div>
            {currentUser && <Counter count={count} decrement={decrement} increment={increment} />}
            <span>{name}: {ingredients?.join(", ")} - ${price}</span>
        </div>
        );
}