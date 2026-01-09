import { Link } from "react-router-dom";

const LawHotList = () => {
  return (
    <div className="law-hot-list">
      <h6 className="hot-title">TIN NỔI BẬT</h6>

      <Link to="/phap-luat/xet-xu-vu-an-kinh-te" className="hot-item">
        Xét xử vụ án kinh tế lớn, nhiều bị cáo đối mặt mức án nghiêm khắc
      </Link>

      <Link to="/phap-luat/camera-ai-giam-sat" className="hot-item">
        Camera AI giám sát giao thông: Nhiều trường hợp vi phạm bị xử phạt
      </Link>

      <Link to="/phap-luat/phien-toa-phuc-tham" className="hot-item">
        Hình ảnh các bị cáo tại phiên tòa phúc thẩm vụ án nghiêm trọng
      </Link>

      <Link to="/phap-luat/lua-dao-cong-nghe-cao" className="hot-item">
        Gia tăng các vụ lừa đảo công nghệ cao, người dân cần nâng cao cảnh giác
      </Link>
    </div>
  );
};

export default LawHotList;
