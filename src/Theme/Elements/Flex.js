import React from "react";
import { StyledFlex } from "./Styled";
import { useTheme } from "../";

export function Flex(props) {
  const theme = useTheme();
  return <StyledFlex theme={theme} {...props} />;
}
