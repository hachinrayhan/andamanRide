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
                            <p className="card-text">Shop No. 01, Pulikeezu Bhavan Bargat Line, near juvenile home, DRDO TRANSIST, Nayagaon, Port Blair, Andaman and Nicobar Islands 744106</p>
                        </div>
                        <div className="col text-center h-100">
                            <FaEnvelopeOpenText style={{ fontSize: '3rem' }} className="mb-3" />
                            <h5 className="text-warning">Email Address</h5>
                            <p className="card-text">contact@andamancab.in <br />
                                Monday to Friday 9am - 7pm</p>
                        </div>
                        <div className="col text-center h-100">
                            <GoDeviceMobile style={{ fontSize: '3rem' }} className="mb-3" />
                            <h5 className="text-warning">Contact Info</h5>
                            <p className="card-text">9933263867, 9531955441</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;