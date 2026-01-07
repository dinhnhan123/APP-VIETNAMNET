import { Link } from "react-router-dom";

const TechHotList = () => {
  return (
    <div className="tech-hot-list">
      <h6 className="hot-title">TIN CÔNG NGHỆ NỔI BẬT</h6>

      <Link to="/cong-nghe/ai-viet-nam" className="hot-item">
        AI Việt Nam tăng tốc, nhiều startup gọi vốn triệu USD
      </Link>

      <Link to="/cong-nghe/iphone-16" className="hot-item">
        iPhone 16 lộ diện: Camera AI, pin cải tiến mạnh
      </Link>

      <Link to="/cong-nghe/an-ninh-mang" className="hot-item">
        Cảnh báo lỗ hổng bảo mật nghiêm trọng trên Android
      </Link>

      <Link to="/cong-nghe/chip-ban-dan" className="hot-item">
        Cuộc đua chip bán dẫn tại châu Á ngày càng nóng
      </Link>
    </div>
  );
};

export default TechHotList;
