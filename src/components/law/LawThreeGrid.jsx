import { Link } from "react-router-dom";

const LawThreeGrid = () => {
  return (
    <div className="row g-3 law-three-grid">
      <div className="col-12 col-md-4">
        <Link to="/phap-luat/xet-xu-vu-an" className="grid-item">
          <img
            src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/14/phien-toa-xet-xu-vu-an-kinh-te-001.jpg?width=360"
            alt=""
          />
          <h6>
            Xét xử vụ án kinh tế lớn, nhiều bị cáo đối mặt mức án nghiêm khắc
          </h6>
        </Link>
      </div>

      <div className="col-12 col-md-4">
        <Link to="/phap-luat/cong-an-dieu-tra" className="grid-item">
          <img
            src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/15/cong-an-dieu-tra-vu-an-hinh-su-002.jpg?width=360"
            alt=""
          />
          <h6>
            Công an mở rộng điều tra vụ việc có dấu hiệu vi phạm hình sự
          </h6>
        </Link>
      </div>

      <div className="col-12 col-md-4">
        <Link to="/phap-luat/luat-moi-co-hieu-luc" className="grid-item">
          <img
            src="https://static-images.vnncdn.net/vps_images_publish/000001/000003/2025/12/14/luat-moi-co-hieu-luc-003.jpg?width=360"
            alt=""
          />
          <h6>
            Nhiều quy định pháp luật mới chính thức có hiệu lực từ năm 2025
          </h6>
        </Link>
      </div>
    </div>
  );
};

export default LawThreeGrid;
