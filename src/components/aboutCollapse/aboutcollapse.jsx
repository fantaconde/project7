import React from "react";
import "./aboutcollapse.css";

// Title and Content as Props
function CollapseComponent({ title, content}) {
  // State to toggle the collapse

  // Set isExpanded to false
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Help u to change the state of isExpanded

  // isExpanded = !isExpanded 
  const toggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="collapseDiv">
      {/* The button call the toggle function */}
      <button className="collapseButton" onClick={toggle}>
        {title}

        {/* if expanded is true then show the up button if expanded is false show the down button  */}
        {isExpanded ? (
          <i className="fa fa-chevron-up buttonArrow"></i>
        ) : (
          <i className="fa fa-chevron-down buttonArrow"></i>
        )}
      </button>
      {/* Show  the content */}
      {/* if expanded is true then show the content */}
      {isExpanded && <div className="collapseExpanded">{content}</div>}
    </div>
  );
}

export default CollapseComponent;

// Example about page :
// CollapseComponent(
//   title="About Us"
//    content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
// )

// Example Hine page :
// CollapseComponent(
//   title="Home page"
//    content = "This is the home page"
// )