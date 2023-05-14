import Carousel from 'react-bootstrap/Carousel';
import diver from '../../../assets/slideImages/1.png';
import ship from '../../../assets/slideImages/2.png';
import beach from '../../../assets/slideImages/3.png';
import coconut from '../../../assets/slideImages/4.png';
import man from '../../../assets/slideImages/5.png';

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={diver}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Sea You here</h1>
                    <p>To the Unknown & Unexplored world</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ship}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1>Nautika</h1>
                    <p>Friendly, Fabulous & Fast</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={beach}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1>Explore the Islands</h1>
                    <p>Enjoy your journey in Luxury cruise</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={coconut}
                    alt="Fourth slide"
                />

                <Carousel.Caption>
                    <h1>Amazing Andamans</h1>
                    <p>Unleash the Paradise Islands</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={man}
                    alt="Fifth slide"
                />

                <Carousel.Caption>
                    <h1>Book Your Cab</h1>
                    <p>For Hassle Free Ride</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;