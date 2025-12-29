import { Link } from "react-router-dom";
import FeaturedArticle from "./FeaturedArticle.jsx";
import SubArticleItem from "./SubArticleItem.jsx";
import EthnicityReligionThreeGrid from "./EthnicityReligionThreeGrid.jsx";
import EthnicityReligionVerticalList from "./EthnicityReligionVerticalList.jsx";
import EthnicityReligionSection from "./EthnicityReligionSection.jsx";
import {
    listDataEthnicityReligions,
    listDataEthnicityReligions1
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
                        image="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/27/thang-2007.jpeg?width=360&s=YsH6POEPwDKLnWSYWh1DUg"
                        title="Mỗi học sinh xã biên giới được Nhà nước hỗ trợ 450.000 đồng và 8kg gạo/tháng"
                        link="/chinh-tri/hoi-huong-hai-cot-quan-nhan-my"
                    />

                    <SubArticleItem
                        image="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/tong-bi-thu-neu-3-yeu-cau-tiep-tuc-cham-lo-boi-duong-the-he-tre-nguoi-dan-toc-thieu-so-2457.jpg?width=360&s=KidZau04htGWagN8vyALBw"
                        title="Tổng Bí thư nêu 3 yêu cầu tiếp tục chăm lo bồi dưỡng thế hệ trẻ người dân tộc thiểu số"
                        link="/chinh-tri/nhiet-dien-nhon-trach-3-4"
                    />
                    <SubArticleItem
                        image="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/25/z7364615723330-7d49b6ba14d75bf73ad902256ce291da-2912.jpg?width=360&s=aRtUCSjLoakQN2og12EoHw"
                        title="Từ Lễ tuyên dương đến hành trình trưởng thành của thanh niên dân tộc thiểu số"
                        link="/chinh-tri/nhiet-dien-nhon-trach-3-4"
                    />
                    <SubArticleItem
                        image="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/25/z7364615723330-7d49b6ba14d75bf73ad902256ce291da-2912.jpg?width=360&s=aRtUCSjLoakQN2og12EoHw"
                        title="Từ Lễ tuyên dương đến hành trình trưởng thành của thanh niên dân tộc thiểu số"
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
                <EthnicityReligionSection sections={listDataEthnicityReligions} />
                <EthnicityReligionSection sections={listDataEthnicityReligions1} />
            </div>
        </div>

    );
};

export default EthnicityReligionMain;
