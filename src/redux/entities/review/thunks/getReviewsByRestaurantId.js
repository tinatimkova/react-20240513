import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewIds } from "./../selectors";
import { selectRestaurantReviewIds } from "./../../restaurant/selectors";

export const getReviewsByRestaurantId = createAsyncThunk(
    'review/getReviewsByRestaurantId',
    async(restaurantId) => {
        const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);

        return response.json();
    },
    {
        condition: (restaurantId, { getState }) => {
            const loadedReviewIds = selectReviewIds(getState());
            const restaurantReviewIds = selectRestaurantReviewIds(getState(), restaurantId);

            return restaurantReviewIds.some(reviewId => !loadedReviewIds.includes(reviewId));
        }
    }
);