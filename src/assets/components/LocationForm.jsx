import React from "react";
import "./style/search.css"


const LocationForm = ({handleSubmit}) => {
  
  
  return (
    <form className="formClass" onSubmit={handleSubmit}>
      <input
        className="inputClass"
        min={1}
        max={126}
        type="number"
        placeholder="Type a location id..."
        id="newLocation"
        defaultValue={1}
      />
      <button className="btnClass">Search</button>
    </form>
  )
}

export default LocationForm;
