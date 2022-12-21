import React from "react";
import "./tags.css";

function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag, id) => (
        <div className="tag" key={id}>{tag}</div>
      ))}
    </div>
  );
}

export default Tags;