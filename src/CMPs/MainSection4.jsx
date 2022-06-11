import React from "react";

function MainSection4({ icon, head, title }) {
  return (
    <article className="d-flex flex-column col-9 col-lg-2 col-sm-8 ms-sm-5 mb-5">
      <div className="main-icon2-image mb-5">
        <img src={icon} alt="ielts-academic" />
      </div>
      <div className="main-icon2-title container">
        <h6>{head} </h6>
        <p className="fw-light"> {title} </p>
      </div>
    </article>
  );
}

export default MainSection4;
