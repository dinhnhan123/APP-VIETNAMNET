import { Link } from "react-router-dom";

const TechVerticalItem = ({ image, category, title, desc, link }) => {
  return (
    <div className="tech-vertical-item d-flex mb-4">

      <Link to={link} className="item-img">
        <img src={image} alt={title} />
      </Link>

      <div className="item-content ms-3">
        <span className="item-category">{category}</span>

        <Link to={link} className="item-title">
          {title}
        </Link>

        <p className="item-desc">{desc}</p>
      </div>

    </div>
  );
};

export default TechVerticalItem;
