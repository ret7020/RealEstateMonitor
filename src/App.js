import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppartamentsList from "./Components/AppartamentsList";

function App() {
  const [realestates, setRealEstates] = useState([
    {"id": 1, "title": "ЖК Ильинские луга 1", "flat_type": "Комфорт", "installment_plan_monthes": 12, "release_year": 2022, "release_quarter": 4, "metro_station": "Октябрьская", "address": "пр. Льва Толстого 180А"},
    {"id": 2, "title": "ЖК Ильинские луга 2", "flat_type": "Комфорт", "installment_plan_monthes": 12, "release_year": 2022, "release_quarter": 4, "metro_station": "Октябрьская", "address": "пр. Льва Толстого 180А"},
    {"id": 3, "title": "ЖК Ильинские луга 3", "flat_type": "Комфорт", "installment_plan_monthes": 12, "release_year": 2022, "release_quarter": 4, "metro_station": "Октябрьская", "address": "пр. Льва Толстого 180А"}
    
  ]);
  return (
    <div className="App">
      <AppartamentsList data={realestates}/>
    </div>
  );
}

export default App;
