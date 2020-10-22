import React from "react";
import "./MemoryButton.css";

export const MemoryButton = props => (
  <div className="memory-btn" onClick={() => props.handleClick(props.children)}>
    {props.children}
  </div>
  );