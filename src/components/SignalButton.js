import React from "react";
import "./SignalButton.css";

export const SignalButton = props => (
    <div className="signal-btn" onClick={() => props.handleClick(props.children)}>
    {props.children}
  </div>
  );