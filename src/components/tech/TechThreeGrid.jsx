import { Link } from "react-router-dom";

const TechThreeGrid = () => {
  return (
    <div className="row g-3 tech-three-grid">
      <div className="col-12 col-md-4">
        <Link to="/cong-nghe/ai" className="grid-item">
          <img src="https://static-images.vnncdn.net/files/publish/2023/ai.jpg" />
          <h6>AI tạo sinh đang thay đổi ngành công nghệ</h6>
        </Link>
      </div>

      <div className="col-12 col-md-4">
        <Link to="/cong-nghe/blockchain" className="grid-item">
          <img src="https://static-images.vnncdn.net/files/publish/2023/blockchain.jpg" />
          <h6>Blockchain không chỉ là tiền số</h6>
        </Link>
      </div>

      <div className="col-12 col-md-4">
        <Link to="/cong-nghe/an-ninh-mang" className="grid-item">
          <img src="https://static-images.vnncdn.net/files/publish/2023/security.jpg" />
          <h6>An ninh mạng: Bài toán sống còn</h6>
        </Link>
      </div>
    </div>
  );
};

export default TechThreeGrid;
