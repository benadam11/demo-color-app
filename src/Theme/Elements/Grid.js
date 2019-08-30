import React from "react";
import { StyledGrid } from "./Styled";
import { useTheme } from "../";

export function Grid(props) {
  const theme = useTheme();
  return <StyledGrid theme={theme} {...props} />;
}
