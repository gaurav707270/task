import Header from "../components/Header";
import ListingHeader from "../components/ListingHeader";
import HeroGallery from "../components/HeroGallery";
import ListingDetails from "../components/ListingDetails";

function ListingPage() {

    return (
        <>
            <Header />

            <main className="container py-4">

                <ListingHeader />

                <HeroGallery />

                <ListingDetails />

            </main>
        </>
    );
}

export default ListingPage;