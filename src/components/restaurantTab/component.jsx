import { useSelector } from "react-redux";
import { Button } from "../button/component";

export const RestaurantTab = ({ restaurantId, onTabClick, activeTab }) => {

    const { name } = useSelector(state => state.restaurant.entities[restaurantId]);

    return <Button 
        onClick={() => onTabClick(restaurantId)} 
        disabled={activeTab == restaurantId} >
            {name}
    </Button>;
};