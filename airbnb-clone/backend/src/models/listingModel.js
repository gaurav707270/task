import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        location: {
            type: String,
            required: true
        },

        rating: {
            type: Number,
            default: 0
        },

        reviews: {
            type: Number,
            default: 0
        },

        guests: {
            type: Number,
            required: true
        },

        bedrooms: {
            type: Number,
            required: true
        },

        beds: {
            type: Number,
            required: true
        },

        bathrooms: {
            type: Number,
            required: true
        },

        price: {
            type: Number,
            required: true
        },

        host: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        amenities: [
            {
                type: String
            }
        ],

        photos: [
            {
                id: Number,
                image: String
            }
        ]
    },
    {
        timestamps: true
    }
);

const Listing = mongoose.model(
    "Listing",
    listingSchema
);

export default Listing;