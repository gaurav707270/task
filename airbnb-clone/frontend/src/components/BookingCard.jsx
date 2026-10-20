import { useSelector } from "react-redux";

function BookingCard() {

    // const { listing } = useSelector((state) => state.listing);

    // if (!listing) {
        return null;
    }

    return (
        <div
            className="border rounded-4 p-4 shadow-sm"
            style={{
                position: "sticky",
                top: "100px"
            }}
        >

            <div className="d-flex justify-content-between mb-4">

                <div>
                    <span className="fs-5 fw-semibold">
                        ₹{listing.price}
                    </span>

                    <span className="text-secondary">
                        {" "}night
                    </span>
                </div>

                <span>
                    ★ {listing.rating}
                </span>

            </div>

            <div className="border rounded-3 overflow-hidden">

                <div className="row g-0">

                    <div className="col-6 border-end p-3">

                        <small className="fw-bold d-block">
                            CHECK-IN
                        </small>

                        <span className="text-secondary">
                            Add date
                        </span>

                    </div>

                    <div className="col-6 p-3">

                        <small className="fw-bold d-block">
                            CHECKOUT
                        </small>

                        <span className="text-secondary">
                            Add date
                        </span>

                    </div>

                </div>

                <div className="border-top p-3">

                    <small className="fw-bold d-block">
                        GUESTS
                    </small>

                    <span className="text-secondary">
                        {listing.guests} guests
                    </span>

                </div>

            </div>

            <button className="btn btn-danger w-100 mt-4 py-3 fw-semibold">
                Reserve
            </button>

            <p className="text-center text-secondary small mt-3 mb-0">
                You won't be charged yet
            </p>

        </div>
    );
}

export default BookingCard;
