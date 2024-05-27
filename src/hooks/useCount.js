import { useState, useCallback } from 'react';

export const useCount = ({initialCount = 0, max = 6, min = 0} = {}) => {
    const [count, setCount] = useState(initialCount);

    const decrement = useCallback(() => {
        setCount(currentCount => currentCount == min ? currentCount : currentCount - 1)
    }, [])

    const increment = useCallback(() => {
        setCount(currentCount => currentCount == max ? currentCount : currentCount + 1)
    }, [])

    return {count, decrement, increment};
}