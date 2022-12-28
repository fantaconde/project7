import React from "react";
import "./collapse.css";

function CollapseComponent({ title, content}) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const toggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
        <div className="collapseDiv">
        <button className="collapseButton" onClick={toggle}>
          {title}
        </button>
        {isExpanded && <div className="collapseExpanded">{content}</div>}
      </div>
  );
}

export default CollapseComponent;
