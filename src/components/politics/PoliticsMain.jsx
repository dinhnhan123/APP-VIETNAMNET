import { Link } from "react-router-dom";
import FeaturedArticle from "../politics/FeaturedArticle.jsx";
import SubArticleItem from "../politics/SubArticleItem.jsx";
import PoliticsThreeGrid from "../politics/PoliticsThreeGrid.jsx";
import PoliticsVerticalList from "../politics/PoliticsVerticalList.jsx";
//style 
import "../../styles/politics/politicsThreeGrid.css"
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
                        image="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/14/bai-hoc-tu-chau-au-co-the-giup-viet-nam-giam-gan-80-muc-o-nhiem-khong-khi-430.jpg?width=360&s=Am3rAKrcxBNz7B1sh9Leww"
                        title="Hồi hương hài cốt quân nhân Mỹ mất tích trong chiến tranh tại Việt Nam"
                        link="/chinh-tri/hoi-huong-hai-cot-quan-nhan-my"
                    />

                    <SubArticleItem
                        image="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/13/hoi-huong-hai-cot-quan-nhan-my-mat-tich-trong-chien-tranh-tai-viet-nam-1922.jpg?width=360&s=_hTdhx8GryeJLX_udNkZ8w"
                        title="Thủ tướng: Dự án Nhiệt điện Nhơn Trạch 3 và 4 thể hiện tinh thần, bản lĩnh, trí tuệ Việt Nam"
                        link="/chinh-tri/nhiet-dien-nhon-trach-3-4"
                    />
                    <SubArticleItem
                        image="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/13/hoi-huong-hai-cot-quan-nhan-my-mat-tich-trong-chien-tranh-tai-viet-nam-1922.jpg?width=360&s=_hTdhx8GryeJLX_udNkZ8w"
                        title="Thủ tướng: Dự án Nhiệt điện Nhơn Trạch 3 và 4 thể hiện tinh thần, bản lĩnh, trí tuệ Việt Nam"
                        link="/chinh-tri/nhiet-dien-nhon-trach-3-4"
                    />
                    <SubArticleItem
                        image="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/13/hoi-huong-hai-cot-quan-nhan-my-mat-tich-trong-chien-tranh-tai-viet-nam-1922.jpg?width=360&s=_hTdhx8GryeJLX_udNkZ8w"
                        title="Thủ tướng: Dự án Nhiệt điện Nhơn Trạch 3 và 4 thể hiện tinh thần, bản lĩnh, trí tuệ Việt Nam"
                        link="/chinh-tri/nhiet-dien-nhon-trach-3-4"
                    />
                </div>
            </div>

            <div className="mt-4">
                <PoliticsThreeGrid/>
            </div>
              <div className="mt-4">
                <PoliticsVerticalList/>
            </div>
        </div>
    );
};

export default PoliticsMain;
