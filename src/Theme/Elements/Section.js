import React from "react";
import { StyledBase } from "./Styled";
import { useTheme } from "../";

export function Section(props) {
  const theme = useTheme();
  return <StyledBase theme={theme} {...props} />;
}
