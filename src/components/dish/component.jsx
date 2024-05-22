import { useState } from 'react';

export const Dish = ( { dish } ) => {

    const [count, setCount] = useState(0);

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const increment = () => {
        if (count < 5) {
            setCount(count+1);
        }
    }

    return (
        <div>
            <button onClick={decrement}>-</button>
            {count}
            <button onClick={increment}>+</button>
            <span>{dish.name}: {dish.ingredients.join(", ")} - ${dish.price}</span>
        </div>
        );
}