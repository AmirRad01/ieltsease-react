import React from "react";

function MainSection6({date,image,head,title}) {
  return (
    <article className="d-flex flex-column col-9 col-lg-4 col-xl-2 col-sm-10 ms-4 mb-5">
      <div className="package2-image">
        <img src= {image} alt="ielts-academic" />
      </div>
      <div className="package2-title container mt-5">
        <p> {title} </p>
        <h5> {head} </h5>
      </div>
      <div className="package-date container mt-3 mb-5 d-flex">
        <div className="package-timer">
          <i className="bi bi-stopwatch">
            <span className=" me-3"> {date} </span>
          </i>
        </div>
      </div>
    </article>
  );
}

export default MainSection6;
