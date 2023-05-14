import PopularActivities from "./Activities/PopularActivities";
import OurCabs from "./OurCabs/OurCabs";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <OurCabs></OurCabs>
            <PopularActivities></PopularActivities>
        </div>
    );
};

export default Home;