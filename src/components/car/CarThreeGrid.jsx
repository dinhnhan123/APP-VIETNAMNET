import { Link } from "react-router-dom";

const CarThreeGrid = () => {
  return (
    <div className="row g-3 car-three-grid">

      <div className="col-12 col-md-4">
        <Link to="/oto-xe-may/xu-huong-xe-dien" className="grid-item">
          <img
            src="https://static-images.vnncdn.net/files/publish/2024/12/xe-dien-viet-nam.jpg"
            alt=""
          />
          <h6>
            Xu hướng xe điện tại Việt Nam: Cơ hội và thách thức cho người dùng
          </h6>
        </Link>
      </div>

      <div className="col-12 col-md-4">
        <Link to="/oto-xe-may/suv-7-cho-ban-chay" className="grid-item">
          <img
            src="https://static-images.vnncdn.net/files/publish/2024/12/suv-7-cho.jpg"
            alt=""
          />
          <h6>
            Top SUV 7 chỗ bán chạy nhất Việt Nam nửa đầu năm 2025
          </h6>
        </Link>
      </div>

      <div className="col-12 col-md-4">
        <Link to="/oto-xe-may/so-sanh-sedan-hang-c" className="grid-item">
          <img
            src="https://static-images.vnncdn.net/files/publish/2024/12/sedan-hang-c.jpg"
            alt=""
          />
          <h6>
            So sánh sedan hạng C: Chọn Mazda3, Corolla Altis hay Civic?
          </h6>
        </Link>
      </div>

    </div>
  );
};

export default CarThreeGrid;
