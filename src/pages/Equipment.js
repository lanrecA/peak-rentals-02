import React, { useState } from "react";
import EquipmentList from "../components/EquipmentList";
import Filter from "../components/Filter";
import Sort from "../components/Sort";

const Equipment = () => {

  const [category, setCategory] = useState("");

  const handleFilterChange = (e) => {
    setCategory(e.target.value);
    console.log(e.target.value)
  };

  return (
    <div>
      <h1>Our Equipment</h1>
      <div className="row">
        <div className="col-lg-3">
          <Filter handleFilterChange={handleFilterChange}/>
          <Sort />
        </div>
        <div className="col-lg-9">
          <EquipmentList category={category} />
        </div>
      </div>
    </div>
  );
};

export default Equipment;
