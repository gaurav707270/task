import Listing from "../models/listingModel.js";

export const getListing = async (req, res) => {

    try {

        const listing = await Listing.findOne();

        if (!listing) {
            return res.status(404).json({
                status: false,
                message: "Listing not found"
            });
        }

        return res.status(200).json({
            status: true,
            message: "Listing fetched successfully",
            data: listing
        });

    } catch (error) {

        return res.status(500).json({
            status: false,
            message: "Failed to fetch listing",
            error: error.message
        });
    }
};
