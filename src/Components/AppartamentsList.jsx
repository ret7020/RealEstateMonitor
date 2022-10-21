import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AppartamentItem from "./ApartamentItem";
import "../App.css";

const AppartamentsList = ({ data }) => {
    return (

        <Col className="mt-60">
            <Row>
                {data.map(flat_data => <AppartamentItem flat_data={flat_data} key={flat_data.id} />)}
            </Row>
        </Col>
    )

}

export default AppartamentsList;