import { Link } from "react-router-dom";

const PoliticsThreeGrid = () => {
    return (
        <div className="row g-3 politics-three-grid">

            <div className="col-12 col-md-4">
                <Link to="/chinh-tri/giam-hoi-hop" className="grid-item">
                    <img src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/27/an-giang-xu-ly-hanh-chinh-182-ca-nhan-chuyen-co-quan-dieu-tra-8-vu-viec-341.jpg?width=360&s=vQZczMOve0YoNkewbofbSg" alt="" />
                    <h6>
                       An Giang xử lý hành chính 182 cá nhân, chuyển cơ quan điều tra 8 vụ việc
                    </h6>
                </Link>
            </div>

            <div className="col-12 col-md-4">
                <Link to="/chinh-tri/cong-an-nhan-dan" className="grid-item">
                    <img src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/thoi-tiet-dip-nghi-tet-duong-lich-2026-mien-bac-co-the-don-khong-khi-lanh-2201.jpg?width=360&s=D9BXZy6JdgLJ9BvLpiNOlg" alt="" />
                    <h6>
                        Thời tiết dịp nghỉ Tết Dương lịch 2026: Miền Bắc có thể đón không khí lạnh
                    </h6>
                </Link>
            </div>

            <div className="col-12 col-md-4">
                <Link to="/chinh-tri/hai-quan-vung-2" className="grid-item">
                    <img src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/xe-khach-cho-qua-13-nguoi-chu-va-lai-xe-bi-phat-gan-100-trieu-dong-2408.jpg?width=360&s=okmJGiwWQtMYnJ9x3Q7PLQ" alt="" />
                    <h6>
                        Xe khách chở quá 13 người, chủ và tài xế bị phạt gần 100 triệu đồng
                    </h6>
                </Link>
            </div>

        </div>
    );
};

export default PoliticsThreeGrid;
