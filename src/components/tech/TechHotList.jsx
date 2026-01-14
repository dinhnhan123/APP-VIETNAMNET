import { Link } from "react-router-dom";

const TechHotList = () => {
  return (
    <div className="tech-hot-list">

      <h6 className="hot-title">TIN NỔI BẬT</h6>

      <Link to="/cong-nghe/cuoc-dua-ai-chip" className="hot-item">
        Cuộc đua AI và chip bán dẫn đang định hình lại ngành công nghệ toàn cầu
      </Link>

      <Link to="/cong-nghe/smartphone-2025" className="hot-item">
        Smartphone năm 2025 có gì mới: AI on-device lên ngôi
      </Link>

      <Link to="/cong-nghe/an-ninh-mang" className="hot-item">
        Cảnh báo lỗ hổng bảo mật nghiêm trọng trên các thiết bị IoT
      </Link>

      <Link to="/cong-nghe/ung-dung-ai" className="hot-item">
        Doanh nghiệp Việt tăng tốc ứng dụng AI để tối ưu vận hành
      </Link>

    </div>
  );
};

export default TechHotList;
