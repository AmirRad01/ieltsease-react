import React from 'react'

function Footer() {
  return (
    <footer>
        <section className="footer1">
            <div className="footer-list-container flex-wrap">
                <div className="footer-lists">
                    <ul>
                        <li className="list1-header mb-5">تماس با ما</li>
                        <li className="list1-elm">
                            <div className="list1-elm-header mb-2">شهر زنجان</div>
                            <div className="list1-elm-title mb-4"><i className="bi bi-geo-alt-fill"><span className="me-1">خیابان شهرداری ساختمان 7</span></i></div>
                            <div className="list1-elm-header mb-2">شهر زنجان</div>
                            <div className="list1-elm-title mb-4"><i className="bi bi-geo-alt-fill"><span className="me-1">خیابان شهرداری ساختمان 7</span></i></div>
                            <div className="footer-phon-number">(+98)123456789</div>
                        </li>
                        <li className="list-elm"></li>
                    </ul>
                </div>
                <div className="footer-lists me-5">
                    <ul>
                        <li className="list1-header mb-5">منابع مهم ما</li>
                        <li className="list1-elm-title mb-3">
                            <a href="#">
                            میدان فروش کالا
                        </a>
                        </li>
                        <li className="list1-elm-title mb-3">
                            <a href="#">
                            مستندات
                        </a>
                        </li>
                        <li className="list1-elm-title mb-3">
                            <a href="#">
                            مشتریان
                        </a>
                        </li>
                        <li className="list1-elm-title mb-3">
                            <a href="#">
                            فرصت های شغلی
                        </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-lists me-5">
                    <ul>
                        <li className="list1-header mb-5">
                            لینک های میانبر
                        </li>
                        <li className="list1-elm-title mb-3">
                            <a href="#">
                            درباره ما
                            </a>
                        </li>
                        <li className="list1-elm-title mb-3">
                            <a href="#">
                            خدمات ما
                        </a>
                        </li>
                        <li className="list1-elm-title mb-3">
                            <a href="#">
                            دریافت نقل قول
                        </a>
                        </li>
                        <li className="list1-elm-title mb-3">
                            <a href="#">
                            محصولات
                        </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-lists me-5">
                    <ul>
                        <li className="list1-header mb-5">خبرنامه</li>
                        <li className="list1-elm-title mb-3">ثبت نام برای دریافت پیشنهاد ویژه، آموزش، اخبار و به روز رسانی ها</li>
                        <li className="footer-input mb-4">
                            <div className="input-container">
                                <input type="email" name="email" id="emailInput" placeholder="ایمیل شما" className="ms-2"/>
                                <button className="rounded-circle"> {">"} </button>
                            </div>
                        </li>
                        <li className="footer-social-icons">
                            <ul>
                                <li className="ms-3">
                                    <a href="#">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                </li>

                                <li className="ms-3">
                                    <a href="#">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                </li>
                                <li className="ms-3">
                                    <a href="#">
                                        <i className="bi bi-pinterest"></i>
                                    </a>
                                </li>
                                <li className="ms-3">
                                    <a href="#">
                                        <i className="bi bi-facebook"></i>
                                    </a>
                                </li>
                                <li className="ms-3">
                                    <a href="#">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="footer2">
            <div className="container d-flex justify-content-center">
                <div className="license"> کلیه حقوق متعلق به آیلتس ایز است. طراحی توسط آرنیکاوب|1398</div>
                <div className="me-lg-auto d-sm-block d-none">IELTSEASE</div>
            </div>
        </section>
    </footer>
  )
}

export default Footer