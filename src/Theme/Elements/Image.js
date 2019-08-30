import React from "react";
import { StyledImage } from "./Styled";

export function Image({ src, ...props }) {
  return <StyledImage src={src} {...props} />;
}
