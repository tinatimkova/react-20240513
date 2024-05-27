export const RestaurantTab = ({ restaurant, onTabClick, activeTab }) => {

    return <button onClick={() => onTabClick(restaurant?.id)} disabled={activeTab == restaurant?.id}>{restaurant?.name}</button>;
};