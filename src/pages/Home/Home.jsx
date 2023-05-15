import AboutUs from "./AboutUs/AboutUs";
import Reviews from "./AboutUs/Reviews";
import PopularActivities from "./Activities/PopularActivities";
import OurCabs from "./OurCabs/OurCabs";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <OurCabs></OurCabs>
            <PopularActivities></PopularActivities>
            <AboutUs></AboutUs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;