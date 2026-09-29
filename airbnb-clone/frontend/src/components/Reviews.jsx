import { useSelector } from "react-redux";

function Reviews() {

    const { listing } = useSelector((state) => state.listing);

    if (!listing) {
        return null;
    }

    return (
        <div className="py-5 border-bottom">

            <h2 className="h4 fw-semibold mb-4">

                ★ {listing.rating} · {listing.reviews} reviews

            </h2>

            <div className="row">

                <div className="col-6 border-end">

                    <div className="d-flex justify-content-between mb-3">

                        <span>Cleanliness</span>

                        <strong>4.9</strong>

                    </div>

                    <div className="d-flex justify-content-between mb-3">

                        <span>Accuracy</span>

                        <strong>4.9</strong>

                    </div>

                    <div className="d-flex justify-content-between">

                        <span>Check-in</span>

                        <strong>5.0</strong>

                    </div>

                </div>

                <div className="col-6 ps-5">

                    <div className="d-flex justify-content-between mb-3">

                        <span>Communication</span>

                        <strong>4.9</strong>

                    </div>

                    <div className="d-flex justify-content-between mb-3">

                        <span>Location</span>

                        <strong>4.8</strong>

                    </div>

                    <div className="d-flex justify-content-between">

                        <span>Value</span>

                        <strong>4.8</strong>

                    </div>

                </div>

            </div>

            <div className="row mt-5">

                <div className="col-6">

                    <div className="mb-4">

                        <h6 className="fw-semibold">
                            Rahul
                        </h6>

                        <small className="text-secondary">
                            2 weeks ago
                        </small>

                        <p className="mt-2">
                            Amazing place. Very clean and comfortable.
                        </p>

                    </div>

                </div>

                <div className="col-6">

                    <div className="mb-4">

                        <h6 className="fw-semibold">
                            Priya
                        </h6>

                        <small className="text-secondary">
                            1 month ago
                        </small>

                        <p className="mt-2">
                            Great location and beautiful property.
                        </p>

                    </div>

                </div>

            </div>

            <button className="btn btn-outline-dark px-4 py-3">
                Show all reviews
            </button>

        </div>
    );
}

export default Reviews;