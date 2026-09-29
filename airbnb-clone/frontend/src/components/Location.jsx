import { useSelector } from "react-redux";

function Location() {

    const { listing } = useSelector((state) => state.listing);

    if (!listing) {
        return null;
    }

    return (
        <div className="py-5 border-bottom">

            <h2 className="h4 fw-semibold mb-4">
                Where you'll be
            </h2>

            <div
                className="bg-secondary-subtle rounded-4 d-flex justify-content-center align-items-center"
                style={{ height: "350px" }}
            >
                <div className="text-center">

                    <div className="fs-1 mb-2">
                        📍
                    </div>

                    <h5 className="fw-semibold">
                        {listing.location}
                    </h5>

                    <p className="text-secondary mb-0">
                        Location map
                    </p>

                </div>
            </div>

        </div>
    );
}

export default Location;