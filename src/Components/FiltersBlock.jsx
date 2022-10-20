import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import MetroDistanceFilter from "./MetroDistanceFilter";


const FiltersBlock = () => {
    return (
        <Col className="mt-60" sm='3'>
            <MetroDistanceFilter/>
        </Col>  
);
}

export default FiltersBlock;