import { useEffect } from 'react';

export const Counter = ({count, increment, decrement}) => {

    useEffect(() => {
        increment();
        decrement();
    }, [increment, decrement]);

    return (
        <div>
            <button onClick={decrement}>-</button>
                {count}
            <button onClick={increment}>+</button>
        </div>);
};