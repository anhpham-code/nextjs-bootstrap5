export default function Footer() {
    return (
        <footer className="bg-body-tertiary text-center">
            <div className="container p-4">
                <section>
                    <div className="row">
                        {["113", "111", "112", "114", "115", "116"].map((id) => (
                            <div key={id} className="col-lg-2 col-md-12 mb-4 mb-md-0">
                                <div
                                    data-mdb-ripple-init
                                    className="bg-image hover-overlay shadow-1-strong rounded"
                                    data-ripple-color="light"
                                >
                                    <img
                                        src={`https://mdbcdn.b-cdn.net/img/new/fluid/city/${id}.webp`}
                                        className="w-100"
                                        alt={`City ${id}`}
                                    />
                                    <a href="#!">
                                        <div
                                            className="mask"
                                            style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
                                        ></div>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
                © Anh
                {/* <a className="text-body" href="https://mdbootstrap.com/">
                    MDBootstrap.com
                </a> */}
            </div>
        </footer>
    );
}
