import React from "react";
import { StyledBase } from "./Styled";
import { useTheme } from "../";

export function Container(props) {
  const theme = useTheme();
  return (
    <StyledBase mx="auto" px={24} maxWidth={[1080]} theme={theme} {...props} />
  );
}
