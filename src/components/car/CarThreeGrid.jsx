import { Link } from "react-router-dom";

const CarThreeGrid = () => {
  return (
    <div className="row g-3 car-three-grid">

      <div className="col-12 col-md-4">
        <Link to="/oto-xe-may/xu-huong-xe-dien" className="grid-item">
          <img
            src="https://vioit.org.vn/PublicImages/2023/12/04/XD.jpg"
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
            src="https://cafefcdn.com/203337114487263232/2023/4/13/img-bgt-2021-p2-1658722714-width1200height630-1681359931833-16813599365971860556276.jpg"
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
            src="https://vnn-imgs-a1.vgcloud.vn/images.vov.vn/fb/Uploaded/mGEXs9Y4VchrWhdTzAag/2019_11_14/bia_ULJG.png?width=0&s=4tW5lWj_eO_XyFkgxFsASg"
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
