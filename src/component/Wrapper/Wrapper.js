import React from "react";



function Wrapper(props) {
  return <div className="wrapper flex-wrap">{props.children}
  </div>;
}

export default Wrapper;
