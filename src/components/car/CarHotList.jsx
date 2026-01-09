import { Link } from "react-router-dom";

const CarHotList = () => {
  return (
    <div className="car-hot-list">
      <h6 className="hot-title">TIN NỔI BẬT</h6>

      <Link to="/oto-xe-may/san-bay-long-thanh" className="hot-item">
        Sân bay Long Thành chuẩn bị đón máy bay lớn nhất vào chiều nay
      </Link>

      <Link to="/oto-xe-may/camera-ai-ha-noi" className="hot-item">
        Gần 2.000 camera AI hoạt động ở Hà Nội: Xe máy che biển số, tài xế nói
        &apos;ai đó nghịch&apos;
      </Link>

      <Link to="/oto-xe-may/phien-toa-phuc-tham" className="hot-item">
        Hình ảnh cựu bí thư Tỉnh ủy Hoàng Thị Thúy Lan tại phiên tòa phúc thẩm
      </Link>

      <Link to="/oto-xe-may/sat-lo-quoc-lo-6" className="hot-item">
        Hiện trường vụ sạt lở kinh hoàng trên QL6 qua Phú Thọ khiến 3 người chết
      </Link>
    </div>
  );
};

export default CarHotList;
