import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./Appartaments.css";


const AppartamentItem = ({ flat_data, ...props }) => {
    return (
        <Col>
            <Card className="appartament_item">
                <Card.Img variant="top" src={require("../img/photo.jpg")} alt="Appartament" />
                <Card.ImgOverlay>
                    <Button className="image_filter_overlay_btn" variant="warning" size="sm">Комфорт</Button>
                    <Button className="image_filter_overlay_btn" variant="success" size="sm">Рассрочка</Button>
                </Card.ImgOverlay>
                <Card.Body>
                    <Card.Title style={{ "fontWeight": "700" }}>{flat_data.title}</Card.Title>
                    <Card.Text>
                        <div style={{ "display": "grid" }}>
                            <span className="release_date_text">Срок сдачи до {flat_data.release_quarter} кв. {flat_data.release_year} г.</span>
                            <div>
                                <img src={require("../img/metro.png")} className="metro_icon" alt="Moscow metro" />
                                <span className="metro_station_name">{flat_data.metro_station}</span>
                            </div>
                            <span className="address_text">{flat_data.address}</span>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );
}

export default AppartamentItem;