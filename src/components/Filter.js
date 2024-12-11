import React, { useState } from "react";

const Filter = (prop) => {


  return (
    <div className="mb-4">
      <h5>Filter by Category</h5>
      <select className="form-select" onChange={prop.handleFilterChange}>
        <option value="">All</option>
        <option value="Excavator">Excavator</option>
        <option value="Bulldozer">Bulldozer</option>
        <option value="Crane">Crane</option>
        <option value="Forklift">Forklift</option>
      </select>
    </div>
  );
};

export default Filter;
