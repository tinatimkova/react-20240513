import { useEffect } from 'react';
import { Button } from '../button/component'; 

export const Counter = ({count, increment, decrement}) => {

    useEffect(() => {
        increment();
        decrement();
    }, [increment, decrement]);

    return (
        <div>
            <Button onClick={decrement}>-</Button>
                {count}
            <Button onClick={increment}>+</Button>
        </div>);
};