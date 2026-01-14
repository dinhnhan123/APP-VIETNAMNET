import { Link } from "react-router-dom";

const TechThreeGrid = () => {
  return (
    <div className="row g-3 tech-three-grid">

      <div className="col-12 col-md-4">
        <Link to="/cong-nghe/ai-ung-dung" className="grid-item">
          <img
            src="https://vinuni.edu.vn/wp-content/uploads/2024/12/tri-tue-nhan-tao-trong-doi-song-cuoc-cach-mang-thay-doi-moi-mat-xa-hoi.png"
            alt=""
          />
          <h6>
            Trí tuệ nhân tạo đang thay đổi cách chúng ta làm việc mỗi ngày
          </h6>
        </Link>
      </div>

      <div className="col-12 col-md-4">
        <Link to="/cong-nghe/bao-mat-du-lieu" className="grid-item">
          <img
            src="https://cdnv2.tgdd.vn/mwg-static/common/News/1569761/bao-ve-d%C6%B0-lieu-ca-nhan-1.jpg"
            alt=""
          />
          <h6>
            6 thói quen bảo mật dữ liệu cá nhân ai cũng nên biết
          </h6>
        </Link>
      </div>

      <div className="col-12 col-md-4">
        <Link to="/cong-nghe/san-pham-moi" className="grid-item">
          <img
            src="https://cdn-images.vtv.vn/zoom/563_351/66349b6076cb4dee98746cf1/2026/01/03/iphone-17-17110653213161476041897-85067204773135510295825.jpg"
            alt=""
          />
          <h6>
            Những sản phẩm công nghệ mới đáng chú ý ra mắt cuối năm
          </h6>
        </Link>
      </div>

    </div>
  );
};

export default TechThreeGrid;
