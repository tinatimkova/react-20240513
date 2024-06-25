import { useDispatch, useSelector } from "react-redux";
import { Menu } from "./component";
import { selectRestaurantDishIds } from "../../redux/entities/restaurant/selectors";
import { useEffect } from "react";
import { getDishesByRestaurantId } from "../../redux/entities/dish/thunks/getDishesByRestaurantId";

export const MenuContainer = ({ restaurantId }) => {

    const dispatch = useDispatch();
    const dishIds = useSelector(state => selectRestaurantDishIds(state, restaurantId));

    useEffect(() => {
        dispatch(getDishesByRestaurantId({restaurantId : restaurantId }) );
    }, [dispatch, restaurantId]);

    return (dishIds?.length > 0 && <Menu dishIds={dishIds} />);
};