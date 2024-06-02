import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme';

export const RestaurantTab = ({ restaurant, onTabClick, activeTab }) => {

    const { isDarkTheme} = useContext(ThemeContext);


    return <button 
        onClick={() => onTabClick(restaurant?.id)} 
        disabled={activeTab == restaurant?.id} 
        style={{backgroundColor: isDarkTheme ? 'grey' : null}}>
            {restaurant?.name}
    </button>;
};