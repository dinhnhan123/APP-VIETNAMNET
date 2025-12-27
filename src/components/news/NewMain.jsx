import { Link } from "react-router-dom";
import FeaturedArticle from "../news/FeaturedArticle.jsx";
import SubArticleItem from "../news/SubArticleItem.jsx";
import NewThreeGrid from "../news/NewThreeGrid.jsx";
import NewVerticalList from "../news/NewVerticalList.jsx";
import NewsSection from "../news/NewsSection.jsx";
import {
    listDataNews,
    listDataNews2
} from "../../fakeApi.jsx";
//style 
import "../../styles/news/newThreeGrid.css";
const PoliticsMain = () => {
    return (
        <div className="politics-main">
            <div className="d-flex flex-wrap main-news">

                {/* LEFT: BÀI NỔI BẬT */}
                <div className="main-left">
                    <Link
                        to="/chinh-tri/bai-hoc-tu-chau-au"
                        className="text-decoration-none text-dark"
                    >
                        <FeaturedArticle />
                    </Link>
                </div>

                {/* RIGHT: BÀI PHỤ */}
                <div className="main-right">

                    <SubArticleItem
                        image="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/25/2025-ha-noi-troi-ret-mien-bac-thap-nhat-duoi-8-do-3169.jpg?width=360&s=lOLsTPIwxYNJtfgg7SZAIQ"
                        title="Dự báo thời tiết 27/12/2025: Hà Nội rét khô, chênh lệch ngày đêm gần 10 độ"
                        link="/chinh-tri/hoi-huong-hai-cot-quan-nhan-my"
                    />

                    <SubArticleItem
                        image="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/27/150-canh-sat-vay-bat-bang-nhom-buon-ban-vu-khi-va-danh-bac-quy-mo-lon-10.png?width=360&s=k2oHskBf7zFFGUSjewZ2Sw"
                        title="150 cảnh sát vây bắt băng nhóm buôn bán vũ khí và đánh bạc quy mô lớn"
                        link="/chinh-tri/nhiet-dien-nhon-trach-3-4"
                    />
                    <SubArticleItem
                        image="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/xe-khach-cho-qua-13-nguoi-chu-va-lai-xe-bi-phat-gan-100-trieu-dong-2408.jpg?width=360&s=okmJGiwWQtMYnJ9x3Q7PLQ"
                        title="Xe khách chở quá 13 người, chủ và tài xế bị phạt gần 100 triệu đồng"
                        link="/chinh-tri/nhiet-dien-nhon-trach-3-4"
                    />
                    <SubArticleItem
                        image="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/xe-khach-cho-qua-13-nguoi-chu-va-lai-xe-bi-phat-gan-100-trieu-dong-2408.jpg?width=360&s=okmJGiwWQtMYnJ9x3Q7PLQ"
                        title="Xe khách chở quá 13 người, chủ và tài xế bị phạt gần 100 triệu đồng"
                        link="/chinh-tri/nhiet-dien-nhon-trach-3-4"
                    />
                </div>
            </div>

            <div className="mt-4">
                <NewThreeGrid />
            </div>
            <div className="mt-4">
                <NewVerticalList />
            </div>
             <div className="news-row mt-4">
                <NewsSection sections={listDataNews} />
                <NewsSection sections={listDataNews2} />
            </div>
        </div>

    );
};

export default PoliticsMain;
