import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css"
import logoVN from "../assets/logovietnamnet.png";
const Footer = () => {
  const menu1 = ["Chính trị", "Thời sự", "Kinh doanh", "Dân tộc và Tôn giáo", "Thể thao"];
  const menu2 = ["Thế giới", "Đời sống", "Văn hoá - Giải trí", "Sức khỏe", "Công nghệ"];
  const menu3 = ["Toàn văn", "Công nghiệp hỗ trợ", "Bảo vệ người tiêu dùng", "Thị trường tiêu dùng", "Giảm nghèo bền vững"];
  const menu4 = ["Ảnh", "Video", "Multimedia", "Podcast", "24h qua"];

  const makeLink = (text) =>
    "/" + text.toLowerCase().replaceAll(" ", "-");

  return (
    <footer className="bg-light border-top mt-5 pt-4">
      <div className="container top-footer">

        <div className="row text-start mb-4">
          
          <div className="col-md-3 col-6 mb-3">
            <h6 className="fw-bold text-danger">
                <img style={{ width: '89px' }}
                     src="https://vnn-res.vgcloud.vn/ResV9/images/vpremium-menu-logo.svg"
                     alt="Vietnamnet premium" />
            </h6>
            <ul className="list-unstyled">
              {menu1.map((item, i) => (
                <li key={i}>
                  <Link to={makeLink(item)}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-3 col-6 mb-3">
            <h6 className="fw-bold">Giáo dục</h6>
            <ul className="list-unstyled">
              {menu2.map((item, i) => (
                <li key={i}>
                  <Link to={makeLink(item)}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-3 col-6 mb-3">
            <h6 className="fw-bold text-warning">
                <img style={{ width: '89px' }}
                     src="https://static.vnncdn.net/v1/icon/vnn/vnn-logo-hanh-trinh-vn.svg?v=06062023"
                     alt="logo-hanh-trinh-vn" />
            </h6>
            <ul className="list-unstyled">
              {menu3.map((item, i) => (
                <li key={i}>
                  <Link to={makeLink(item)}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-md-3 col-6 mb-3">
            <h6 className="fw-bold">Nông thôn mới</h6>
            <ul className="list-unstyled">
              {menu4.map((item, i) => (
                <li key={i}>
                  <Link to={makeLink(item)}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <hr />

        <div className="row mt-4 wp-bottom-footer justify-content-between">

          <div className="col-md-4 mb-3 text-start box-bottom-footer">
            <img
              src={logoVN}
              alt="logo"
              width="150"
              className="mb-2"
            />

            <p className="mb-1">Cơ quan chủ quản: Bộ Dân Tộc và Tôn Giáo</p>
            <p className="mb-1">Số giấy phép: 146/GP-BVHTTDL, ngày 17/10/2025</p>
            <p className="mb-1">
              Tổng biên tập: <strong>Nguyễn Văn Bá</strong>
            </p>

            <button className="btn btn-light border mt-2">
              Liên hệ tòa soạn
            </button>

            <p className="mt-3">
              Địa chỉ: Tầng 18, Tòa nhà Cục Viễn thông (VNTA), 68 Dương Đình Nghệ, Hà Nội.
            </p>
          </div>

          <div className="col-md-4 mb-3 text-start box-bottom-footer">
            <h6 className="fw-bold">Công ty Cổ phần Truyền thông VietNamNet</h6>

            <p className="mb-1">Hotline: 0919405885 (Hà Nội) – 0919435885 (TP.HCM)</p>
            <p className="mb-1">Email: contact@vietnamnet.vn</p>
            <p className="mb-1">Báo giá: http://vads.vn</p>
            <p className="mb-1">Hỗ trợ kỹ thuật: support@tech.vietnamnet.vn</p>
          </div>

          <div className="col-md-4 mb-3 text-start box-bottom-footer">
            <h6 className="fw-bold">Theo dõi VietNamNet trên</h6>

            <div className="d-flex gap-3 fs-4 mb-3 wp-icon-bottom-footer">
              <i className="fab fa-facebook"></i>
              <i className="fab fa-youtube"></i>
              <i className="fab fa-tiktok"></i>
              <i className="fab fa-instagram"></i>
              <i className="fas fa-comments"></i>
            </div>

            <div className="footer-links-extra">
              <p className="mb-1">Tải ứng dụng</p>
              <p className="mb-1">Độc giả gửi bài</p>
              <p className="mb-1">Tuyển dụng</p>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
