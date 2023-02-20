import "./footer.css";
const Footer = () => {
    return (
        <div className="footer">
            <div className="location">
                <h5>Location</h5>
                <div className="location-sub">
                    <h6 className="my-4"><i class="fa-solid fa-location-dot"></i> 1-4-4, chinna veedhi, purushottapuram,ichapuram, srikakulam, Andhra pradesh,532312</h6>
                    <h6 ><i class="fa-solid fa-location-dot"></i> maddilapalem, visakhapatnam, Andhra pradesh,530003</h6>
                </div>
               
            </div>
            <div className="contact">
                <h5>Contact</h5>
                <div className="contact-sub">
                    <h6 className="my-4"><i class="fa-solid fa-phone"></i> 6303377457</h6>
                    <h6><i class="fa-solid fa-envelope"></i> <a href="mailto:iamvenky1997@gmail.com" className="text-decoration-none">iamvenky1997@gmail.com</a></h6>
                </div>
                
            </div>
            <div className="follow-us">
                <h5>Follow us</h5>
                <div className="follow-us-sub">
                <h6 className="my-4"><i class="fa-brands fa-facebook"></i></h6>
                <h6 className="my-4"><i class="fa-brands fa-instagram"></i></h6>
                <h6 className="my-4"><i class="fa-brands fa-youtube"></i></h6>
                <h6 className="my-4"><i class="fa-brands fa-twitter"></i></h6>

                </div>
             
            </div>


        </div>
    )
}

export default Footer