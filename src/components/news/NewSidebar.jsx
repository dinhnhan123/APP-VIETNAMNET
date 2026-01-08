import NewHotList from "../news/NewHotList.jsx";
import { Link } from "react-router-dom";
const NewsSidebar = ({ hotList, eventList }) => {
  if (!eventList?.length) return null;

  const main = eventList[0];
  const list = eventList.slice(1, 4);

  return (
    <aside className="politics-sidebar ms-lg-4 mt-4 mt-lg-0">
      <div className="event-card">
        {/* Label */}
        <div className="event-label">
          <span>Sự kiện</span>
        </div>

        {/* Title */}
        <h3 className="event-title">
          {main.title}
        </h3>

        {/* Image */}
        {main.image && (
          <div className="event-image">
            <img src={main.image} alt={main.title} />
          </div>
        )}

        {/* List news */}
        <ul className="event-news-list">
          {list.map((item) => (
            <li className="event-news-item" key={item.id}>
              <Link to={`/article?url=${encodeURIComponent(item.link)}&title=${encodeURIComponent(item.title)}`}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

      </div>

      <div className="mt-4">
        <NewHotList hotList={hotList} />
      </div>
    </aside>
  );
};

export default NewsSidebar;
