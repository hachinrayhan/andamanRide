import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingForm from "./BookingForm";

const Booking = () => {
    const { id } = useParams();
    const [cabs, setCabs] = useState([]);

    useEffect(() => {
        fetch('/cabs.json')
            .then(res => res.json())
            .then(data => setCabs(data))
    }, [])

    const cab = cabs.find(cab => cab._id === id);

    return (
        <div>
            <BookingForm cab={cab}></BookingForm>
        </div>
    );
};

export default Booking;