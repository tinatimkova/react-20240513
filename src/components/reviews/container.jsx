import { useDispatch, useSelector } from "react-redux";
import { Reviews } from "./component"
import { getReviewsByRestaurantId } from "../../redux/entities/review/thunks/getReviewsByRestaurantId";
import { selectRestaurantReviewIds } from "../../redux/entities/restaurant/selectors";
import { useEffect } from "react";

export const ReviewsContainer = ({ restaurantId }) => {

    const dispatch = useDispatch();
    const reviewIds = useSelector(state => selectRestaurantReviewIds(state, restaurantId));

    useEffect(() => {
        dispatch(getReviewsByRestaurantId({ restaurantId: restaurantId }));
    }, [dispatch, restaurantId]);

    return (reviewIds?.length > 0 && <Reviews reviewIds={reviewIds}/>);
};