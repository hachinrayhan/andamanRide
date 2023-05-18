import { FaMobileAlt, FaPhoneAlt, FaMap } from 'react-icons/fa';
import { BsEnvelope } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="p-5 bg-dark">
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 text-light">
                <div className="col-12 col-md-6 col-lg-3">
                    <h3>Cab Services</h3>
                    <hr />
                    <ul>
                        <li>Cabs in Port Blair</li>
                        <li>Cabs in Havelock Island</li>
                        <li>Cabs in Neil Island</li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                    <h3>Activities</h3>
                    <hr />
                    <ul>
                        <li>Parasailing at Corbyns Cove Beach</li>
                        <li>Sea Walking at Havelock Elephant Beach</li>
                        <li>Cellular Jail</li>
                        <li>Boat Scuba Diving at Neil Island</li>
                        <li>Photography in Andaman</li>
                        <li>Parasailing in Port Blair</li>
                        <li>Shore Scuba Diving at Havelock</li>
                        <li>Reef Looker Semi-Submarine Glass Boat Ride at Elephant Beach</li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-5">
                    <h3>Contact with Us</h3>
                    <hr />
                    <p><FaMobileAlt className='me-2' /> 9933253906</p>
                    <p><FaPhoneAlt className='me-2' /> WhatsApp: 9933253906</p>
                    <p><BsEnvelope className='me-2' /> andamanrides@gmail.com</p>
                    <hr />
                    <p><FaMap className='me-2' /> State Highway 5, Govind Nagar, Andaman and Nicobar Islands 744211</p>
                    {/* <p>FOLLOW US <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg" alt="" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                    <img src="https://cdn.pixabay.com/photo/2021/05/22/11/38/yt-6273367_1280.png" alt="" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                </p> */}
                </div>
            </div>
        </div>
    );
};

export default Footer;