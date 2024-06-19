import { Restaurant } from "./component";
import { useSelector } from 'react-redux';
import { selectRestaurantById } from "../../redux/entities/restaurant/selectors";
import { useDispatch } from "react-redux";
import { getDishesByRestaurantId } from "../../redux/entities/dish/thunks/getDishesByRestaurantId";
import { useEffect } from "react";
import { getReviewsByRestaurantId } from "../../redux/entities/review/thunks/getReviewsByRestaurantId";

export const RestaurantContainer = ({ restaurantId }) => {

    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId));

    if (!restaurant) {
        return <div>No restaurant</div>
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDishesByRestaurantId(restaurantId) );
        dispatch(getReviewsByRestaurantId(restaurantId));
    }, [dispatch, restaurantId]);

    return <Restaurant  restaurant={restaurant} />;
};