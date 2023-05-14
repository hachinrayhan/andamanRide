import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import BSNavbar from "../pages/shared/Navbar";

const MainLayout = () => {
    return (
        <div>
            <BSNavbar></BSNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;