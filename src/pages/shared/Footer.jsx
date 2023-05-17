import { FaMobileAlt, FaPhoneAlt, FaMap } from 'react-icons/fa';
import { BsEnvelope } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 bg-dark text-light p-5">
            <div className="col-12 col-md-6 col-lg-2">
                <h3>Cruises</h3>
                <hr />
                <ul>
                    <li>Green Ocean 1</li>
                    <li>ITT Majestic</li>
                    <li>Nautika Lite</li>
                    <li>Green Ocean 2</li>
                    <li>Nautika</li>
                    <li>Makruzz</li>
                </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-2">
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
            <div className="col-12 col-md-6 col-lg-4">
                <h3>Contact with Us</h3>
                <hr />
                <p><FaMobileAlt className='me-2' /> 9933263867, 9531955441</p>
                <p><FaPhoneAlt className='me-2' /> WhatsApp: 9933263867, 9531955441</p>
                <p><BsEnvelope className='me-2' /> contact@andamancab.in</p>
                <hr />
                <p><FaMap className='me-2' /> Shop No. 01, Pulikeezu Bhavan Bargat Line, near juvenile home, DRDO TRANSIST, Nayagaon, Port Blair, Andaman and Nicobar Islands 744106</p>
                <p>FOLLOW US <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg" alt="" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                    <img src="https://cdn.pixabay.com/photo/2021/05/22/11/38/yt-6273367_1280.png" alt="" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                </p>
            </div>

        </div>
    );
};

export default Footer;