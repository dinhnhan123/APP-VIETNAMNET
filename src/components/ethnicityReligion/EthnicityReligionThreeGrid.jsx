import { Link } from "react-router-dom";

const EthnicityReligionThreeGrid = () => {
    return (
        <div className="row g-3 politics-three-grid">

            <div className="col-12 col-md-4">
                <Link to="/chinh-tri/giam-hoi-hop" className="grid-item">
                    <img src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/bo-truong-dao-ngoc-dung-le-tuyen-duong-la-hanh-trang-quy-bau-de-cac-em-tiep-tuc-no-luc-hoc-tap-cong-hien-2501.jpg?width=360&s=fpAVTIBZbyRwQuRPMR_uFQ" alt="" />
                    <h6>
                       Bộ trưởng Đào Ngọc Dung: Lễ Tuyên dương là hành trang quý báu để các em tiếp tục nỗ lực học tập, cống hiến
                    </h6>
                </Link>
            </div>

            <div className="col-12 col-md-4">
                <Link to="/chinh-tri/cong-an-nhan-dan" className="grid-item">
                    <img src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/26/tong-bi-thu-gap-mat-150-hoc-sinh-sinh-vien-thanh-nien-dan-toc-thieu-so-xuat-sac-tieu-bieu-2236.jpg?width=360&s=VDPPCpY0b6J1Qt3DMZaRmA" alt="" />
                    <h6>
                        Tổng Bí thư gặp mặt 150 học sinh, sinh viên, thanh niên dân tộc thiểu số xuất sắc, tiêu biểu
                    </h6>
                </Link>
            </div>

            <div className="col-12 col-md-4">
                <Link to="/chinh-tri/hai-quan-vung-2" className="grid-item">
                    <img src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/25/z7364615723330-7d49b6ba14d75bf73ad902256ce291da-2912.jpg?width=360&s=aRtUCSjLoakQN2og12EoHw" alt="" />
                    <h6>
                      Từ Lễ tuyên dương đến hành trình trưởng thành của thanh niên dân tộc thiểu số
                    </h6>
                </Link>
            </div>

        </div>
    );
};

export default EthnicityReligionThreeGrid;
