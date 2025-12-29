import { Link } from "react-router-dom";
import FeaturedArticle from "./FeaturedArticle.jsx";
import SubArticleItem from "./SubArticleItem.jsx";
import EthnicityReligionThreeGrid from "./EthnicityReligionThreeGrid.jsx";
import EthnicityReligionVerticalList from "./EthnicityReligionVerticalList.jsx";
import EthnicityReligionSection from "./EthnicityReligionSection.jsx";
import {
    listDataBusiness,
    listDataBusiness1
} from "../../fakeApi.jsx";
//style 
import "../../styles/ethnicityReligion/EthnicityReligionSection.css";
const EthnicityReligionMain = () => {
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
                        image="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/27/ghe-nong-ngan-hang-hinh-anh-moi-cua-bau-thuy-ba-nguyen-thanh-phuong-rut-khoi-hdqt-918.jpg?width=360&s=13GGKj1FRAvAl0n5FAoQEg"
                        title="‘Ghế nóng’ ngân hàng: Hình ảnh mới của 'bầu Thuỵ', bà Nguyễn Thanh Phượng rút khỏi HĐQT"
                        link="/chinh-tri/hoi-huong-hai-cot-quan-nhan-my"
                    />

                    <SubArticleItem
                        image="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/27/hang-khong-1-923.jpg?width=360&s=9LxR7G9lSJ2nj8DaclLQOQ"
                        title="Vượt đỉnh trước dịch, hàng không Việt Nam tạo đà ‘cất cánh’"
                        link="/chinh-tri/nhiet-dien-nhon-trach-3-4"
                    />
                    <SubArticleItem
                        image="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/27/vuot-nhieu-chong-gai-the-manh-viet-bang-bang-len-dinh-lich-su-248.png?width=360&s=Y924I9gxk1zf-W5bjlwYAA"
                        title="Vượt nhiều ‘chông gai’, thế mạnh Việt băng băng lên đỉnh lịch sử"
                        link="/chinh-tri/nhiet-dien-nhon-trach-3-4"
                    />
                   <SubArticleItem
                        image="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/27/vuot-nhieu-chong-gai-the-manh-viet-bang-bang-len-dinh-lich-su-248.png?width=360&s=Y924I9gxk1zf-W5bjlwYAA"
                        title="Vượt nhiều ‘chông gai’, thế mạnh Việt băng băng lên đỉnh lịch sử"
                        link="/chinh-tri/nhiet-dien-nhon-trach-3-4"
                    />
                </div>
            </div>

            <div className="mt-4">
                <EthnicityReligionThreeGrid />
            </div>
            <div className="mt-4">
                <EthnicityReligionVerticalList />
            </div>
             <div className="news-row mt-4">
                <EthnicityReligionSection sections={listDataBusiness} />
                <EthnicityReligionSection sections={listDataBusiness1} />
            </div>
        </div>

    );
};

export default EthnicityReligionMain;
