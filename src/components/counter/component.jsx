import { useEffect, useContext } from 'react';
import { ThemeContext } from '../../contexts/theme';

export const Counter = ({count, increment, decrement}) => {

    const { darkTheme } = useContext(ThemeContext);

    useEffect(() => {
        increment();
        decrement();
    }, [increment, decrement]);

    return (
        <div>
            <button onClick={decrement} style={{backgroundColor: darkTheme ? 'grey' : null}}>-</button>
                {count}
            <button onClick={increment} style={{backgroundColor: darkTheme ? 'grey' : null}}>+</button>
        </div>);
};