import React from "react";
import { clamp } from "lodash";
import Slider from "rc-slider";
import { getColorData } from "./getColorData";
import { ColorSchemeIndicator } from "./ColorScheme";

import "rc-slider/assets/index.css";
import { textAlign } from "styled-system";

function getNearestStepValue({ value, min, max }) {
  const clampedValue = clamp(value, min, max);
  return Math.round(clampedValue);
}

export default function ColorSlider({ color, scheme, setScheme }) {
  const data = getColorData(color);

  const handle = props => {
    return (
      <Slider.Handle {...props}>
        <ColorSchemeIndicator color={color} scheme={scheme} />
      </Slider.Handle>
    );
  };

  return (
    <div className="slider-wrapper">
      <Slider
        min={0}
        max={data.length}
        step={0.1}
        defaultValue={0.5}
        handle={handle}
        onChange={value => {
          const index = getNearestStepValue({
            value,
            min: 0,
            max: data.length,
            step: 0.1
          });
          setScheme(data[index].id);
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "16px",
          fontSize: "12px"
        }}
      >
        <label>Light</label>
        <label>Colorful</label>
        <label>Dark</label>
      </div>
    </div>
  );
}
