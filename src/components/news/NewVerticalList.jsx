
import { useState } from "react";
import NewVerticalItem from "./NewVerticalItem";
import "../../styles/news/newVerticalList.css"

const NewVerticalList = ({ data = [] }) => {
 const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);

  if (!data.length) return null;

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  const start = (currentPage - 1) * ITEMS_PER_PAGE;
  const articles = data.slice(start, start + ITEMS_PER_PAGE);
   return (
    <div className="politics-vertical-list">

      {articles.map(item => (
        <NewVerticalItem
          key={item.id}
          image={item.image}
          title={item.title}
          desc={item.description}
          link={item.link}
        />
      ))}

      <div className="pagination mt-4">
        <button disabled={currentPage === 1} onClick={() => setCurrentPage(p => p - 1)}>‹</button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? "active" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(p => p + 1)}>›</button>
      </div>
    </div>
  );
};

export default NewVerticalList;
