import React from "react";
import ColorSchemeSwatch from "./ColorSchemeSwatch";

export default function ColorPickerCategory({ colors, label, setColor }) {
  return colors.length ? (
    <div className="color-picker-category">
      {label && <p className="color-picker-label">{label}</p>}
      <div className="color-layout-wrapper">
        {colors.map((c, i) => {
          return (
            <ColorSchemeSwatch
              key={c}
              start={c}
              end={c}
              handleClick={() => {
                setColor(colors[i]);
              }}
            />
          );
        })}
      </div>
    </div>
  ) : null;
}
