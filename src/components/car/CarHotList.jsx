import { Link } from "react-router-dom";

const CarHotList = () => {
  return (
    <div className="car-hot-list">
      <h6 className="hot-title">TIN NỔI BẬT</h6>

      <Link to="/oto/suv-moi-ra-mat" className="hot-item">
        Mẫu SUV 7 chỗ mới ra mắt tại Việt Nam, cạnh tranh Ford Everest
      </Link>

      <Link to="/xe-may/camera-phat-nguoi" className="hot-item">
        Camera phạt nguội hoạt động thế nào? Những lỗi xe máy dễ bị xử phạt
      </Link>

      <Link to="/oto/gia-xang-dau-hom-nay" className="hot-item">
        Giá xăng dầu hôm nay biến động mạnh, tài xế cần lưu ý gì?
      </Link>

      <Link to="/oto/kinh-nghiem-lai-xe-mua-mua" className="hot-item">
        Kinh nghiệm lái ô tô an toàn trong điều kiện mưa lớn, đường trơn trượt
      </Link>
    </div>
  );
};

export default CarHotList;
