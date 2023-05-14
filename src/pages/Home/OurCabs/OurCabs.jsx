import HavelockIsland from "./HavelockIsland";
import NeilIsland from "./NeilIsland";
import PortBlair from "./PortBlair";

const OurCabs = () => {
    return (
        <div className="mt-5">
            <h2 className="text-center fw-bold">Our Cabs</h2>
            <h4 className="text-center">Enjoy your ride in our top class fleet</h4>
            <div>
                <PortBlair></PortBlair>
                <HavelockIsland></HavelockIsland>
                <NeilIsland></NeilIsland>
            </div>
        </div>
    );
};

export default OurCabs;