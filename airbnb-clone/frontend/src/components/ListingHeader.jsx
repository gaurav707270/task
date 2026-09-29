import { useSelector } from "react-redux";

function ListingHeader() {

    const { listing } = useSelector((state) => state.listing);

    if (!listing) {
        return null;
    }

    return (
        <div className="d-flex justify-content-between align-items-center py-4">

            <div>

                <h1 className="h3 fw-semibold mb-2">
                    {listing.title}
                </h1>

                <div className="d-flex gap-2 align-items-center">

                    <span>
                        ★ {listing.rating}
                    </span>

                    <span>·</span>

                    <span className="text-decoration-underline">
                        {listing.reviews} reviews
                    </span>

                    <span>·</span>

                    <span className="text-decoration-underline">
                        {listing.location}
                    </span>

                </div>

            </div>

            <div className="d-flex gap-3">

                <button className="btn btn-link text-dark text-decoration-underline">
                    ↗ Share
                </button>

                <button className="btn btn-link text-dark text-decoration-underline">
                    ♡ Save
                </button>

            </div>

        </div>
    );
}

export default ListingHeader;