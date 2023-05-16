import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ActivitiesForm = () => {
    //this section is for setting default activity and place
    // const { id } = useParams();
    // const [popActivities, setPopActivities] = useState([]);

    // useEffect(() => {
    //     fetch('/activities.json')
    //         .then(res => res.json())
    //         .then(data => setPopActivities(data))
    // }, [])

    // const defaultActivity = popActivities.find(popActivity => popActivity._id === id);
    // .................................//


    const activities = ['Scuba Diving', 'Sea Walk', 'Parasailing', 'Barren Island', 'Glass Bottom Boat', 'Dinner Cruise', 'Trekking', 'Kayaking', 'Light & Sound Shows', 'Photography'];

    const placesByActivity = {
        'Scuba Diving': ['Shore Scuba Diving at North Bay Coral Island', 'Scuba Diving at Chidiyatapu', 'Shore Scuba Diving at Havelock', 'Boat Scuba Diving at Havelock', 'Shore Scuba Diving at Neil Island', 'Boat Scuba Diving at Neil Island', 'Boat Scuba Diving at North Bay Coral Island'],
        'Sea Walk': ['Sea Walking at North Bay Coral Island', 'Sea Walking at Havelock Elephant Beach'],
        'Parasailing': ['Parasailing at Corbyns Cove Beach', 'Parasailing at Havelock Elephant Beach'],
        'Barren Island': ['Barren Island Andaman'],
        'Glass Bottom Boat': ['Andaman Dolphin Glass Boat Ride at North Bay Coral Island', 'Coral Safari Semi- Submarine Glass Boat Ride at North Bay Coral Island', 'Reef Looker Semi- Submarine Glass Boat Ride at Elephant Beach'],
        'Dinner Cruise': ['Dinner Cruise in Andaman'],
        'Trekking': ['Trekking in Andaman Islands'],
        'Kayaking': ['Kayaking in Andaman Island'],
        'Light & Sound Shows': ['Cellular Jail'],
        'Photography': ['Photography in Andaman'],
    };

    const [selectedActivity, setSelectedActivity] = useState('');

    const handleActivityChange = (e) => {
        setSelectedActivity(e.target.value);
    };

    const places = placesByActivity[selectedActivity] || [];



    return (
        <div className="container col-md-9 col-lg-6 shadow-lg p-3 my-5 bg-body-tertiary rounded">
            {/* <Form ref={form} onSubmit={handleSubmit}> */}
            <Form>

                <Form.Group className='mb-3' controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className='mb-3' controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter your email" className='w-100' required />
                </Form.Group>

                <Form.Group className='mb-3' controlId="mobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control name='mobile' type="text" placeholder="Enter your mobile number" required />
                </Form.Group>

                <Form.Group className='mb-3' controlId="totalAdults">
                    <Form.Label>Total Adults</Form.Label>
                    <Form.Control name='totalAdults' type="number" placeholder="Enter the number of adults" />
                </Form.Group>

                <Form.Group className='mb-3' controlId="activity">
                    <Form.Label>Select Activity</Form.Label>
                    <Form.Select value={selectedActivity} onChange={handleActivityChange}>
                        <option className="text-center" value="">---Select Activity---</option>
                        {activities.map((activity) => (
                            <option key={activity} value={activity}>
                                {activity}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group className='mb-3' controlId="place">
                    <Form.Label>Select Activity Place</Form.Label>
                    <Form.Select>
                        <option className="text-center" value="">---Select Activity Place---</option>
                        {places.map((place) => (
                            <option key={place} value={place}>
                                {place}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group className='mb-3' controlId="date">
                    <Form.Label>Select Activity Date</Form.Label>
                    <Form.Control type="date" />
                </Form.Group>

                <Form.Group className='mb-3' controlId="message">
                    <Form.Label>Write Message</Form.Label>
                    <Form.Control name='message' as="textarea" rows={3} placeholder="Enter your message" />
                </Form.Group>

                <Button className='w-100' variant="success" type="submit">
                    Submit Enquiry
                </Button>
            </Form>
            <p className='text-center'>No money charged in this step</p>
        </div>
    );
};

export default ActivitiesForm;