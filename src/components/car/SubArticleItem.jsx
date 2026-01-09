import { Link } from "react-router-dom";

const SubArticleItem = ({ image, title, link }) => {
  return (
    <Link
      to={link}
      className="sub-item d-flex mb-3 text-decoration-none text-dark"
    >
      <img src={image} alt={title} />
      <p className="ms-2 mb-0">{title}</p>
    </Link>
  );
};

export default SubArticleItem;
