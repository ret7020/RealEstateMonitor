import React from "react";

const AppartamentItem = ({flat_data, ...props}) => {
    console.log(flat_data);
    return (
        <div className="appartament">
            <span>{flat_data.title}</span>        
        </div>
    );
}

export default AppartamentItem;