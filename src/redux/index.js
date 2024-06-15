import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { RestaurantSlice } from "./entities/restaurant/restaurant";
import { UserSlice } from "./entities/user/user";
import { ReviewSlice } from "./entities/review/review";
import { DishSlice } from "./entities/dish/dish";

export const store = configureStore({
    reducer: combineSlices(RestaurantSlice, UserSlice, ReviewSlice, DishSlice), 
});