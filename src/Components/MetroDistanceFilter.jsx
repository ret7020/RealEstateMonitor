import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import classes from './MetroDistanceFilter.module.css'

const MetroDistanceFilter = () => {
    return (
        <div>
            <span className="filter_title">Близость к метро</span>
            <div className="filters">
                <Container>
                    <Row>
                        <Col>
                            <Button variant="warning" className={classes.btn_left_filter} >{"<10"}</Button>
                            <Button variant="warning" className={classes.btn_middle_filter} >{"10-20"}</Button>
                            <Button variant="light" className={classes.btn_middle_filter} >{"20-30"}</Button>
                            <Button variant="light" className={classes.btn_right_filter} >{"30+"}</Button>
                        </Col>
                       
                    </Row>
                    <Col style={{width: "100%"}}>
                        <Button variant="light" >Любая</Button>
                    </Col>

                </Container>


            </div>
        </div>
    );
}

export default MetroDistanceFilter;