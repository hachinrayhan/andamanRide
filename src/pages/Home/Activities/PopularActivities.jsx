import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const PopularActivities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('/activities.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div className="px-5 mt-5">
            <h2 className="text-center fw-bold">Popular Activities</h2>
            <h4 className="text-center">Explore top destinations across the islands</h4>
            <Row xs={1} md={3} className="g-4 mt-2">
                {
                    activities.map(activity => (
                        <Col key={activity._id}>
                            <Link to={`http://localhost:5173/activities/${activity._id}`}>
                                <Card className="text-white position-relative">
                                    <Card.Img src={activity.picture} />
                                    <div className="bg-dark position-absolute w-100 h-100 opacity-50 rounded"></div>
                                    <Card.ImgOverlay>
                                        <div className="position-absolute end-0 me-3">
                                            <Card.Text className=" bg-dark p-2 rounded fw-semibold">
                                                <span>STARTS AT</span> <br />
                                                <span className="text-warning">INR {activity.price}/-</span>
                                            </Card.Text>
                                        </div>
                                        <div className="position-absolute bottom-0">
                                            <Card.Title className="text-warning">{activity.title}</Card.Title>
                                            <Card.Title>{activity.titleDetail}</Card.Title>
                                        </div>
                                    </Card.ImgOverlay>
                                </Card>
                            </Link>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
};

export default PopularActivities;