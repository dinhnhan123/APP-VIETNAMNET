import React from "react";
import "../../styles/home/listNewsGrid.css";
const LitsNewsGrid = ({ list }) => {
  return (
    <div className="grid-container">
      {list.map((item) => (
        <div key={item.id} className="grid-item">
          <a href={item.url} className="text-decoration-none text-dark">
            <div className="grid-image">
              <img src={item.image} alt="" />
            </div>

            <p className="fw-medium mt-2 mb-1">{item.title}</p>
            <p className="fw-bold text-primary small m-0">{item.category}</p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default LitsNewsGrid;
