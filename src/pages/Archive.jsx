import React from "react";
import { Link } from "react-router-dom";

// Cmps
import ArchiveSection2 from "../CMPs/ArchiveSection2";
import MainSection3 from "../CMPs/MainSection3";
import MainSection5 from "../CMPs/MainSection5";

// images

import headBrandIcn from "../assets/images/brand-icon.png";
import headBrandIcn2 from "../assets/images/brand-icon2.png";
import PTE from "../assets/images/PTE.png";
import ieltsAcadomy from "../assets/images/ielts-academic.png";
import conversation from "../assets/images/english-conversation.jpg";
import eyeIcn from "../assets/images/eye-icon.jpg";
import travelIcn from "../assets/images/travel-lego.jpg";
import htmlIcn from "../assets/images/HTML-lego.png";
import consultIcn from "../assets/images/consult-lego.jpg";
import mainIeltsImage from "../assets/images/ielts2.jpg";
import listImage1 from "../assets/images/list-image1.jpg";
import listImage2 from "../assets/images/list-image2.jpg";

function Archive() {
  const Section2 = [
    {
      image: listImage2,
      title:
        "دو خط توضیح کوتاه در مورد این خبر دو خط توضیح کوتاه در مورد این خبر دو خط توضیح کوتاه در مورد این خبر دراینجا قرار میگیره.",
      head: "عنوان این خبر اینجا قرار میگیره",
      date: "25 خرداد 1398",
    },
    {
      image: listImage1,
      title:
        "دو خط توضیح کوتاه در مورد این خبر دو خط توضیح کوتاه در مورد این خبر دو خط توضیح کوتاه در مورد این خبر دراینجا قرار میگیره.",
      head: "عنوان این خبر اینجا قرار میگیره",
      date: "25 خرداد 1398",
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
  return (
    <div className="archive-body">
      <header>
        <div
          className="archive-second-nav-container d-none d-md-block"
          id="headerStyle"
        >
          <div className="header-title mt-4 container d-flex flex-column">
            <div className="brand-icon-corner  d-xl-none mb-4 d-flex justify-content-center">
              <Link to="/">
                <img src={headBrandIcn} alt="brand-icon" />
              </Link>
            </div>
            <div className="container header-content-container">
              <div className="h-title d-none d-lg-block">
                <h2 className="p-header-bold d-none d-lg-block">
                  عنوان این مطلب در این بالا قرار می گیرد و میتونه دراز باشه
                </h2>
                <p className="d-none d-lg-block">
                  دسته بندی: مطالب آیلتس / 28 آذر 1398
                </p>
                <div className="slider">
                  <button className="slide" onclick="change1()"></button>
                  <button className="slide me-1" onclick="change2()"></button>
                  <button className="slide me-1" onclick="change3()"></button>
                </div>
              </div>
              <div className="brand-icon me-auto d-none d-xl-flex">
                <Link to="/">
                  <img src={headBrandIcn} alt="brand-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="main-holder flex-column flex-lg-row">
          <div className="main-container mt-5 container-sm flex-grow-1">
            <section className="archive-section1">
              <article>
                این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری
                ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد
                دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ
                کابرد دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است
                و هیچ کابرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون
                است و هیچ کابرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی
                متون است و هیچ کابرد دیگری ندارد. این یک متن آزمایشی برای تست
                جانمایی متون است و هیچ کابرد دیگری ندارد.این یک متن آزمایشی برای
                تست جانمایی متون است و هیچ کابرد دیگری ندارد.این یک متن آزمایشی
                برای تست جانمایی متون است و هیچ کابرد دیگری ندارد. این یک متن
                آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری ندارد.این یک
                متن آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری
                ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد
                دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ
                کابرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و
                هیچ کابرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون
                است و هیچ کابرد دیگری ندارد. این یک متن آزمایشی برای تست جانمایی
                متون است و هیچ کابرد دیگری ندارد.این یک متن آزمایشی برای تست
                جانمایی متون است و هیچ کابرد دیگری ندارد.این یک متن آزمایشی برای
                تست جانمایی متون است و هیچ کابرد دیگری ندارد. این یک متن آزمایشی
                برای تست جانمایی متون است و هیچ کابرد دیگری ندارد.این یک متن
                آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری ندارد.این یک
                متن آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری ندارد.
              </article>
              <article className="container d-none d-sm-block">
                <div className="main-ietls-img container mt-5 mb-5">
                  <img src={mainIeltsImage} alt="ielts" />
                </div>
              </article>
              <article>
                این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری
                ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد
                دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ
                کابرد دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است
                و هیچ کابرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون
                است و هیچ کابرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی
                متون است و هیچ کابرد دیگری ندارد. این یک متن آزمایشی برای تست
                جانمایی متون است و هیچ کابرد دیگری ندارد.این یک متن آزمایشی برای
                تست جانمایی متون است و هیچ کابرد دیگری ندارد.این یک متن آزمایشی
                برای تست جانمایی متون است و هیچ کابرد دیگری ندارد. این یک متن
                آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری ندارد.این یک
                متن آزمایشی برای تست جانمایی متون است و هیچ کابرد دیگری
                ندارد.این یک متن آزمایشی برای تست جانمایی متون است و هیچ کابرد
                دیگری ندارد. این یک متن آزمایشی برای تست جانمایی متون است و هیچ
                کابرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون است و
                هیچ کابرد دیگری ندارد.این یک متن آزمایشی برای تست جانمایی متون
                است و هیچ کابرد دیگری ندارد.
              </article>
            </section>
            <section className="archive-section2 mt-5 d-none d-sm-block">
              <h4 className="section2-list-header"> مطالب مرتبط </h4>
              <div className="section2-list-container">
                {Section2.map((item, index) => (
                  <ArchiveSection2
                    key={index}
                    title={item.title}
                    image={item.image}
                    date={item.date}
                    head={item.head}
                  />
                ))}
              </div>
            </section>
          </div>
          <aside className="col-lg-4 col-12 container">
            <article className=" Archive-article1  d-none d-lg-flex justify-content-center mb-4">
              <img
                src={headBrandIcn2}
                alt="brand-icon"
                className="mt-5 mb-5 col-12"
              />
            </article>
            <article className=" main-article2 mb-4">
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
            <article className="aside-list mb-4 col-12">
              <ul>
                <li className="aside-list-head mb-4"> یک فهرست</li>
                <li className="aside-list-item mb-2">
                  <a href="#"> این یک متن آزمایشی برای تست جاینمایی متون است</a>
                </li>
                <li className="aside-list-item mb-2">
                  <a href="#"> و هیچ کاربرد دیگری ندارد</a>
                </li>
                <li className="aside-list-item mb-2">
                  <a href="#"> این یک متن آزمایشی برای تست جاینمایی متون است</a>
                </li>
                <li className="aside-list-item mb-2">
                  <a href="#"> و هیچ کاربرد دیگری ندارد</a>
                </li>
                <li className="aside-list-item mb-2">
                  <a href="#"> این یک متن آزمایشی برای تست جاینمایی متون است</a>
                </li>
                <li className="aside-list-item mb-2">
                  <a href="#"> و هیچ کاربرد دیگری ندارد</a>
                </li>
                <li className="aside-list-item mb-2">
                  <a href="#"> این یک متن آزمایشی برای تست جاینمایی متون است</a>
                </li>
                <li className="aside-list-item mb-2">
                  <a href="#"> و هیچ کاربرد دیگری ندارد</a>
                </li>
              </ul>
            </article>
          </aside>
        </div>
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
      </main>
    </div>
  );
}

export default Archive;
