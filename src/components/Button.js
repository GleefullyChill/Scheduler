import React from "react";
import classNames from "classnames";


import "components/Button.scss";

export default function Button(props) {

  const buttonClass = classNames('button',{
    '--confirm': props.confirm,
    '--danger': props.danger
  });

  return (
    <>
      <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
      >
        {props.children}
      </button>
    </>
  )
}
