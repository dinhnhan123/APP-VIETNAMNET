import { Link } from "react-router-dom";

const HealthHotList = () => {
  return (
    <div className="health-hot-list">

      <h6 className="hot-title">TIN NỔI BẬT</h6>

      <Link to="/suc-khoe/kham-suc-khoe-dinh-ky" className="hot-item">
        Khám sức khỏe định kỳ: Nhiều bệnh nguy hiểm được phát hiện sớm
      </Link>

      <Link to="/suc-khoe/an-uong-lanh-manh" className="hot-item">
        Chuyên gia khuyến cáo 5 thói quen ăn uống giúp tăng cường đề kháng
      </Link>

      <Link to="/suc-khoe/suc-khoe-tinh-than" className="hot-item">
        Áp lực công việc kéo dài: Cảnh báo nguy cơ suy giảm sức khỏe tinh thần
      </Link>

      <Link to="/suc-khoe/tap-the-duc-moi-ngay" className="hot-item">
        Duy trì tập thể dục mỗi ngày mang lại lợi ích gì cho cơ thể?
      </Link>

    </div>
  );
};

export default HealthHotList;
