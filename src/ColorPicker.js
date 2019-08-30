import React, { useEffect, useRef, useState } from "react";
import ColorSchemeSwatch from "./ColorSchemeSwatch";
import ColorPickerCategory from "./ColorPickerCategory";
import ColorInput from "./ColorInput";

const hues = [
  "#E02020",
  "#FA6400",
  "#F7B500",
  "#44D7B6",
  "#32C5FF",
  "#6236FF",
  "#B620E0"
  // "#000000",
  // "#FFF"
];

export default function ColorPicker({
  color,
  setColor,
  imgColors,
  heroColors
}) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = e => {
      const el = ref.current;
      if (el && el.contains(e.target)) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    if (imgColors.length || heroColors.length) {
      setIsOpen(true);
    }
  }, [imgColors, heroColors]);

  return (
    <div ref={ref} className="picker-wrapper">
      <ColorSchemeSwatch label="Primary Color" start={color} end={color} />
      {isOpen && (
        <div className="color-picker">
          <p className="section-label">Suggested Colors</p>
          <ColorPickerCategory colors={imgColors} setColor={setColor} />
          <ColorPickerCategory colors={heroColors} setColor={setColor} />
          <ColorPickerCategory colors={hues} setColor={setColor} />
          <ColorInput color={color} setColor={setColor} />
        </div>
      )}
    </div>
  );
}
