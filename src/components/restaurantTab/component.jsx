import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme';

export const RestaurantTab = ({ restaurant, onTabClick, activeTab }) => {

    const { darkTheme } = useContext(ThemeContext);

    return <button 
        onClick={() => onTabClick(restaurant?.id)} 
        disabled={activeTab == restaurant?.id} 
        style={{backgroundColor: darkTheme ? 'grey' : null}}>
            {restaurant?.name}
    </button>;
};