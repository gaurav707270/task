function Header() {

    return (
        <header className="border-bottom bg-white">
            <div className="container py-3">

                <div className="row align-items-center">

                    <div className="col-3">
                        <h3 className="text-danger fw-bold mb-0">
                            airbnb
                        </h3>
                    </div>

                    <div className="col-6">

                        <div className="border rounded-pill p-2 d-flex align-items-center shadow-sm">

                            <button className="btn btn-sm fw-semibold flex-fill">
                                Anywhere
                            </button>

                            <div className="vr"></div>

                            <button className="btn btn-sm fw-semibold flex-fill">
                                Any week
                            </button>

                            <div className="vr"></div>

                            <button className="btn btn-sm text-secondary flex-fill">
                                Add guests
                            </button>

                            <button className="btn btn-danger rounded-circle">
                                🔍
                            </button>

                        </div>

                    </div>

                    <div className="col-3 d-flex justify-content-end align-items-center gap-2">

                        <button className="btn btn-light">
                            Airbnb your home
                        </button>

                        <button className="btn btn-light">
                            🌐
                        </button>

                        <button className="btn btn-outline-secondary rounded-pill">
                            ☰ 👤
                        </button>

                    </div>

                </div>

            </div>
        </header>
    );
}

export default Header;