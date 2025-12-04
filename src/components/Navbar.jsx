import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import logoVN from "../assets/logovietnamnet.png";

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef();

  useEffect(() => {
    if (showSearch && searchRef.current) searchRef.current.focus();
  }, [showSearch]);

  return (
   <div id="header">
     <nav className="navbar navbar-expand-lg bg-white shadow-sm fixed-top">
      <div className="container py-2">

        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <img src={logoVN} alt="logo" height="60" />
          <span className="text-day-now text-gray">Thứ ba, 02/12/2025</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <i class="fa-solid fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse justify-content-end position-relative" id="navbarMenu">
          <ul className="navbar-nav align-items-lg-center gap-lg-2 mt-3 mt-lg-0">

           <li className="nav-item">
            <Link className="nav-link text-gray" to="/cat">Podcast</Link>
          </li>
            <span className="d-none d-lg-inline text-secondary">|</span>
            <li className="nav-item"><a className="nav-link text-gray" href="#">Tuần Việt Nam</a></li>
            <span className="d-none d-lg-inline text-secondary">|</span>

            <li className="nav-item premium">
              <a className="nav-link text-warning fw-bold" href="#">
                <img style={{ width: '89px' }}
                     src="https://vnn-res.vgcloud.vn/ResV9/images/vpremium-menu-logo.svg"
                     alt="Vietnamnet premium" />
              </a>
            </li>
            <li className="nav-item vietnamglobal">
              <a className="nav-link text-warning fw-bold" href="#">
                <img style={{ width: '89px' }}
                     src="https://static.vnncdn.net/v1/icon/VietnamNet_bridge.svg"
                     alt="vietnamglobal" />
              </a>
            </li>

            <span className="d-none d-lg-inline text-secondary">|</span>

            <li className="nav-item d-flex align-items-center gap-2">
              <a href="#" className="nav-link login">
                Đăng nhập <i className="fa-regular fa-user"></i>
              </a>
            </li>

            <li className="nav-item d-flex align-items-center gap-2 ms-lg-2 position-relative">
              
              <i
                className="fa-solid fa-magnifying-glass d-none d-lg-inline"
                style={{ cursor: "pointer" }}
                onClick={() => setShowSearch(!showSearch)}
              ></i>

              
              {(showSearch || window.innerWidth < 768) && (
                <input
                  ref={searchRef}
                  type="text"
                  className="form-control form-control-sm search-input"
                  placeholder="Tìm kiếm..."
                />
              )}
              <button
                className="btn btn-outline-secondary d-lg-none button-search"
                onClick={() => setShowSearch(!showSearch)}
              >
                Tìm kiếm
              </button>

            </li>

          </ul>
        </div>
      </div>
    </nav>
   </div>
  );
};

export default Navbar;
