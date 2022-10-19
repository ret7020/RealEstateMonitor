import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const AppartamentItem = ({ flat_data, ...props }) => {
    return (
        <Col>
            <Card style={{ width: '270px', "margin-bottom": '30px' }}>
                <Card.Img variant="top" src={require("../img/photo.jpg")} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>

    );
}

export default AppartamentItem;