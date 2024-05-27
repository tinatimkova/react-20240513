export const Tab = ({ restaurant, setActive }) => {

    return <button onClick={() => setActive(restaurant?.id)}>{restaurant?.name}</button>;
};