import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppartamentsList from "./Components/AppartamentsList";
import Container from "react-bootstrap/Container";
import FiltersBlock from "./Components/FiltersBlock";
import Row from "react-bootstrap/Row";

function App() {
  const [realestates, setRealEstates] = useState([
    { "id": 1, "title": "ЖК Ильинские луга 1", "flat_type": "Комфорт", "installment_plan_monthes": 12, "release_year": 2022, "release_quarter": 4, "metro_station": "Октябрьская", "address": "пр. Льва Толстого 180А", "img_path": "../img/photo.jpg" },
    { "id": 2, "title": "ЖК Ильинские луга 2", "flat_type": "Комфорт", "installment_plan_monthes": 12, "release_year": 2022, "release_quarter": 4, "metro_station": "Октябрьская", "address": "пр. Льва Толстого 180А", "img_path": "../img/photo.jpg" },
    { "id": 3, "title": "ЖК Ильинские луга 3", "flat_type": "Комфорт", "installment_plan_monthes": 12, "release_year": 2022, "release_quarter": 4, "metro_station": "Октябрьская", "address": "пр. Льва Толстого 180А", "img_path": "../img/photo.jpg" },
    { "id": 4, "title": "ЖК Ильинские луга 3", "flat_type": "Комфорт", "installment_plan_monthes": 12, "release_year": 2022, "release_quarter": 4, "metro_station": "Октябрьская", "address": "пр. Льва Толстого 180А", "img_path": "../img/photo.jpg" },
    { "id": 5, "title": "ЖК Ильинские луга 3", "flat_type": "Комфорт", "installment_plan_monthes": 12, "release_year": 2022, "release_quarter": 4, "metro_station": "Октябрьская", "address": "пр. Льва Толстого 180А", "img_path": "../img/photo.jpg" },
    { "id": 6, "title": "ЖК Ильинские луга 1", "flat_type": "Комфорт", "installment_plan_monthes": 12, "release_year": 2022, "release_quarter": 4, "metro_station": "Октябрьская", "address": "пр. Льва Толстого 180А", "img_path": "../img/photo.jpg" },

  ]);
  return (
    <div className="App">
      <Container>
        <Row>
          <AppartamentsList data={realestates} />
          <FiltersBlock />
        </Row>
      </Container>
    </div>
  );
}

export default App;
