import React from "react";

function ArchiveSection2({image,head,date,title}) {
  return (
    <ul>
      <li className="mb-4">
        <div className="section2-list-image">
          <img src={image} alt="list-image" />
        </div>
        <div className="section2-list-title me-3 container">
          <div className="list-title-header mb-2">
            {head}
          </div>
          <p>
          {title}
          </p>
          <span className="section2-list-date">
            {date} | <a href="#"> ادامه خبر...</a>
          </span>
        </div>
      </li>
    </ul>
  );
}

export default ArchiveSection2;
