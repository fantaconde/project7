import React from "react";
import "./tags.css";

function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((tag) => (
        <div className="tag">{tag}</div>
      ))}
    </div>
  );
}

export default Tags;