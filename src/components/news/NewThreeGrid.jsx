import { Link } from "react-router-dom";

const NewThreeGrid = ({ data = [] }) => {
    return (
          <div className="row g-3 politics-three-grid">
      {data.map(item => (
        <div className="col-12 col-md-4" key={item.id}>
          <Link to={`/article?url=${encodeURIComponent(item.link)}&title=${encodeURIComponent(item.title)}`} className="grid-item">
            {item.image && (
              <img src={item.image} alt={item.title} />
            )}
            <h6>{item.title}</h6>
          </Link>
        </div>
      ))}
    </div>
    );
};

export default NewThreeGrid;
