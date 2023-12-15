import ContactForm from "./ContactForm";
import { CiLocationOn } from 'react-icons/ci';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { GoDeviceMobile } from 'react-icons/go';

const ContactUs = () => {
    return (
        <div>
            <img className="img-fluid" src="https://www.andamancab.in/assets/img/bgs/bg-contact.jpg" alt="" />
            <div>
                <ContactForm></ContactForm>
                <div className="bg-dark p-5">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 text-light">
                        <div className="col text-center h-100">
                            <CiLocationOn style={{ fontSize: '4rem' }} className="mb-3" />
                            <h5 className="text-warning">Address</h5>
                            <p className="card-text">State Highway 5, Govind Nagar, Andaman and Nicobar Islands 744211</p>
                        </div>
                        <div className="col text-center h-100">
                            <FaEnvelopeOpenText style={{ fontSize: '3rem' }} className="mb-3" />
                            <h5 className="text-warning">Email ID</h5>
                            <p className="card-text">andamanrides@gmail.com</p>
                        </div>
                        <div className="col text-center h-100">
                            <GoDeviceMobile style={{ fontSize: '3rem' }} className="mb-3" />
                            <h5 className="text-warning">Contact Info</h5>
                            <p className="card-text">+91-9933253906</p>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${'https://www.andamancab.in/assets/img/bgs/bg-about-us.png'})` }} className="m-5 text-light">
                    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', padding: '70px 48px' }}>
                        <h6>ABOUT US</h6>
                        <h1>Your Perfect <br /> Cab Partner</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
