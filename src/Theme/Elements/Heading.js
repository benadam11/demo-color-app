import React from "react";
import { StyledText } from "./Styled";
import { useTheme } from "../";

export function Heading({ level = 4, ...props }) {
  const theme = useTheme();
  return (
    <StyledText
      as={`h${level}`}
      textStyle="text"
      color="textDefault"
      theme={theme}
      {...props}
    />
  );
}
