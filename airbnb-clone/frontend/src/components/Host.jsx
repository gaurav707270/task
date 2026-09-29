import { useSelector } from "react-redux";

function Host() {

    const { listing } = useSelector((state) => state.listing);

    if (!listing) {
        return null;
    }

    return (
        <div className="py-5">

            <h2 className="h4 fw-semibold mb-4">
                Meet your host
            </h2>

            <div className="d-flex align-items-center gap-3 mb-4">

                <div
                    className="rounded-circle bg-dark text-white d-flex justify-content-center align-items-center"
                    style={{
                        width: "64px",
                        height: "64px"
                    }}
                >
                    {listing.host.charAt(0)}
                </div>

                <div>

                    <h5 className="fw-semibold mb-1">
                        {listing.host}
                    </h5>

                    <p className="text-secondary mb-0">
                        Host on Airbnb
                    </p>

                </div>

            </div>

            <div className="row">

                <div className="col-8">

                    <p>
                        Your host is ready to help make your stay
                        comfortable and enjoyable.
                    </p>

                    <button className="btn btn-outline-dark px-4 py-3">
                        Contact host
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Host;
