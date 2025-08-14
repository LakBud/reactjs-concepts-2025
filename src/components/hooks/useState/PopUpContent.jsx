import React from "react";
import { createPortal } from "react-dom";

const PopUpContent = ({ copied }) => {
  const container = document.querySelector("#popup-content");
  if (!container) return null;

  return createPortal(
    <section>{copied && <div style={{ position: "absolute", bottom: "3rem" }}>Copied: to Clipboard</div>}</section>,
    container
  );
};

export default PopUpContent;
