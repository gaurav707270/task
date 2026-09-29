import { useSelector } from "react-redux";
import BookingCard from "./BookingCard";
import Amenities from "./Amenities";
import Reviews from "./Reviews";

function ListingDetails() {

    const { listing } = useSelector((state) => state.listing);

    if (!listing) {
        return null;
    }

    return (
        <>

            <div className="row mt-5">

                <div className="col-8">

                    <div className="border-bottom pb-4">

                        <h2 className="h4 fw-semibold">
                            Entire place hosted by {listing.host}
                        </h2>

                        <p className="text-secondary mb-0">
                            {listing.guests} guests · {listing.bedrooms} bedroom ·{" "}
                            {listing.beds} bed · {listing.bathrooms} bathroom
                        </p>

                    </div>

                    <div className="py-4 border-bottom">

                        <h3 className="h5 fw-semibold">
                            About this place
                        </h3>

                        <p className="text-secondary lh-lg">
                            {listing.description}
                        </p>

                        <button className="btn btn-link p-0 text-dark fw-semibold">
                            Show more
                        </button>

                    </div>

                </div>

                <div className="col-4">

                    <BookingCard />

                </div>

            </div>

            <div className="row">

                <div className="col-8">

                    <Amenities />

                    <Reviews />

                </div>

            </div>

        </>
    );
}

export default ListingDetails;