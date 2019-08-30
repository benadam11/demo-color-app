import React from "react";
import { ThemeProvider, theme } from "../";

export default function Page({ color, scheme, index, children }) {
  const newTheme = theme({
    color,
    scheme,
    index
  });

  return <ThemeProvider theme={newTheme}>{children}</ThemeProvider>;
}
