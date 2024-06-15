import { Restaurant } from "./component";
import { useSelector } from 'react-redux';
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";

export const RestaurantContainer = ({ restaurantId }) => {

    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));

    if (!restaurant) {
        return <div>No restaurant</div>
    }

    return <Restaurant  restaurant={restaurant} />;
};