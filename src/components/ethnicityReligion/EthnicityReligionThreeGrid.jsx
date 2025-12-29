import { Link } from "react-router-dom";

const EthnicityReligionThreeGrid = () => {
    return (
        <div className="row g-3 politics-three-grid">

            <div className="col-12 col-md-4">
                <Link to="/chinh-tri/giam-hoi-hop" className="grid-item">
                    <img src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/27/con-dia-chan-bac-toan-cau-gia-tang-dung-dung-ap-dao-vang-904.jpg?width=360&s=VoBX_5NzyDY4ecK_2EcBkw" alt="" />
                    <h6>
                       Cơn địa chấn bạc toàn cầu: Giá tăng dựng đứng, áp đảo vàng
                    </h6>
                </Link>
            </div>

            <div className="col-12 col-md-4">
                <Link to="/chinh-tri/cong-an-nhan-dan" className="grid-item">
                    <img src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/2025-nhieu-yeu-to-nang-do-vang-vuot-dinh-2798.jpg?width=360&s=YgXzuOvoabwVTohwu9neoA" alt="" />
                    <h6>
                        Giá vàng hôm nay 27/12/2025: Nhiều yếu tố nâng đỡ, vàng vượt đỉnh
                    </h6>
                </Link>
            </div>

            <div className="col-12 col-md-4">
                <Link to="/chinh-tri/hai-quan-vung-2" className="grid-item">
                    <img src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/27/vuot-nhieu-chong-gai-the-manh-viet-bang-bang-len-dinh-lich-su-248.png?width=360&s=Y924I9gxk1zf-W5bjlwYAA" alt="" />
                    <h6>
                       Vượt nhiều ‘chông gai’, thế mạnh Việt băng băng lên đỉnh lịch sử
                    </h6>
                </Link>
            </div>

        </div>
    );
};

export default EthnicityReligionThreeGrid;
