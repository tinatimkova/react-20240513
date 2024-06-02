export const RestaurantTab = ({ restaurant, onTabClick, activeTab, theme}) => {

    return <button onClick={() => onTabClick(restaurant?.id)} disabled={activeTab == restaurant?.id} style={theme}>{restaurant?.name}</button>;
};