import React from "react";
import { StyledText } from "./Styled";
import { useTheme } from "../";

export function Link(props) {
  const theme = useTheme();
  return (
    <StyledText
      as="a"
      textStyle="link"
      color="textDefault"
      theme={theme}
      {...props}
    />
  );
}
