import React from "react";

export default function ColorSchemeSwatch({
  start = "white",
  end = "blue",
  label,
  handleClick,
  style
}) {
  const styles = {
    "--c-start": start,
    "--c-end": end,
    ...style
  };
  return (
    <div className="swatch-item" onClick={handleClick}>
      <div className="scheme-swatch" style={styles} />
      {label && <label>{label}</label>}
    </div>
  );
}
