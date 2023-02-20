import "./services.css"
const Services = () => {
    return (
        <>
            <div>
                <h1 className="text-center p-4 services-main-head">Our Services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-lg-4">
                            <div className="services-container text-center">
                                <i class="fa-solid fa-house-medical services-logo"></i>
                                <h5 className="services-head">Medical</h5>

                                <p className="services-desc">We can take care of the medical examination process for welding workers on your behalf to ensure that you get candidates who are fit and qualified for the job.</p>

                            </div>

                        </div>
                        <div className="col-sm-4 col-lg-4">
                            <div className="services-container text-center">
                                <i class="fa-solid fa-file-signature  services-logo"></i>
                                <h5 className="services-head">Contract</h5>

                                <p className="services-desc">We offer contract-based employment, which allows both employers and employees to customize their working relationship.</p>



                            </div>

                        </div>
                        <div className="col-sm-4 col-lg-4">
                            <div className="services-container text-center">
                                <i class="fa-solid fa-certificate services-logo"></i>
                                <h5 className="services-head">PVC</h5>
                                <p className="services-desc">We offer police verification certificate services to help ensure that your employees have passed the necessary background checks.</p>

                            </div>
                        </div>
                        <div className="col-sm-4 col-lg-4">
                            <div className="services-container my-4 text-center">
                                <i class="fa-solid fa-building-columns services-logo"></i>
                                <h5 className="services-head"> Training</h5>

                                <p className="services-desc">We offer police verification certificate services to help ensure that your employees have passed the necessary background checks.</p>

                            </div>

                        </div>
                        <div className="col-sm-4 col-lg-4">
                            <div className="services-container my-4 text-center">
                                <i class="fa-regular fa-handshake services-logo"></i>
                                <h5 className="services-head">Consultancy</h5>

                                <p className="services-desc">We offer police verification certificate services to help ensure that your employees have passed the necessary background checks.</p>

                            </div>

                        </div>
                        <div className="col-sm-4 col-lg-4">
                            <div className="services-container my-4 text-center">
                                <i class="fa-solid fa-file-medical services-logo"></i>
                                <h5 className="services-head">Insurance</h5>

                                <p className="services-desc">We offer police verification certificate services to help ensure that your employees have passed the necessary background checks.</p>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Services