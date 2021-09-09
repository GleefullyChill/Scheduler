


import React from "react";
import classNames from "classnames";


import "./Button.scss";

const Button = function(props) {

  const { onClick, disabled, children, confirm, danger } = props;

  const buttonClass = classNames('button',{
    '--confirm': confirm,
    '--danger': danger
  });

  return (
    <>
      <button
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};


export default Button;