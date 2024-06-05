import { Button } from "../button/component";

export const RestaurantTab = ({ restaurant, onTabClick, activeTab }) => {

    return <Button 
        onClick={() => onTabClick(restaurant?.id)} 
        disabled={activeTab == restaurant?.id} >
            {restaurant?.name}
    </Button>;
};