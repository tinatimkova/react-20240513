import { useEffect, useContext } from 'react';
import { ThemeContext } from '../../contexts/theme';

export const Counter = ({count, increment, decrement}) => {

    const { isDarkTheme } = useContext(ThemeContext);

    useEffect(() => {
        increment();
        decrement();
    }, [increment, decrement]);

    return (
        <div>
            <button onClick={decrement} style={{backgroundColor: isDarkTheme ? 'grey' : null}}>-</button>
                {count}
            <button onClick={increment} style={{backgroundColor: isDarkTheme ? 'grey' : null}}>+</button>
        </div>);
};