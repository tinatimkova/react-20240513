import { useDispatch } from "react-redux";
import { Restaurants } from "./component"
import { useEffect } from "react";
import { getRestaurants } from "../../redux/entities/restaurant/thunks/getRestaurants";
import { getUsers } from "../../redux/entities/user/thunks/getUsers";

export const RestaurantsContainer = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurants());
        dispatch(getUsers());
    }, [dispatch]);

    return <Restaurants />;
};