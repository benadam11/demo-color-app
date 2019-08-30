import React from "react";
import { StyledBase } from "./Styled";
import { useTheme } from "../";

export function Base(props) {
  const theme = useTheme();
  return <StyledBase theme={theme} {...props} />;
}
