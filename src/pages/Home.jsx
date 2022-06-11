import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Cmps
import MainSection2 from "../CMPs/MainSection2";
import MainSection3 from "../CMPs/MainSection3";
import MainSection4 from "../CMPs/MainSection4";
import MainSection5 from "../CMPs/MainSection5";
import MainSection6 from "../CMPs/MainSection6";

// images

import headBrandIcn from "../assets/images/brand-icon.png";
import headBrandIcn2 from "../assets/images/brand-icon2.png";
import carIcn from "../assets/images/car-icon.png";
import timerIcn from "../assets/images/timer-icon.png";
import leaveIcn from "../assets/images/leaves.jpg";
import earthIcn from "../assets/images/earth.jpg";
import mapIcn from "../assets/images/map.png";
import headphonIcn from "../assets/images/headphon.png";
import PTE from "../assets/images/PTE.png";
import ieltsAcadomy from "../assets/images/ielts-academic.png";
import conversation from "../assets/images/english-conversation.jpg";
import mainIcn1 from "../assets/images/m-pic3.jpg";
import mainIcn2 from "../assets/images/m-pic2.jpg";
import mainIcn3 from "../assets/images/m-pic1.jpg";
import mainIcn4 from "../assets/images/m-pic4.jpg";
import eyeIcn from "../assets/images/eye-icon.jpg";
import travelIcn from "../assets/images/travel-lego.jpg";
import htmlIcn from "../assets/images/HTML-lego.png";
import consultIcn from "../assets/images/consult-lego.jpg";
import packageImage1 from "../assets/images/package-imag1.jpg";
import packageImage2 from "../assets/images/package-imag2.jpg";
import packageImage3 from "../assets/images/package-imag3.jpg";
import packageImage4 from "../assets/images/package-imag4.jpg";

