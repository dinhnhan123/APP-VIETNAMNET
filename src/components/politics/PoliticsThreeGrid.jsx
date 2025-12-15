import { Link } from "react-router-dom";

const PoliticsThreeGrid = () => {
    return (
        <div className="row g-3 politics-three-grid">

            <div className="col-12 col-md-4">
                <Link to="/chinh-tri/giam-hoi-hop" className="grid-item">
                    <img src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/14/giam-hoi-hop-lanh-dao-ket-luan-khong-qua-50-phut-het-tinh-trang-moi-viec-deu-cho-hop-4530.jpg?width=360&s=hAw-M6KWQwAd4kHPNNNY5Q" alt="" />
                    <h6>
                        Giảm hội họp, lãnh đạo kết luận không quá 50 phút: Hết tình trạng mọi việc đều 'chờ họp'
                    </h6>
                </Link>
            </div>

            <div className="col-12 col-md-4">
                <Link to="/chinh-tri/cong-an-nhan-dan" className="grid-item">
                    <img src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/15/cong-an-nhan-dan-ky-luat-nhat-trung-thanh-nhat-gan-dan-nhat-1271.png?width=360&s=bYF2w1TpXNNBDDTALqt4hw" alt="" />
                    <h6>
                        Công an nhân dân 'kỷ luật nhất - Trung thành nhất - Gần dân nhất'
                    </h6>
                </Link>
            </div>

            <div className="col-12 col-md-4">
                <Link to="/chinh-tri/hai-quan-vung-2" className="grid-item">
                    <img src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/14/mot-ngay-binh-di-noi-dau-song-cua-nhung-nguoi-linh-hai-quan-vung-2-4338.jpg?width=360&s=CE0VtpH6dj2CtAWEVECAtg" alt="" />
                    <h6>
                        Một ngày bình dị nơi đầu sóng của những người lính Hải quân Vùng 2
                    </h6>
                </Link>
            </div>

        </div>
    );
};

export default PoliticsThreeGrid;
