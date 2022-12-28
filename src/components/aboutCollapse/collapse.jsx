import React from "react";
import "./collapse.css";

function CollapseComponent({ title, content, style }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const toggle = () => {
    setIsExpanded(!isExpanded);
  };
  console.log(style);

  return (
        <div className="collapseDiv" style={style}>
        <button className="collapseButton" onClick={toggle}>
          {title}
        </button>
        {isExpanded && <div className="collapseExpanded">{content}</div>}
      </div>
  );
}

export default CollapseComponent;
