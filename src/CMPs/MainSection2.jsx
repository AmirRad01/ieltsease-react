import React from "react";

function MainSection2({ headTitle, title, iconImage, style }) {
  return (
    <article className="col-lg-4 d-flex mt-4 mb-3">
      <div className="main-icon-images1 ms-3">
        <img src={iconImage} alt="car" style={style}/>
      </div>
      <div className="main-icon-title">
        <h5>{headTitle}</h5>
        <p>{title} </p>
        <a href="#">بیشتر بدانید» </a>
      </div>
    </article>
  );
}

export default MainSection2;
