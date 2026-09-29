import { configureStore } from "@reduxjs/toolkit";
import listingReducer from "./slices/listingSlice";

const store = configureStore({
    reducer: {
        listing: listingReducer
    }
});

export default store;