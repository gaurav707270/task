import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    closeLightbox,
    nextPhoto,
    previousPhoto
} from "../redux/slices/listingSlice";

function Lightbox() {

    const dispatch = useDispatch();

    const closeButtonRef = useRef(null);
    const previousButtonRef = useRef(null);
    const nextButtonRef = useRef(null);

    const {
        listing,
        currentPhoto,
        showLightbox
    } = useSelector((state) => state.listing);

    useEffect(() => {

        if (!showLightbox) {
            return;
        }

        closeButtonRef.current?.focus();

        function handleKeyboard(event) {

            if (event.key === "Escape") {
                dispatch(closeLightbox());
            }

            if (event.key === "ArrowRight") {
                event.preventDefault();
                dispatch(nextPhoto());
            }

            if (event.key === "ArrowLeft") {
                event.preventDefault();
                dispatch(previousPhoto());
            }

        }

        document.addEventListener(
            "keydown",
            handleKeyboard
        );

        return () => {
            document.removeEventListener(
                "keydown",
                handleKeyboard
            );
        };

    }, [showLightbox, dispatch]);

    if (!showLightbox || !listing) {
        return null;
    }

    const photo = listing.photos[currentPhoto];

    return (
        <div
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark"
            style={{ zIndex: 1100 }}
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
        >

            {/* Top Bar */}

            <div className="position-absolute top-0 start-0 w-100 p-4 d-flex justify-content-between align-items-center">

                <button
                    ref={closeButtonRef}
                    className="btn btn-light rounded-circle"
                    onClick={() => dispatch(closeLightbox())}
                    aria-label="Close photo viewer"
                >
                    ✕
                </button>

                <span className="text-white">
                    {currentPhoto + 1} / {listing.photos.length}
                </span>

            </div>

            {/* Previous Button */}

            <button
                ref={previousButtonRef}
                className="position-absolute top-50 start-0 translate-middle-y ms-4 btn btn-light rounded-circle"
                onClick={() => dispatch(previousPhoto())}
                aria-label="Previous photo"
            >
                ←
            </button>

            {/* Image */}

            <div className="w-100 h-100 d-flex justify-content-center align-items-center p-5">

                <img
                    src={photo.image}
                    alt={`Property photo ${currentPhoto + 1}`}
                    className="img-fluid"
                    style={{
                        maxHeight: "90vh",
                        maxWidth: "90vw",
                        objectFit: "contain"
                    }}
                />

            </div>

            {/* Next Button */}

            <button
                ref={nextButtonRef}
                className="position-absolute top-50 end-0 translate-middle-y me-4 btn btn-light rounded-circle"
                onClick={() => dispatch(nextPhoto())}
                aria-label="Next photo"
            >
                →
            </button>

        </div>
    );
}

export default Lightbox;