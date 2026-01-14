import { Link } from "react-router-dom";

const TechThreeGrid = () => {
  return (
    <div className="row g-3 tech-three-grid">

      <div className="col-12 col-md-4">
        <Link to="/cong-nghe/ai-ung-dung" className="grid-item">
          <img
            src="https://static-images.vnncdn.net/tech/ai-ung-dung.jpg"
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
            src="https://static-images.vnncdn.net/tech/bao-mat-du-lieu.jpg"
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
            src="https://static-images.vnncdn.net/tech/san-pham-moi.jpg"
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
