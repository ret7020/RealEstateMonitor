import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import classes from './MetroDistanceFilter.module.css'

const MetroDistanceFilter = () => {
    return (
        <div>
            <span className="filter_title">Близость к метро</span>
            <div className="filters">
                <Container fluid="true">
                    <Row noGutters>
                        <Col ><Button variant="warning" className={classes.btn_left_filter} >{"<10"}</Button></Col>
                        <Col ><Button variant="warning" className={classes.btn_middle_filter} >{"10-20"}</Button></Col>
                        <Col ><Button variant="light" className={classes.btn_middle_filter} >{"20-30"}</Button></Col>
                        <Col ><Button variant="light" className={classes.btn_right_filter} >{"30+"}</Button></Col>
                    </Row>
                </Container>


            </div>
        </div>
    );
}
/*
         
                <Row>
                    <Button variant="light" className={classes.btn_right_filter} >Любая</Button>
                </Row>  
                */
export default MetroDistanceFilter;