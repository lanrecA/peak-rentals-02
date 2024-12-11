import React, { useState, useEffect } from "react";
import EquipmentItem from "./EquipmentItem";

const EquipmentList = (prop) => {
  const [equipment, setEquipment] = useState([
    { id: 1, name: "Excavator", category: "Excavator", imageUrl: "https://via.placeholder.com/300x200?text=Excavator" },
    { id: 2, name: "Bulldozer", category: "Bulldozer", imageUrl: "https://via.placeholder.com/300x200?text=Bulldozer" },
    { id: 3, name: "Crane", category: "Crane", imageUrl: "https://via.placeholder.com/300x200?text=Crane" },
    { id: 4, name: "Forklift", category: "Forklift", imageUrl: "https://via.placeholder.com/300x200?text=Forklift" },
    { id: 5, name: "Forklift2", category: "Forklift", imageUrl: "https://via.placeholder.com/300x200?text=Forklift" },
  ]);

  const [filteredEquipment, setFilteredEquipment] = useState(equipment);

  useEffect(() => {
    setFilteredEquipment(equipment);
  }, [equipment]);
//console.log(category)
//console.log(prop.category)

const filterFunc = (param) => {
    if (prop.category === "") {
        return true
    }
    else {
        return param.category === prop.category
    }
}
  return (
    <div className="row">
      {filteredEquipment.filter((it) => filterFunc(it)).map((item) => (
        <div key={item.id} className="col-md-4 mb-4">
          <EquipmentItem equipment={item} />
        </div>
      ))}
    </div>
  );
};

export default EquipmentList;
