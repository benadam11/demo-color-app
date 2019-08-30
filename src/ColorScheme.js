import React from "react";
import { getColorData } from "./getColorData";
import ColorSchemeSwatch from "./ColorSchemeSwatch";

export default function ColorScheme({ color, setScheme }) {
  return (
    <div className="color-schemes">
      <div className="color-scheme-swatch-wrapper">
        {getColorData({ primary: color }).map(colorProps => (
          <ColorSchemeSwatch
            key={colorProps.id}
            {...colorProps}
            handleClick={() => {
              setScheme(colorProps.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function ColorSchemeIndicator({ color, scheme, setScheme }) {
  const { label, ...colorProps } = getColorData({ primary: color }).find(
    item => item.id === scheme
  );
  return (
    <ColorSchemeSwatch
      {...colorProps}
      handleClick={() => {
        setScheme(colorProps.id);
      }}
    />
  );
}
