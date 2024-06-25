import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantIds } from "../selectors";

export const getRestaurants = createAsyncThunk(
    "restaurant/getRestaurants", 
    async (/* arg, { getState, dispatch, rejectWithValue, requestId } */) => {
        const response = await fetch("http://localhost:3001/api/restaurants");

        return response.json();
    }, 
    {
        condition: ({ forceRefetch = false } = {}, { getState }) => {
            forceRefetch || !selectRestaurantIds(getState())?.length;
        }
    }
);