import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./thunks/getRestaurants";

const entityAdapter = createEntityAdapter(
    // {
    //     selectId: (entity) => entity.restaurantId, if the field containing id has name other than 'id',
    //     sortComparer
    // }
);

export const RestaurantSlice = createSlice({
    name: 'restaurant',
    initialState: entityAdapter.getInitialState(),
    extraReducers: (builder) => {
        builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
            entityAdapter.setAll(state, payload);
        })
    }
});