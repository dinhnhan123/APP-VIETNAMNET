import React from "react";
import { Link } from "react-router-dom";
import "../../styles/business/businessSection.css";

const BusinessSection = ({ sections = [] }) => {
  if (!sections.length) return null;

  const main = sections[0];
  const list = sections.slice(1, 6);

  return (
    <div className="news-column">
      {/* MAIN */}
      <div className="news-main">
        <Link to={main.link}>
          {main.image && <img src={main.image} alt={main.title} />}
        </Link>

        <div className="news-main-content">
          <Link to={main.link} className="text-dark text-decoration-none">
            <h4>{main.title}</h4>
          </Link>
        </div>
      </div>

      {/* LIST */}
      <ul className="news-list">
        {list.map(item => (
          <li key={item.id}>
            <Link to={item.link} className="text-decoration-none">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessSection;
