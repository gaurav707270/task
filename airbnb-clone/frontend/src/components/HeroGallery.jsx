import { useDispatch, useSelector } from "react-redux";
import {
    openPhotoTour,
    openLightbox
} from "../redux/slices/listingSlice";

function HeroGallery() {

    const dispatch = useDispatch();

    const { listing } = useSelector((state) => state.listing);

    if (!listing) {
        return null;
    }

    const photos = listing.photos;

    return (
        <div className="position-relative">

            <div
                className="row g-2"
                style={{ height: "500px" }}
            >

                {/* Main Image */}

                <div className="col-6">

                    <button
                        className="border-0 p-0 w-100 h-100 overflow-hidden"
                        onClick={() => dispatch(openLightbox(0))}
                    >

                        <img
                            src={photos[0].image}
                            alt="Property"
                            className="w-100 h-100 object-fit-cover rounded-start"
                        />

                    </button>

                </div>

                {/* Right Images */}

                <div className="col-3">

                    <div className="row g-2 h-100">

                        <div className="col-12">

                            <button
                                className="border-0 p-0 w-100 h-100 overflow-hidden"
                                onClick={() => dispatch(openLightbox(1))}
                            >

                                <img
                                    src={photos[1].image}
                                    alt="Property"
                                    className="w-100 h-100 object-fit-cover"
                                />

                            </button>

                        </div>

                        <div className="col-12">

                            <button
                                className="border-0 p-0 w-100 h-100 overflow-hidden"
                                onClick={() => dispatch(openLightbox(2))}
                            >

                                <img
                                    src={photos[2].image}
                                    alt="Property"
                                    className="w-100 h-100 object-fit-cover"
                                />

                            </button>

                        </div>

                    </div>

                </div>

                <div className="col-3">

                    <div className="row g-2 h-100">

                        <div className="col-12">

                            <button
                                className="border-0 p-0 w-100 h-100 overflow-hidden"
                                onClick={() => dispatch(openLightbox(3))}
                            >

                                <img
                                    src={photos[3].image}
                                    alt="Property"
                                    className="w-100 h-100 object-fit-cover rounded-top-end"
                                />

                            </button>

                        </div>

                        <div className="col-12 position-relative">

                            <button
                                className="border-0 p-0 w-100 h-100 overflow-hidden"
                                onClick={() => dispatch(openPhotoTour())}
                            >

                                <img
                                    src={photos[4].image}
                                    alt="Property"
                                    className="w-100 h-100 object-fit-cover rounded-bottom-end"
                                />

                                <span
                                    className="position-absolute bottom-0 end-0 m-3 bg-white text-dark px-3 py-2 rounded-3 fw-semibold"
                                >
                                    ▦ Show all photos
                                </span>

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default HeroGallery;