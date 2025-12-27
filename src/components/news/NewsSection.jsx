import React from "react";
import "../../styles/news/newsSection.css";

const NewsSection = ({ sections }) => {
  return (
    <div className="news-wrapper">
      {sections.map((section) => (
        <div key={section.id} className="news-column">
          <h3 className="news-title">{section.title}</h3>

          <div className="news-main">
            <img src={section.main.image} alt="" />
            <div className="news-main-content">
              <h4>{section.main.title}</h4>
              {section.main.comments && (
                <span className="comment">
                  💬 {section.main.comments}
                </span>
              )}
            </div>
          </div>

          <ul className="news-list">
            {section.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NewsSection;
