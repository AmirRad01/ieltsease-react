import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="position-sticky top-0">
      <nav className="navbar navbar-expand-xl first-nav-container">
        <div className="container-fluid first-nav">
          <div className="d-flex">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list"></i>
            </button>
            <div className="head-corner d-flex flex-row d-xl-none align-items-center flex-wrap">
              <ul className="navbar-nav ms-5 d-flex">
                <li>
                  <a className="nav-link" href="#">
                    <i className="bi bi-person-fill me-2"></i>ثبت نام
                  </a>
                </li>
              </ul>
              <div className="searh-box ms-4">
                <i className="bi bi-search"></i>
              </div>
              <input
                type="search"
                name="search"
                placeholder="Search"
                className="ms-3"
              />
            </div>
          </div>
          <div
            className="collapse navbar-collapse nav-items container flex-xl-row"
            id="navbarSupportedContent"
          >
            <hr className="d-xl-none text-white" />
            <div className="social-icon d-flex justify-content-center me-5">
              <a className="nav-link" href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a className="nav-link ms-5 ms-xl-0" href="#">
                <i className="bi bi-twitter"></i>
              </a>
              <a className="nav-link ms-5 ms-xl-0" href="#">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
            <div className="d-lg-flex justify-content-center justify-content-xl-start mt-lg-3 mt-xl-0">
              <ul className="navbar-nav ms-5 mb-lg-0 flex-md-row ">
                <li className="nav-item d-none d-xl-flex">
                  <a className="nav-link" href="#">
                    ثبت نام
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ms-4" href="#">
                    منابع ما
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link ms-4" href="#">
                    میز راهنما
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav ms-5 mb-lg-0 d-xl-none flex-md-row ">
                <li className="nav-item d-none d-xl-block">
                  <a className="nav-link" href="#">
                    <i className="bi bi-search"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ms-4" href="#">
                    وبلاگ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ms-4" href="#">
                    فروشگاه
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ms-4 " href="#">
                    وبلاگ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ms-4" href="#">
                    نمونه کار ها
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link ms-4 dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    صفحات
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item text-dark" to="/">
                        خانه
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-dark" to="/Archive">
                        بایگانی
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link ms-4" to="/">
                    صفحه اصلی
                  </Link>
                </li>
              </ul>
            </div>
            <div className="ms-auto d-flex justify-content-center mt-3 mt-xl-0 align-items-center">
              <div className="phon-number">
                <i className="bi bi-telephone-fill d-none d-lg-flex">
                  <span className="me-2">تلفن : 09153085282 </span>
                </i>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
