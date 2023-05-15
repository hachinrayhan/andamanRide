import { useEffect, useState } from "react";
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="px-5 mt-5">
            <h2 className="text-center fw-bold">Customer Review</h2>
            <p className="text-center fs-3">Know what our customers say about us</p>
            <div className="col-12 col-md-10 col-lg-8 mx-auto">
                {reviews.map(review =>
                    <div key={review._id} className="bg-dark text-light border rounded p-3 mb-3">
                        <div className="d-flex mb-2">
                            <img src={review.picture} alt="" style={{ width: '50px', height: '50px', borderRadius: '25px' }} className="me-2" />
                            <div>
                                <span className="me-2">{review.name}</span>
                                <span className="text-warning">
                                    {[...Array(review.star)].map((_, index) => (
                                        <FaStar key={index} />
                                    ))}
                                </span>
                                <h6>Verified User</h6>
                            </div>
                        </div>
                        <p>&quot;{review.review}&quot;</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Reviews;