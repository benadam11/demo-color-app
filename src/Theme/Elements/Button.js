import React from "react";
import { StyledButton } from "./Styled";
import { useTheme } from "../";

export function Button(props) {
  const theme = useTheme();
  return <StyledButton maxWidth={[240, "100%"]} theme={theme} {...props} />;
}
