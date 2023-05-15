import { BsShieldX } from 'react-icons/bs';
import { IoIosTimer } from 'react-icons/io';
import { BsPeople } from 'react-icons/bs';
import { AiOutlineCar } from 'react-icons/ai';

const AboutUs = () => {
    return (
        <div className="px-5 mt-5 bg-dark p-5">
            <h4 className="text-light fw-bold">Know About Us</h4>
            <p className="text-light fs-5">Andaman Ride Services LLP is the only company which has 27 vehicles in Andaman Islands with the biggest Fleet.</p>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                <div className="col">
                    <div className="card text-center p-4 h-100">
                        <div className="card-body">
                            <BsShieldX style={{ fontSize: '4rem' }} className="mb-3" />
                            <h5 className="card-title">Quality</h5>
                            <p className="card-text">Constantly rated high both in Tripadvisor and Google by our customers.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center p-4 h-100">
                        <div className="card-body">
                            <IoIosTimer style={{ fontSize: '4rem' }} className="mb-3" />
                            <h5 className="card-title">10 Years</h5>
                            <p className="card-text">Local team with very strong ground operations to take care of you in Andaman.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center p-4 h-100">
                        <div className="card-body">
                            <BsPeople style={{ fontSize: '4rem' }} className="mb-3" />
                            <h5 className="card-title">Experts</h5>
                            <p className="card-text">Our team is inclined to provide the great experience of the journey.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center p-4 h-100">
                        <div className="card-body">
                            <AiOutlineCar style={{ fontSize: '4rem' }} className="mb-3" />
                            <h5 className="card-title">On time Pickup</h5>
                            <p className="card-text">Our drivers are dedicated and be there to pickup from your location on time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;