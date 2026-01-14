import { Link } from "react-router-dom";

const HealthThreeGrid = () => {
  return (
    <div className="row g-3 health-three-grid">

      <div className="col-12 col-md-4">
        <Link to="/suc-khoe/giam-cang-thang" className="grid-item">
          <img
            src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2024/2/22/giam-stress-17085746054641243650320.jpg"
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
            src="https://suckhoedoisong.qltns.mediacdn.vn/Images/bichvan/2018/08/21/thoi_quen_tot_cho_trai_tim.jpg"
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
            src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2025/3/7/di-bo-2-17407057233711105406964-0-0-438-701-crop-17413565887241933459919.jpg"
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
