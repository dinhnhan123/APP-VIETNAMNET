import { Link } from "react-router-dom";

const HealthThreeGrid = () => {
  return (
    <div className="row g-3 health-three-grid">

      <div className="col-12 col-md-4">
        <Link to="/suc-khoe/giam-cang-thang" className="grid-item">
          <img
            src="https://static-images.vnncdn.net/health/giam-cang-thang.jpg"
            alt=""
          />
          <h6>
            5 cách giảm căng thẳng hiệu quả giúp cải thiện sức khỏe tinh thần
          </h6>
        </Link>
      </div>

      <div className="col-12 col-md-4">
        <Link to="/suc-khoe/tim-mach" className="grid-item">
          <img
            src="https://static-images.vnncdn.net/health/tim-mach.jpg"
            alt=""
          />
          <h6>
            Những thói quen hàng ngày giúp bảo vệ tim mạch bền vững
          </h6>
        </Link>
      </div>

      <div className="col-12 col-md-4">
        <Link to="/suc-khoe/tap-the-duc" className="grid-item">
          <img
            src="https://static-images.vnncdn.net/health/tap-the-duc.jpg"
            alt=""
          />
          <h6>
            Tập thể dục đúng cách để tăng sức đề kháng và tuổi thọ
          </h6>
        </Link>
      </div>

    </div>
  );
};

export default HealthThreeGrid;
