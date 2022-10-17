import React from "react";

import "./Header.css";

const Header = ({ reference, click }) => {
  return (
    <div className="header" ref={reference}>
      <img
        className="headerImg"
        src="https://ucarecdn.com/ec20f7ed-3d3e-474b-a3e6-0b10b0556c83/3236267MwDGk5JCrtransformed.png"
        alt="green leaf"
      />

      <button onClick={click} className="button-53">
        Blogs
      </button>
    </div>
  );
};

export default Header;
