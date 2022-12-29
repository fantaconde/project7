import React from "react";
import "./aboutcollapse.css";

function CollapseComponent({ title, content}) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const toggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="collapseDiv">
      <button className="collapseButton" onClick={toggle}>
        {title}
        {isExpanded ? (
          <i className="fa fa-chevron-up buttonArrow"></i>
        ) : (
          <i className="fa fa-chevron-down buttonArrow"></i>
        )}
      </button>
      {isExpanded && <div className="collapseExpanded">{content}</div>}
    </div>
  );
}

export default CollapseComponent;
