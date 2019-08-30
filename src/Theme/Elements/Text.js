import React from "react";
import { StyledText } from "./Styled";
import { useTheme } from "../";

export function Text(props) {
  const theme = useTheme();
  return (
    <StyledText textStyle="text" color="textDefault" theme={theme} {...props} />
  );
}
