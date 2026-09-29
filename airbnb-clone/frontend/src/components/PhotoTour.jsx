import { useDispatch, useSelector } from "react-redux";
import {
    closePhotoTour,
    openLightbox
} from "../redux/slices/listingSlice";

function PhotoTour() {

    const dispatch = useDispatch();

    const {
        listing,
        showPhotoTour
    } = useSelector((state) => state.listing);

    if (!showPhotoTour || !listing) {
        return null;
    }

    return (
        <div
            className="position-fixed top-0 start-0 w-100 h-100 bg-white"
            style={{ zIndex: 1050 }}
        >

            {/* Header */}

            <div className="container py-3">

                <button
                    className="btn btn-light rounded-circle"
                    onClick={() => dispatch(closePhotoTour())}
                    aria-label="Close photo tour"
                >
                    ✕
                </button>

            </div>

            {/* Photos */}

            <div
                className="container overflow-auto"
                style={{ height: "calc(100vh - 80px)" }}
            >

                <div className="row g-2">

                    {listing.photos.map((photo, index) => (

                        <div
                            className="col-6"
                            key={photo.id}
                        >

                            <button
                                className="border-0 p-0 w-100 bg-white"
                                onClick={() => dispatch(openLightbox(index))}
                            >

                                <img
                                    src={photo.image}
                                    alt={`Property ${index + 1}`}
                                    className="w-100"
                                    style={{
                                        height: "400px",
                                        objectFit: "cover"
                                    }}
                                />

                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </div>
    );
}

export default PhotoTour;