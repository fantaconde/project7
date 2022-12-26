import React from "react";
import "./collapse.css";

function CollapseComponent({ title, content }) {
  return (
    <div className="collapseDiv">
      <button
        data-toggle="collapse"
        data-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
        className="collapseButton"
      >
        {title}
      </button>

      <div id="collapseOne" class="collapse show" aria-labelledby="headingOne">
        <div className="collapseExpanded">{content}</div>
      </div>
    </div>
  );
}

export default CollapseComponent;
