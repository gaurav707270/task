import { useSelector } from "react-redux";

function Amenities() {

    const { listing } = useSelector((state) => state.listing);

    if (!listing) {
        return null;
    }

    return (
        <div className="border-bottom py-5">

            <h2 className="h4 fw-semibold mb-4">
                What this place offers
            </h2>

            <div className="row">

                {listing.amenities.map((amenity, index) => (

                    <div
                        className="col-6 mb-4"
                        key={index}
                    >

                        <div className="d-flex align-items-center gap-3">

                            <span className="fs-4">
                                {index % 2 === 0 ? "✓" : "⌂"}
                            </span>

                            <span>
                                {amenity}
                            </span>

                        </div>

                    </div>

                ))}

            </div>

            <button className="btn btn-outline-dark px-4 py-3 mt-2">
                Show all amenities
            </button>

        </div>
    );
}

export default Amenities;