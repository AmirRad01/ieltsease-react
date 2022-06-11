import React, { useState, useEffect } from "react";

function MainSection3({ packageName, teacherName, offer, price, image }) {
  //countdown-Set

  const calculateTimeLeft = () => {
    const difference = +new Date("Jul 25, 2023 18:37:52") - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        hours: Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  return (
    <article className="d-flex flex-column col-12 col-sm-10 col-xl-3 col-lg-4 mb-5 me-sm-4">
      <div className="package-image1">
        <img src={image} alt="ielts-academic" />
      </div>
      <hr />
      <div className="package-title container"> {packageName} </div>
      <div className="package-teacher d-flex container mt-5">
        <div className="teacher-image">
          <i className="bi bi-person-circle ms-2"></i>
        </div>
        <div className="teacher-name">{teacherName}</div>
      </div>
      <div className="offer mt-5 container mb-2 ">
        {offer} <span> / </span>
      </div>
      <div className="package-footer flex-row d-sm-flex d-block container mb-5">
        <div className="package-price me-auto">{price} </div>
        <div className="package-rate ms-auto d-flex">
          <div className="package-timer me-5">
            <i className="bi bi-stopwatch-fill">
              <span className=" ms-3">
                {timeLeft.hours || timeLeft.minutes || timeLeft.seconds
                  ? `${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`
                  : `زمان تمام شده است`}
              </span>
            </i>
          </div>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-half"></i>
          <i className="bi bi-star"></i>
        </div>
      </div>
    </article>
  );
}

export default MainSection3;
