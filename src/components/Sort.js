import React, { useState } from "react";

const Sort = () => {
  const [sortOption, setSortOption] = useState("name");

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="mb-4">
      <h5>Sort by</h5>
      <select className="form-select" value={sortOption} onChange={handleSortChange}>
        <option value="name">Name</option>
        <option value="category">Category</option>
      </select>
    </div>
  );
};

export default Sort;
