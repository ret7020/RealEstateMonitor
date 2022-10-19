import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import AppartamentItem from "./ApartamentItem";
import "../App.css"
const AppartamentsList = ({data}) => {
    return (
       <Container>
            <Row className="mt-60">
                {data.map(flat_data => <AppartamentItem flat_data={flat_data} key={flat_data.id}/>)}  
            </Row>
       </Container>
    )
    
}

export default AppartamentsList;