import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const PortBlair = () => {
    const [isAll, setIsAll] = useState(false);
    const [max, setMax] = useState(3);
    const [cabs, setCabs] = useState([]);

    const portBlairCabs = cabs.filter(portBlairCabs => portBlairCabs.guide === 'Port Blair Guide');

    useEffect(() => {
        if (isAll) {
            setMax(14);
        } else {
            setMax(3);
        }
    }, [isAll]);

    const slicedCabs = portBlairCabs.slice(0, max);

    useEffect(() => {
        fetch('/cabs.json')
            .then(res => res.json())
            .then(data => setCabs(data))
    }, [])

    return (
        <div className="px-5 mt-5">
            <h2>Cabs in Port Blair</h2>
            <h5>Top cruises that sail within the islands</h5>
            <Row xs={1} md={3} className="g-4">
                {
                    slicedCabs.map(cab => (
                        <Col key={cab._id}>
                            <Link to={`http://localhost:5173/cab/${cab._id}`}>
                                <Card className="text-white position-relative">
                                    <Card.Img src={cab.picture} />
                                    <div className="bg-dark position-absolute w-100 h-100 opacity-25 rounded"></div>
                                    <Card.ImgOverlay>
                                        <Card.Text className="text-end">
                                            <span className="bg-dark p-2 rounded fw-semibold">₹ {cab.price}/-</span>
                                        </Card.Text>
                                        <Card.Title className="position-absolute bottom-0 bg-$gray-500">{cab.title}</Card.Title>
                                    </Card.ImgOverlay>
                                </Card>
                            </Link>
                        </Col>
                    ))
                }
            </Row>
            <div className="text-center mt-4">
                {
                    isAll ? <Button onClick={() => setIsAll(false)} variant="warning">See Less</Button>
                        :
                        <Button onClick={() => setIsAll(true)} variant="warning">See All</Button>
                }

            </div>
        </div>
    );
};

export default PortBlair;