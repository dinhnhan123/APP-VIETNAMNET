import { Link } from "react-router-dom";

const HighlightItem = ({ image, category, title, link }) => {
  return (
    <Link to={`/article?url=${encodeURIComponent(link)}&title=${encodeURIComponent(title)}`} className="highlight-item d-block">
      <div className="highlight-thumb">
        <img src={image} alt={title} />
      </div>

      <span className="highlight-category">{category}</span>

      <h4 className="highlight-text">{title}</h4>
    </Link>
  );
};

export default HighlightItem;