function Home() {
  const Section2 = [
    {
      headTitle: "این همان عنوان مطلب است",
      title:
        "این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری ندارد.",
      iconImage: carIcn,
    },
    {
      headTitle: "این همان عنوان مطلب است",
      title:
        "این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری ندارد.",
      iconImage: timerIcn,
      style: { backgroundColor: "#f97848" },
    },
    {
      headTitle: "این همان عنوان مطلب است",
      title:
        "این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری ندارد.",
      iconImage: leaveIcn,
      style: { backgroundColor: "#fbc843" },
    },
    {
      headTitle: "این همان عنوان مطلب است",
      title:
        "این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری ندارد.",
      iconImage: earthIcn,
      style: { backgroundColor: "#ed6c6c" },
    },
    {
      headTitle: "این همان عنوان مطلب است",
      title:
        "این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری ندارد.",
      iconImage: mapIcn,
      style: { backgroundColor: "#cc8cd8" },
    },
    {
      headTitle: "این همان عنوان مطلب است",
      title:
        "این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری ندارد.",
      iconImage: headphonIcn,
      style: { backgroundColor: "#75d8f1" },
    },
  ];

  const packages = [
    {
      packageName: "آیلتس آکادمیک",
      teacherName: " سید محمد امین سجادی ",
      offer: "28,000",
      price: "21,000",
      image: PTE,
    },
    {
      packageName: "آموزش آزمون زبان PTE Academic",
      teacherName: " امید ",
      offer: "30,000",
      price: "20,000",
      image: ieltsAcadomy,
    },
    {
      packageName: "مکالمه انگلیسی(سطح مقدماتی)",
      teacherName: " علی کیانپور ",
      offer: "20,000",
      price: "10,800",
      image: conversation,
    },
  ];

  const section4 = [
    {
      icon: mainIcn1,
      head: " حرفه ای شو",
      title:
        " چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبودابزارهای کاربدی میباشند",
    },
    {
      icon: mainIcn2,
      head: " مهارت خود را بالا ببر",
      title:
        " چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبودابزارهای کاربدی میباشند",
    },
    {
      icon: mainIcn3,
      head: " حرفه ای شصرفه جویی در زمان",
      title:
        " چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبودابزارهای کاربدی میباشند",
    },
    {
      icon: mainIcn4,
      head: " خود را بیاموز",
      title:
        " چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبودابزارهای کاربدی میباشند",
    },
  ];

  const section5 = [
    {
      icon: eyeIcn,
    },
    {
      icon: travelIcn,
    },
    {
      icon: htmlIcn,
    },
    {
      icon: consultIcn,
    },
    {
      icon: travelIcn,
    },
    {
      icon: eyeIcn,
    },
    {
      icon: htmlIcn,
    },
  ];

  const section6 = [
    {
      date: "23 خرداد 1397",
      image: packageImage1,
      head: "بازتاب فصل فجر",
      title: "طراحی",
    },
    {
      date: "23 خرداد 1397",
      image: packageImage2,
      head: "زن و شوهر از دانشجویان دانشگاه هپی فارغ التحصیل شد",
      title: "آکادمی ها",
    },
    {
      date: "23 خرداد 1397",
      image: packageImage3,
      head: "شگفت انگیز است که دوست هایی را که توسعه میابند ببینند",
      title: "طراحی",
    },
    {
      date: "23 خرداد 1397",
      image: packageImage4,
      head: "نکات مفید برای ایجاد یک بحث با کیفیت",
      title: "دولت",
    },
  ];

  // change-Style

  const [inputStyle, setInputStyle] = useState(false);
  const showSearchBox = () => {
    setInputStyle(!inputStyle);
  };

  return (
    <div className="home-body">
      <header>
        <div className="second-nav-container d-none d-md-block">
          <nav className=" navbar-expand-xl second-nav d-none d-xl-block">
            <div className="container-fluid">
              <div
                className="collapse navbar-collapse nav-items flex-xl-row container align-items-start"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-5 mb-lg-0 align-items-center mt-5">
                  <li className="nav-item d-none d-xl-block">
                    <a
                      className="nav-link fw-bolder"
                      id="searchIcn"
                      onClick={showSearchBox}
                      href="#"
                    >
                      <i className="bi bi-search"></i>
                    </a>
                  </li>
                  <li className="nav-item d-none d-xl-block">
                    {inputStyle==true ? (
                      <input
                        type="search"
                        name="searchBox"
                        id="searchBox"
                        placeholder="Search"
                      />
                    ) : (
                      ""
                    )}
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
                  <li className="nav-item">
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
                        <Link className="dropdown-item" to="/">
                          خانه
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/Archive">
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
                <div className="brand-icon ms-auto d-none d-xl-flex mt-5">
                  <Link to="/">
                    <img src={headBrandIcn} alt="brand-icon" />
                  </Link>
                </div>
              </div>
            </div>
          </nav>
          <div className="header-title mt-4 container d-flex flex-column">
            <div className="brand-icon-corner  d-xl-none mb-4 d-flex justify-content-center">
              <Link to="/">
                <img src={headBrandIcn} alt="brand-icon" />
              </Link>
            </div>
            <p className="head-p1 d-none d-lg-block">
              ___ ما برای پیدا کردن نیاز های خود همکاری میکنیم
            </p>
            <p className="head-p2 d-none d-lg-block">
              ما مردم را با یکدیگر <span>متحد می کنیم. </span>
            </p>
            <p className="head-p3 d-none d-lg-block mt-2">
              مفهوم یک شرکت مشاوره مدریریت در نیویورک است که متخصص در ساخت مدل
              سازی اطلاعات است.
            </p>
            <a href="#">
              <button className="head-btn mt-4 mb-5 d-none d-lg-block">
                شروع کنید
              </button>
            </a>
          </div>
        </div>
      </header>
      <main>
        <section className=" main-section1 d-flex flex-column flex-md-row w-100 ">
          <article className=" main-article1  d-flex justify-content-center col-12 col-md-6">
            <img src={headBrandIcn2} alt="brand-icon" className="mt-5 mb-5" />
          </article>
          <article className=" main-article2 col-12 col-md-6">
            <div className="article2-title container">
              <h3>این همان عنوان مطلب است</h3>
              <br />
              <p>
                این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری
                ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد
                دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ
                کابرد دیگری ندارد.
              </p>
              <a href="#">
                <button className="article2-btn ">بیشتر بدانید</button>
              </a>
            </div>
          </article>
        </section>
        <section className="main-section2">
          <div className="section2-title container mt-5">
            <h3>آخرین دوره های آیلتس ایز</h3>
            <h5 className="mt-4 mb-5">چرا باید آیلتس ایز را انتحاب کنیم؟</h5>
          </div>
          <div className="main-section2-container mt-5">
            <div className="container mb-5">
              <div className="row">
                {Section2.map((item, index) => (
                  <MainSection2
                    key={index}
                    headTitle={item.headTitle}
                    title={item.title}
                    iconImage={item.iconImage}
                    style={item.style}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="main-section3">
          <div className="section2-title container mt-5">
            <h3>آخرین دوره های آیلتس ایز</h3>
            <h5 className="mt-4 mb-5">چرا باید آیلتس ایز را انتحاب کنیم؟</h5>
          </div>
          <div className="container d-flex flex-wrap justify-content-center packages-container">
            {packages.map((item, index) => (
              <MainSection3
                key={index}
                packageName={item.packageName}
                offer={item.offer}
                teacherName={item.teacherName}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </section>
        <section className="main-section4">
          <div className="section4-title container mt-5">
            <h3>آخرین دوره های آیلتس ایز</h3>
            <h5 className="mt-4 mb-5">چرا باید آیلتس ایز را انتحاب کنیم؟</h5>
          </div>
          <div className=" d-flex flex-wrap justify-content-center main-icon2-container">
            {section4.map((item, index) => (
              <MainSection4
                key={index}
                title={item.title}
                icon={item.icon}
                head={item.head}
              />
            ))}
          </div>
        </section>
        <section className="main-section5">
          <div className="section4-title container mt-5">
            <h3>همکاران ما </h3>
            <h5 className="mt-4 mb-5">بهترین کادر آموزشی برای فرزندان شما </h5>
          </div>
          <div className=" d-flex flex-wrap justify-content-center main-icon3-container">
            {section5.map((item, index) => (
              <MainSection5 icon={item.icon} key={index} />
            ))}
          </div>
        </section>
        <section className="main-section6">
          <div className="section6-title container mt-5">
            <h3>آخرین دوره های آیلتس ایز</h3>
            <h5 className="mt-4">چرا باید آیلتس ایز را انتحاب کنیم؟</h5>
          </div>
          <div className="section6-btn container mb-5">
            <button className="">نمایش همه مطالب </button>
          </div>
          <div className="d-flex flex-wrap justify-content-center packages2-container">
            {section6.map((item, index) => (
              <MainSection6
                key={index}
                image={item.image}
                title={item.title}
                head={item.head}
                date={item.date}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
