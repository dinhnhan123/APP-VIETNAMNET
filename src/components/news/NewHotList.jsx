import { Link } from "react-router-dom";

const NewHotList = ({ hotList }) => {
    if (!hotList || hotList.length === 0) return null;

  return (
    <div className="politics-hot-list">
      <h6 className="hot-title">TIN NỔI BẬT</h6>

      {hotList.map((item) => (
        <Link key={item.id} to={`/article?url=${encodeURIComponent(item.link)}&title=${encodeURIComponent(item.title)}`} className="hot-item">
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default NewHotList;
