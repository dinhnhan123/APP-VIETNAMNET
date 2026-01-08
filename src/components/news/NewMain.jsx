import { Link } from "react-router-dom";
import FeaturedArticle from "../news/FeaturedArticle.jsx";
import SubArticleItem from "../news/SubArticleItem.jsx";
import NewThreeGrid from "../news/NewThreeGrid.jsx";
import NewVerticalList from "../news/NewVerticalList.jsx";
import NewsSection from "../news/NewsSection.jsx";
//style 
import "../../styles/news/newThreeGrid.css";
const NewsMain = ({ featured, subList, gridList, verticalList }) => {
    return (
        <div className="politics-main">
            <div className="d-flex flex-wrap main-news">

                {/* LEFT: BÀI NỔI BẬT */}
                <div className="main-left">
                    <Link
                        to={`/article?url=${encodeURIComponent(featured.link)}&title=${encodeURIComponent(featured.title)}`}
                        className="text-decoration-none text-dark"
                    >
                        <FeaturedArticle data={featured} />
                    </Link>
                </div>

                {/* RIGHT: BÀI PHỤ */}
                <div className="main-right">
                    {subList.map(item => (
                        <SubArticleItem
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            link={item.link}
                        />
                    ))}

                </div>
            </div>

            <div className="mt-4">
                <NewThreeGrid  data={gridList}/>
            </div>
            <div className="mt-4">
                <NewVerticalList  data={verticalList}/>
            </div>
            <div className="news-row mt-4">
                <NewsSection sections={gridList} />
                <NewsSection sections={verticalList} />
            </div>
        </div>

    );
};

export default NewsMain;
