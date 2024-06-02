import { useEffect, useContext } from 'react';
import { ThemeContext } from '../../contexts/theme';

export const Counter = ({count, increment, decrement}) => {

    const theme = useContext(ThemeContext);

    useEffect(() => {
        increment();
        decrement();
    }, [increment, decrement]);

    return (
        <div>
            <button onClick={decrement} style={theme}>-</button>
                {count}
            <button onClick={increment} style={theme}>+</button>
        </div>);
};