import React from "react";
import AppartamentItem from "./ApartamentItem";

const AppartamentsList = ({data}) => {
    return (
        <div className="appartamentslist">
            {data.map(flat_data => <AppartamentItem flat_data={flat_data} key={flat_data.id}/>)}  
        </div>
    )
    
}

export default AppartamentsList;