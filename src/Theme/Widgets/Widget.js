import React from "react";
import { useTheme } from "../";
import { ThemeProvider, theme } from "../";

export default function Widget({ color, overlay = false, index, children }) {
  const { colors, scheme } = useTheme();
  const newTheme = theme({
    color: color || colors.primary,
    scheme,
    index,
    overlay
  });

  return <ThemeProvider theme={newTheme}>{children}</ThemeProvider>;
}
