import { Link } from "react-router-dom";
import FeaturedArticle from "../politics/FeaturedArticle.jsx";
import SubArticleItem from "../politics/SubArticleItem.jsx";
import PoliticsThreeGrid from "../politics/PoliticsThreeGrid.jsx";
import PoliticsVerticalList from "../politics/PoliticsVerticalList.jsx";
import NewsSection from "../politics/NewsSection.jsx";
//style 
import "../../styles/politics/politicsThreeGrid.css"
const PoliticsMain = ({ featured, subList, gridList, verticalList }) => {
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
                <PoliticsThreeGrid data={gridList} />
            </div>
            <div className="mt-4">
                <PoliticsVerticalList  data={verticalList}/>
            </div>
            <div className="news-row mt-4">
                <NewsSection sections={gridList} />
                <NewsSection sections={verticalList} />
            </div>
        </div>

    );
};

export default PoliticsMain;
