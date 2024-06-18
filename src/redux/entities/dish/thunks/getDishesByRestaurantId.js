import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishIds } from "../selectors";
import { selectRestaurantDishIds } from "../../restaurant/selectors";

export const getDishesByRestaurantId = createAsyncThunk(
    "dish/getDishesByRestaurantId",
    async(restaurantId) => {
        const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);

        return response.json();
    },
    {
        condition: (restaurantId, { getState }) => {
           const loadedDishIds = selectDishIds(getState());
           const restaurantDishIds = selectRestaurantDishIds(getState(), restaurantId);

           return restaurantDishIds.some(dishId => !loadedDishIds .includes(dishId));
        }
    }
)