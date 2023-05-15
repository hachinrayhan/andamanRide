import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import BookingForm from "../pages/Home/OurCabs/Booking";
import ContactUs from "../pages/ContactUs/ContactUs";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/cab/:id',
                element: <BookingForm></BookingForm>
            },
            {
                path: '/activities/:id',
                element: <BookingForm></BookingForm>
            },
            {
                path: 'contact-us',
                element: <ContactUs></ContactUs>
            }
        ]
    }
])