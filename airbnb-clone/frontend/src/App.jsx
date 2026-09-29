import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchListing } from "./redux/slices/listingSlice";

import ListingPage from "./pages/ListingPage";
import PhotoTour from "./components/PhotoTour";
import Lightbox from "./components/Lightbox";

function App() {

    const dispatch = useDispatch();

    const {
        loading,
        error
    } = useSelector((state) => state.listing);

    useEffect(() => {

        dispatch(fetchListing());

    }, [dispatch]);

    if (loading) {

        return (
            <div className="d-flex justify-content-center align-items-center vh-100">

                <div
                    className="spinner-border"
                    role="status"
                >
                </div>

            </div>
        );
    }

    if (error) {

        return (
            <div className="container py-5">

                <div className="alert alert-danger">

                    Failed to load listing: {error}

                </div>

            </div>
        );
    }

    return (
        <>
            <ListingPage />

            <PhotoTour />

            <Lightbox />
        </>
    );
}

export default App;