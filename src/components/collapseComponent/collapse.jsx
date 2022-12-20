import Collapse from "@mui/material/Collapse";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";
import "./collapse.css";

function CollapseComponent({title, content}) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="collapseDiv">
      <button className="collapseButton" onClick={() => setExpanded(!expanded)}>
        {title}<span className="buttonArrow">{expanded ? <ExpandLessIcon /> : <KeyboardArrowDownIcon />}</span>
      </button>
      <Collapse in={expanded}>
        <div className="collapseExpanded">
          {content}
        </div>
      </Collapse>
    </div>
  );
}

export default CollapseComponent;
