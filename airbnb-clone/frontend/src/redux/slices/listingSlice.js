import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchListing = createAsyncThunk(
    "listing/fetchListing",
    async (_, thunkAPI) => {

        try {

            const response = await axios.get(
                "http://localhost:3000/api/listing"
            );

            return response.data.data;

        } catch (error) {

            return thunkAPI.rejectWithValue(
                error.response?.data?.message ||
                error.message
            );
        }
    }
);

const initialState = {
    listing: null,
    loading: false,
    error: null,

    currentPhoto: 0,

    showPhotoTour: false,
    showLightbox: false
};

const listingSlice = createSlice({
    name: "listing",

    initialState,

    reducers: {

        openPhotoTour: (state) => {
            state.showPhotoTour = true;
        },

        closePhotoTour: (state) => {
            state.showPhotoTour = false;
        },

        openLightbox: (state, action) => {
            state.currentPhoto = action.payload;
            state.showLightbox = true;
        },

        closeLightbox: (state) => {
            state.showLightbox = false;
        },

        nextPhoto: (state) => {

            if (state.listing) {

                state.currentPhoto =
                    (state.currentPhoto + 1) %
                    state.listing.photos.length;
            }
        },

        previousPhoto: (state) => {

            if (state.listing) {

                state.currentPhoto =
                    (state.currentPhoto - 1 +
                        state.listing.photos.length) %
                    state.listing.photos.length;
            }
        }
    },

    extraReducers: (builder) => {

        builder

            .addCase(fetchListing.pending, (state) => {

                state.loading = true;
                state.error = null;
            })

            .addCase(fetchListing.fulfilled, (state, action) => {

                state.loading = false;
                state.listing = action.payload;
            })

            .addCase(fetchListing.rejected, (state, action) => {

                state.loading = false;
                state.error = action.payload;
            });
    }
});

export const {
    openPhotoTour,
    closePhotoTour,
    openLightbox,
    closeLightbox,
    nextPhoto,
    previousPhoto
} = listingSlice.actions;

export default listingSlice.reducer;